import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { clientQuieries } from '../../queries';
import { ClientNotFound } from '../client-not-found';

export function MedicalInformationPage() {
  const { clientId } = useParams();

  const {
    data: client,
    isLoading,
    error,
  } = useQuery(clientQuieries.medicalInformation(clientId!));

  if (error) {
    return <ClientNotFound />;
  }

  if (isLoading || !client) {
    return <MedicalInformationSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="text-2xl font-bold">
        Medical Information - {client.name}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Medical History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Patient ID
              </label>
              <p className="mt-1 font-mono text-sm">{client.id}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Medical Status
              </label>
              <div className="mt-1">
                <Badge variant="outline">
                  {client.status === 'active'
                    ? 'Active Patient'
                    : client.status === 'inactive'
                      ? 'Inactive Patient'
                      : 'Pending Review'}
                </Badge>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-muted-foreground text-sm">
                This is the medical information page for {client.name}. Here you
                would display medical records, allergies, medications, and other
                health-related information.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Age
              </label>
              <p className="mt-1">{client.age} years</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Gender
              </label>
              <p className="mt-1 capitalize">{client.gender}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-muted-foreground text-sm">
                Medical metrics and health indicators would be displayed here.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Medical Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="text-muted-foreground">
                Medical records, prescriptions, and treatment history for{' '}
                {client.name} would be displayed here. This is a placeholder for
                the medical information section.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MedicalInformationSkeleton() {
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
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
