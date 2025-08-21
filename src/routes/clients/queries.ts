import { clients } from '@/lib/mock-data';
import { sleep } from '@/lib/utils';

export const clientKeys = {
  all: ['clients'] as const,
  list: (query: ClientQuery) => [...clientKeys.all, query] as const,
  insights: () => [...clientKeys.all, 'insights'] as const,
};

export const clientQuieries = {
  clients: (query: ClientQuery) => ({
    queryKey: clientKeys.list(query),
    queryFn: () => fetchClients(query),
  }),
  insights: () => ({
    queryKey: clientKeys.insights(),
    queryFn: () => fetchInsights(),
  }),
};

// ---------------------------------
//                QUERIES
// ---------------------------------
export type ClientQuery = {
  status?: string;
  search?: string;
  page?: number;
  size?: number;
};

async function fetchClients(query: ClientQuery) {
  await sleep();

  const { status, search, page = 1, size = 10 } = query;
  let filtered = clients;

  if (status) {
    filtered = filtered.filter((client) => client.status === status);
  }

  if (search && search.trim() !== '') {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter((client) =>
      client.name.toLowerCase().includes(searchLower)
    );
  }

  const start = (page - 1) * size;
  const end = start + size;
  const paginated = filtered.slice(start, end);

  return {
    clients: paginated,
    total: filtered.length,
  };
}

async function fetchInsights() {
  await sleep();
  return {
    active: clients.filter((client) => client.status === 'active').length,
    inactive: clients.filter((client) => client.status === 'inactive').length,
    pending: clients.filter((client) => client.status === 'pending').length,
    total: clients.length,
  };
}