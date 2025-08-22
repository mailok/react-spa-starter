import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { clientQuieries } from '../../queries';
import { ClientNotFound } from '../client-not-found';

export function BenefitsPage() {
  const { clientId } = useParams();

  const {
    data: client,
    isLoading,
    error,
  } = useQuery(clientQuieries.benefits(clientId!));

  if (error) {
    return <ClientNotFound />;
  }

  if (isLoading || !client) {
    return <BenefitsSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="text-2xl font-bold">Benefits - {client.name}</div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Plan Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Client Status
              </label>
              <div className="mt-1">
                <Badge
                  variant={
                    client.status === 'active'
                      ? 'default'
                      : client.status === 'inactive'
                        ? 'secondary'
                        : 'outline'
                  }
                >
                  {client.status}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Member Since
              </label>
              <p className="mt-1">
                {new Date(client.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-muted-foreground text-sm">
                Benefits plan details and coverage information for {client.name}{' '}
                would be displayed here.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coverage Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Client ID
              </label>
              <p className="mt-1 font-mono text-sm">{client.id}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Contact
              </label>
              <p className="mt-1">{client.email}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-muted-foreground text-sm">
                Coverage limits, deductibles, and benefit utilization would be
                shown here.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Benefits Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <h4 className="font-medium">Health Insurance</h4>
                <p className="text-muted-foreground mt-2 text-sm">
                  Health coverage details for {client.name}
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <h4 className="font-medium">Dental Coverage</h4>
                <p className="text-muted-foreground mt-2 text-sm">
                  Dental benefits and coverage limits
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <h4 className="font-medium">Vision Care</h4>
                <p className="text-muted-foreground mt-2 text-sm">
                  Vision care benefits and allowances
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function BenefitsSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-96" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="h-5 w-full" />
              </div>
            ))}
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="h-5 w-full" />
              </div>
            ))}
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
