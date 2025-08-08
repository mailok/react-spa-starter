import underConstructionImage from '@/assets/under-construction.png';
import { Link } from 'react-router';
import { Button } from './ui/button';

export function UnderConstruction() {
  return (
    <section className="flex size-full flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={underConstructionImage}
          alt="Under Construction"
          className="w-1/3"
        />
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
          Under Construction
        </h1>
        <p className="max-w-md text-center text-lg text-gray-600 dark:text-gray-400">
          This page is currently under construction. We're working hard to get
          it ready for you. Stay tuned!
        </p>
        <Link to="/">
          <Button variant="link" className="cursor-pointer">
            Go back to the main page
          </Button>
        </Link>
      </div>
    </section>
  );
}
