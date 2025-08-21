import { httpClient } from '@/lib/client-http';

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
//                TYPES
// ---------------------------------
export type ClientQuery = {
  status?: string;
  search?: string;
  page?: number;
  size?: number;
};

export type Client = {
  id: string;
  photo: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  age: number;
  gender: 'male' | 'female';
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
};

export type ClientsResponse = {
  clients: Client[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
};

export type ClientInsights = {
  active: number;
  inactive: number;
  pending: number;
  total: number;
};

// ---------------------------------
//                API FUNCTIONS
// ---------------------------------
async function fetchClients(query: ClientQuery): Promise<ClientsResponse> {
  return httpClient.url('/clients').query(query).get().json();
}

async function fetchInsights(): Promise<ClientInsights> {
  return httpClient.url('/clients/insights').get().json();
}

// ---------------------------------
//                MUTATIONS
// ---------------------------------
export async function createClient(
  client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Client> {
  return httpClient.url('/clients').post(client).json();
}

export async function updateClient(
  id: string,
  updates: Partial<Client>
): Promise<Client> {
  return httpClient.url(`/clients/${id}`).put(updates).json();
}

export async function deleteClient(id: string): Promise<void> {
  return httpClient.url(`/clients/${id}`).delete().res(); // Use .res() instead of .json() for void responses
}
