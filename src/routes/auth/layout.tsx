import { GalleryVerticalEnd } from 'lucide-react';
import { Link, Outlet } from 'react-router';
import { ColorThemeToggle } from '@/components/themes/color-theme-toggle';
import { ModeToggle } from '@/components/theme-toggle';

export function AuthLayout() {
  return (
    <div className="bg-muted flex min-h-svh w-full flex-col items-center justify-center gap-6 p-6 md:p-10">
      {/* Theme toggles in top-right corner */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ColorThemeToggle />
        <ModeToggle />
      </div>

      <div className="flex w-full max-w-sm flex-col items-center gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          SPA Template
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
