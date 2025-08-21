# Mock Server with MSW

This folder contains the fake server configuration using Mock Service Worker (MSW) to simulate API calls. 

**🚀 Ready for production** - Works everywhere without any configuration needed.

## Structure

```
src/server/
├── data/           # Mock data
│   └── clients.ts  # Client data
├── handlers/       # Endpoint handlers
│   ├── index.ts    # Export all handlers
│   └── clients.ts  # Client-related endpoints
├── browser.ts      # Worker configuration for browser
├── index.ts        # Main entry point
└── README.md       # This file
```

## Available Endpoints

### Clients

- **GET** `/api/clients` - List clients with filters and pagination
  - Query params: `status`, `search`, `page`, `size`
  
- **GET** `/api/clients/insights` - Client statistics
  
- **GET** `/api/clients/:id` - Get client by ID
  
- **POST** `/api/clients` - Create new client
  
- **PUT** `/api/clients/:id` - Update client
  
- **DELETE** `/api/clients/:id` - Delete client

## How It Works

1. **MSW initializes automatically** from `main.tsx` (development + production)
2. **Intercepts HTTP requests** that match defined handlers
3. **Works with httpClient** - Uses wretch with QueryStringAddon for clean API calls
4. **Simulates realistic network delays** (100-1200ms variable) using `sleep()` utility
5. **Returns data** from the `clientsData` array with appropriate manipulations

## Development

### Adding New Endpoints

1. Create handler in `src/server/handlers/[feature].ts`
2. Export it from `src/server/handlers/index.ts`
3. Worker will restart automatically in development

### Modifying Data

Data is located in `src/server/data/` and can be modified directly. Changes are reflected immediately.

### Debugging

MSW logs all intercepted requests in the browser console with the [MSW] prefix.

## Removing MSW (When You Have a Real Backend)

When you're ready to connect to a real backend, simply:

1. **Remove the mock server folder:**
   ```bash
   rm -rf src/server
   ```

2. **Update `main.tsx`:**
   ```typescript
   // Remove these lines:
   async function enableMocking() { ... }
   enableMocking().then(() => { ... });
   
   // Replace with direct render:
   createRoot(root).render(
     <StrictMode>
       <Providers>
         <RouterProvider router={router} />
       </Providers>
     </StrictMode>
   );
   ```

3. **Update your API calls in `queries.ts`:**
   - Change httpClient URLs to your real API endpoints
   - Update `VITE_API_URL` environment variable for your real backend
   - Adjust response handling if needed

4. **Uninstall MSW (optional):**
   ```bash
   npm uninstall msw
   rm public/mockServiceWorker.js
   ```

## Notes

- ✅ **Always enabled** - No configuration needed
- ✅ **Works everywhere** - Development, production, any hosting platform
- ✅ **Easy to remove** - Just delete the `src/server` folder when ready
- ⚠️ **Stateless** - Data resets on page reload
- 🎯 **Perfect for** - Starter templates, demos, prototypes, frontend-only apps
- 📦 **Production ready** - MSW is in `dependencies` (not `devDependencies`) for production builds
