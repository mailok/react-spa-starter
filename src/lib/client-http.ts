import wretch from 'wretch';

// Base URL for your API - adjust according to your environment
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Types
interface MiddlewareNext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (url: string, opts: any): Promise<Response>;
}

interface RefreshTokenResponse {
  token?: string;
  refreshToken?: string;
}

interface LoginResponse {
  token: string;
  refreshToken: string;
  user: unknown;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
}

// Token management
const TOKEN_KEY = 'auth_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

// Routes that don't need authentication
const PUBLIC_ROUTES = [
  '/auth/login',
  '/auth/register', 
  '/auth/forgot-password',
  '/auth/reset-password'
];

// Token utilities
export const tokenManager = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  removeToken: () => localStorage.removeItem(TOKEN_KEY),
  
  getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),
  setRefreshToken: (token: string) => localStorage.setItem(REFRESH_TOKEN_KEY, token),
  removeRefreshToken: () => localStorage.removeItem(REFRESH_TOKEN_KEY),
  
  clearAll: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
};

// Check if route needs authentication
const isPublicRoute = (url: string): boolean => {
  return PUBLIC_ROUTES.some(route => url.includes(route));
};

// Middleware to automatically add bearer token
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authMiddleware = (next: MiddlewareNext) => async (url: string, opts: any) => {
  const token = tokenManager.getToken();
  
  // Add token if available and route is not public
  if (token && !isPublicRoute(url)) {
    opts.headers = {
      ...opts.headers,
      'Authorization': `Bearer ${token}`
    };
  }
  
  return next(url, opts);
};

// Middleware to handle 401 errors and refresh token
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshTokenMiddleware = (next: MiddlewareNext) => async (url: string, opts: any) => {
  try {
    return await next(url, opts);
  } catch (error: unknown) {
    // Check if it's a 401 error and we have a refresh token
    const isHttpError = error && typeof error === 'object' && 'status' in error;
    if (isHttpError && (error as { status: number }).status === 401 && tokenManager.getRefreshToken() && !isPublicRoute(url)) {
      try {
        console.log('Token expired, attempting refresh...');
        
        // Attempt to refresh the token
        const refreshResponse = await wretch(`${BASE_URL}/auth/refresh`)
          .headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenManager.getRefreshToken()}`
          })
          .post()
          .json<RefreshTokenResponse>();

        // Save new tokens
        if (refreshResponse.token) {
          tokenManager.setToken(refreshResponse.token);
        }
        if (refreshResponse.refreshToken) {
          tokenManager.setRefreshToken(refreshResponse.refreshToken);
        }

        console.log('Token refreshed successfully, retrying original request...');

        // Retry original request with new token
        opts.headers = {
          ...opts.headers,
          'Authorization': `Bearer ${refreshResponse.token}`
        };
        
        return await next(url, opts);
        
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        
        // Clear tokens and redirect to login
        tokenManager.clearAll();
        
        // You can add navigation logic here
        // Example: window.location.href = '/auth/login';
        
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
    'Accept': 'application/json',
  })
  // Default fetch options
  .options({
    credentials: 'include', // Include cookies for authentication
    mode: 'cors', // Enable CORS
  })
  // Add middlewares in order: auth first, then refresh token handling
  .middlewares([
    authMiddleware,
    refreshTokenMiddleware
  ]);

// Authentication API helpers
export const authApi = {
  // Login
  login: async (credentials: { email: string; password: string }) => {
    const response = await httpClient
      .url('/auth/login')
      .post(credentials)
      .json<LoginResponse>();
    
    // Save tokens after successful login
    if (response.token) {
      tokenManager.setToken(response.token);
    }
    if (response.refreshToken) {
      tokenManager.setRefreshToken(response.refreshToken);
    }
    
    return response;
  },

  // Logout
  logout: async () => {
    try {
      await httpClient.url('/auth/logout').post().res();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear tokens on logout
      tokenManager.clearAll();
    }
  },

  // Register
  register: (userData: RegisterData) =>
    httpClient.url('/auth/register').post(userData).json(),

  // Forgot password
  forgotPassword: (email: string) =>
    httpClient.url('/auth/forgot-password').post({ email }).json(),

  // Reset password
  resetPassword: (token: string, password: string) =>
    httpClient.url('/auth/reset-password').post({ token, password }).json(),

  // Get current user (requires auth)
  getCurrentUser: () =>
    httpClient.url('/auth/me').get().json(),

  // Check if user is authenticated
  isAuthenticated: () => !!tokenManager.getToken(),
};

// Helper methods for common operations (these will automatically include auth)
export const api = {
  // GET request
  get: <T = unknown>(url: string) => 
    httpClient.get(url).json<T>(),

  // POST request
  post: <T = unknown>(url: string, data?: unknown) => 
    httpClient.url(url).post(data).json<T>(),

  // PUT request  
  put: <T = unknown>(url: string, data?: unknown) => 
    httpClient.url(url).put(data).json<T>(),

  // PATCH request
  patch: <T = unknown>(url: string, data?: unknown) => 
    httpClient.url(url).patch(data).json<T>(),

  // DELETE request
  delete: <T = unknown>(url: string) => 
    httpClient.url(url).delete().json<T>(),

  // Custom request with full control
  request: (url: string) => httpClient.url(url),
};

// Export the base instance for advanced usage
export default httpClient;
