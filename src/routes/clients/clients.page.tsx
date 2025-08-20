import { UnderConstruction } from '@/components/under-construction';
import { useQuery } from '@tanstack/react-query';
import { clientKeys } from './queries';
import api from '@/lib/api';
import type { FetchClientsListFilter } from '@/lib/api/clients';
import { useState } from 'react';

export default function ClientsPage() {
  const [filter] = useState<FetchClientsListFilter>({
    status: 'active',
    page: 1,
    size: 10,
  });

  const { data, isLoading } = useQuery({
    queryKey: clientKeys.list(filter),
    queryFn: () => api.clients.fetchList(filter),
  });

  console.log(data);
  console.log(isLoading);

  return <UnderConstruction />;
}
