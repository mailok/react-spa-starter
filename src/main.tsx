import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';
import { Providers } from './components/providers';

const root = document.getElementById('root')!;

async function enableMocking() {
  // Always enable MSW for this starter template
  // Remove this entire function when you have a real backend
  const { worker } = await import('./server');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  createRoot(root).render(
    <StrictMode>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </StrictMode>
  );
});
