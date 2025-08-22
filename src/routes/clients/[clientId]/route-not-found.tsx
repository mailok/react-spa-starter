import { useParams, Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export function ClientRouteNotFound() {
  const { clientId } = useParams();

  return (
    <div className="flex size-full items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-warning/10">
            <AlertTriangle className="h-8 w-8 text-warning" />
          </div>
          <CardTitle className="text-xl">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            The requested page for this client does not exist.
          </p>
          <p className="text-sm text-muted-foreground">
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
        </CardContent>
      </Card>
    </div>
  );
}
