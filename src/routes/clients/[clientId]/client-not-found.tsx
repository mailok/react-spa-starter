import { useParams, Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export function ClientNotFound() {
  const { clientId } = useParams();

  return (
    <div className="flex size-full items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-xl">Client Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            The client with ID <span className="font-mono font-medium">{clientId}</span> could not be found.
          </p>
          <p className="text-sm text-muted-foreground">
            The client may have been deleted or the ID might be incorrect.
          </p>
          <Button asChild className="w-full">
            <Link to="/clients">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Clients
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
