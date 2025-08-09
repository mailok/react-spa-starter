import { queryClient } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import { SidebarProvider } from './ui/sidebar';
import { ThemeProvider } from './theme-provider';
import { ColorThemeProvider } from './themes/color-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <ColorThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ColorThemeProvider>
      </ThemeProvider>
      <Toaster />
      {import.meta.env.MODE === 'development' && (
        <>
          <ReactQueryDevtools buttonPosition="bottom-right" />
        </>
      )}
    </QueryClientProvider>
  );
};
