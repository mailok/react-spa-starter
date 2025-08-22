import { Outlet, useParams } from 'react-router';
import { Link, useLocation } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { clientQuieries } from '../queries';
import { ClientNotFound } from './client-not-found';

export function ClientDetailLayout() {
  const { clientId } = useParams();
  const location = useLocation();

  const {
    data: client,
    isLoading,
    error,
  } = useQuery(clientQuieries.client(clientId!));

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'default';
      case 'inactive':
        return 'secondary';
      case 'pending':
        return 'outline';
      default:
        return 'default';
    }
  };

  const getCurrentTab = () => {
    const path = location.pathname;
    if (path.includes('/medical-information')) return 'medical-information';
    if (path.includes('/benefits')) return 'benefits';
    return 'personal-information';
  };

  // Error state
  if (error) {
    return <ClientNotFound />;
  }

  // Loading state
  if (isLoading || !client) {
    return (
      <div className="flex size-full flex-col gap-6 p-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="flex-1">
                <Skeleton className="mb-2 h-6 w-48" />
                <Skeleton className="h-4 w-64" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid w-full grid-cols-3 gap-2">
              <Skeleton className="h-10" />
              <Skeleton className="h-10" />
              <Skeleton className="h-10" />
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col gap-6 p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={client.photo} alt={client.name} />
              <AvatarFallback>
                {client.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                {client.name}
                <Badge variant={getStatusVariant(client.status)}>
                  {client.status}
                </Badge>
              </CardTitle>
              <p className="text-muted-foreground text-sm">{client.email}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={getCurrentTab()} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal-information" asChild>
                <Link to={`/clients/${clientId}/personal-information`}>
                  Personal Information
                </Link>
              </TabsTrigger>
              <TabsTrigger value="medical-information" asChild>
                <Link to={`/clients/${clientId}/medical-information`}>
                  Medical Information
                </Link>
              </TabsTrigger>
              <TabsTrigger value="benefits" asChild>
                <Link to={`/clients/${clientId}/benefits`}>Benefits</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
