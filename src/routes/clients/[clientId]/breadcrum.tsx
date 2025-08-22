import { BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Link, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { clientQuieries } from '../queries';

export function ClientDetailBreadcrumb() {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery(
    clientQuieries.client(clientId!)
  );

  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to={`/clients/${clientId}`}>
          {isLoading ? (
            <Skeleton className="h-4 w-24" />
          ) : (
            client?.name || `Client ${clientId}`
          )}
        </Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
