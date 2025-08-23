import { useParams, Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export function ClientNotFound() {
  const { clientId } = useParams();

  return (
    <div className="flex size-full items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="bg-destructive/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <AlertCircle className="text-destructive h-8 w-8" />
        </div>
        <h1 className="mb-6 text-xl font-semibold">Client Not Found</h1>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The client with ID{' '}
            <span className="font-mono font-medium">{clientId}</span> could not
            be found.
          </p>
          <p className="text-muted-foreground text-sm">
            The client may have been deleted or the ID might be incorrect.
          </p>
          <Button asChild className="w-full">
            <Link to="/clients">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Clients
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
