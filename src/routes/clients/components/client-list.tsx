import { ClientCard } from './client-card';
import { ClientTable } from './client-table';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { clientKeys, type Client } from '../queries';
import { useClientSearch } from '../use-client-search';
import { useClientsQuery } from '../use-clients-query';

export function ClientList() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [{ viewMode }] = useClientSearch();
  const { data, isLoading } = useClientsQuery();

  const clients = data?.clients ?? [];

  const handleClientClick = (client: Client) => {
    queryClient.setQueryData(clientKeys.client(client.id), client);
    navigate(`/clients/${client.id}`);
  };

  if (isLoading) {
    return viewMode === 'cards' ? (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ClientCardSkeleton key={i} />
        ))}
      </div>
    ) : (
      <ClientTableSkeleton />
    );
  }

  if (clients.length === 0) {
    return (
      <Card className="card-elevated">
        <CardContent className="p-12 text-center">
          <div className="bg-muted mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              className="text-muted-foreground h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-foreground mt-4 text-lg font-semibold">
            No clients found
          </h3>
          <p className="text-muted-foreground mt-2 text-sm">
            No clients were found matching the applied filters.
          </p>
        </CardContent>
      </Card>
    );
  }

  return viewMode === 'cards' ? (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          client={client}
          onClick={() => handleClientClick(client)}
        />
      ))}
    </div>
  ) : (
    <ClientTable clients={clients} onClientClick={handleClientClick} />
  );
}

function ClientCardSkeleton() {
  return (
    <Card className="card-elevated">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-36" />
            </div>
            <div className="border-border border-t pt-3">
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ClientTableSkeleton() {
  return (
    <div className="bg-card rounded-lg border shadow">
      <div className="space-y-4 p-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="grid flex-1 grid-cols-7 gap-4">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
