import wretch, { type ConfiguredMiddleware } from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';
import { TokenStorage } from './token-storage';

// Base URL for your API - adjust according to your environment
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Routes that don't need authentication
const PUBLIC_ROUTES = [
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/reset-password',
];

// Check if route needs authentication
const isPublicRoute = (url: string): boolean => {
  return PUBLIC_ROUTES.some((route) => url.includes(route));
};

// Middleware to automatically add bearer token
const authMiddleware: ConfiguredMiddleware = (next) => async (url, opts) => {
  const token = TokenStorage.getToken();

  // Add token if available and route is not public
  if (token && !isPublicRoute(url)) {
    opts.headers = {
      ...opts.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return next(url, opts);
};

// Middleware to handle 401 errors and refresh token
const refreshTokenMiddleware: ConfiguredMiddleware =
  (next) => async (url, opts) => {
    try {
      return await next(url, opts);
    } catch (error: unknown) {
      // Check if it's a 401 error and we have a refresh token
      const isHttpError =
        error && typeof error === 'object' && 'status' in error;
      if (
        isHttpError &&
        (error as { status: number }).status === 401 &&
        TokenStorage.getRefreshToken() &&
        !isPublicRoute(url)
      ) {
        try {
          console.log('Token expired, attempting refresh...');
          // Attempt to refresh the token
          const refreshResponse = await wretch(`${BASE_URL}/auth/refresh`)
            .headers({
              'Content-Type': 'application/json',
              Authorization: `Bearer ${TokenStorage.getRefreshToken()}`,
            })
            .post()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .json<any>();

          // Save new tokens
          if (refreshResponse.token) {
            TokenStorage.setToken(refreshResponse.token);
          }
          if (refreshResponse.refreshToken) {
            TokenStorage.setRefreshToken(refreshResponse.refreshToken);
          }

          console.log(
            'Token refreshed successfully, retrying original request...'
          );

          // Retry original request with new token
          opts.headers = {
            ...opts.headers,
            Authorization: `Bearer ${refreshResponse.token}`,
          };

          return await next(url, opts);
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          TokenStorage.clearAll();
          throw new Error('Session expired. Please login again.');
        }
      }

      // Re-throw the original error if it's not a 401 or refresh failed
      throw error;
    }
  };

// Create and configure the wretch instance
export const httpClient = wretch(BASE_URL)
  // Default headers for all requests
  .headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  })
  // Default fetch options
  .options({
    credentials: 'include', // Include cookies for authentication
    mode: 'cors', // Enable CORS
  })
  // Add QueryString addon for easy query parameter handling
  .addon(QueryStringAddon)
  // Add middlewares in order: auth first, then refresh token handling
  .middlewares([authMiddleware, refreshTokenMiddleware]);


/**
 * HTTP Client Usage Examples
 *
 * Basic requests:
 * const users = await httpClient.url('/users').get().json();
 * const user = await httpClient.url('/users').post({ name: 'John' }).json();
 *
 * With Query Parameters (using QueryStringAddon):
 * const users = await httpClient.url('/users').query({
 *   page: 1,
 *   limit: 10,
 *   search: 'john',
 *   active: true
 * }).get().json();
 * // Results in: GET /users?page=1&limit=10&search=john&active=true
 *
 * With AbortSignal for cancellation:
 * const controller = new AbortController();
 * const users = await httpClient.url('/users')
 *   .options({ signal: controller.signal })
 *   .get().json();
 * // Cancel: controller.abort();
 *
 * With custom headers:
 * const data = await httpClient.url('/users')
 *   .headers({ 'X-Custom-Header': 'value' })
 *   .get().json();
 *
 * Complex example with all features:
 * const controller = new AbortController();
 * const users = await httpClient.url('/users')
 *   .query({
 *     page: 1,
 *     filters: { status: 'active', role: 'admin' }
 *   })
 *   .headers({ 'X-Request-ID': requestId })
 *   .options({
 *     signal: controller.signal,
 *     timeout: 10000
 *   })
 *   .get()
 *   .json();
 */

// Export the base instance for advanced usage
export default httpClient;
