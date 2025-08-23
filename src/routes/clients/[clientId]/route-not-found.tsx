import { useParams, Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export function ClientRouteNotFound() {
  const { clientId } = useParams();

  return (
    <div className="flex size-full items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="bg-warning/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <AlertTriangle className="text-warning h-8 w-8" />
        </div>
        <h1 className="mb-6 text-xl font-semibold">Page Not Found</h1>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The requested page for this client does not exist.
          </p>
          <p className="text-muted-foreground text-sm">
            Please check the URL or navigate to one of the available sections.
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link to={`/clients/${clientId}/personal-information`}>
                View Personal Information
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/clients">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Clients
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
