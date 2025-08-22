import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { clientQuieries } from '../../queries';
import { ClientNotFound } from '../client-not-found';

export function PersonalInformationPage() {
  const { clientId } = useParams();

  const {
    data: client,
    isLoading,
    error,
  } = useQuery(clientQuieries.personalInformation(clientId!));

  if (error) {
    return <ClientNotFound />;
  }

  if (isLoading || !client) {
    return <PersonalInformationSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="text-2xl font-bold">
        Personal Information - {client.name}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Full Name
              </label>
              <p className="mt-1">{client.name}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Email
              </label>
              <p className="mt-1">{client.email}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Phone
              </label>
              <p className="mt-1">{client.phone}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Gender
              </label>
              <p className="mt-1 capitalize">{client.gender}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Birth Date
              </label>
              <p className="mt-1">
                {new Date(client.birthDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Age
              </label>
              <p className="mt-1">{client.age} years old</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Status
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Created At
              </label>
              <p className="mt-1">
                {new Date(client.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Last Updated
              </label>
              <p className="mt-1">
                {new Date(client.updatedAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Client ID
              </label>
              <p className="mt-1 font-mono text-sm">{client.id}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function PersonalInformationSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-96" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="h-5 w-full" />
              </div>
            ))}
          </CardContent>
        </Card>

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
          </CardContent>
        </Card>

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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
