import { Link } from 'react-router';
import { Construction, Hammer, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export function UnderConstruction() {
  return (
    <section className="flex size-full flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated SVG Icon */}
        <div className="relative">
          {/* Main construction icon */}
          <Construction className="h-24 w-24 animate-pulse text-orange-500" />

          {/* Floating hammer with animation */}
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Hammer className="h-8 w-8 rotate-45 text-yellow-600" />
          </div>

          {/* Background circle for better visual impact */}
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-orange-100 opacity-50 blur-2xl dark:bg-orange-900/20"></div>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent">
            Under Construction
          </h1>

          <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
            This page is currently under construction. We're working hard to get
            it ready for you. Stay tuned!
          </p>

          {/* Progress bar simulation */}
          <div className="bg-muted mx-auto h-2 w-64 overflow-hidden rounded-full">
            <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          </div>
          <p className="text-muted-foreground text-sm">75% Complete</p>
        </div>

        <Link to="/">
          <Button
            variant="outline"
            className="gap-2 hover:bg-orange-50 dark:hover:bg-orange-900/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back to the main page
          </Button>
        </Link>
      </div>
    </section>
  );
}
