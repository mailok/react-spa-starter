import { httpClient } from '@/lib/client-http';

export const clientKeys = {
  all: ['clients'] as const,
  list: (query: ClientQuery) => [...clientKeys.all, query] as const,
  insights: () => [...clientKeys.all, 'insights'] as const,
  client: (id: string) => [...clientKeys.all, 'detail', id] as const,
  personalInformation: (id: string) =>
    [...clientKeys.all, 'personal-information', id] as const,
  medicalInformation: (id: string) =>
    [...clientKeys.all, 'medical-information', id] as const,
  benefits: (id: string) => [...clientKeys.all, 'benefits', id] as const,
};

export const clientQuieries = {
  clients: (query: ClientQuery) => ({
    queryKey: clientKeys.list(query),
    queryFn: ({ signal }: { signal: AbortSignal }) =>
      fetchClients(query, signal),
  }),
  client: (id: string) => ({
    queryKey: clientKeys.client(id),
    queryFn: ({ signal }: { signal: AbortSignal }) => fetchClient(id, signal),
  }),
  personalInformation: (id: string) => ({
    queryKey: clientKeys.personalInformation(id),
    queryFn: ({ signal }: { signal: AbortSignal }) =>
      fetchClientPersonalInformation(id, signal),
  }),
  medicalInformation: (id: string) => ({
    queryKey: clientKeys.medicalInformation(id),
    queryFn: ({ signal }: { signal: AbortSignal }) =>
      fetchClientMedicalInformation(id, signal),
  }),
  benefits: (id: string) => ({
    queryKey: clientKeys.benefits(id),
    queryFn: ({ signal }: { signal: AbortSignal }) =>
      fetchClientBenefits(id, signal),
  }),
  insights: () => ({
    queryKey: clientKeys.insights(),
    queryFn: ({ signal }: { signal: AbortSignal }) => fetchInsights(signal),
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
};

export type ClientInsights = {
  active: number;
  inactive: number;
  pending: number;
  total: number;
};

export type ClientPersonalInformation = {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  age: number;
  gender: 'male' | 'female';
  status: 'active' | 'inactive' | 'pending';
  photo: string;
  createdAt: string;
  updatedAt: string;
  // Additional personal info fields
  address?: string;
  emergencyContact?: string;
  nationality?: string;
};

export type ClientMedicalInformation = {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'pending';
  age: number;
  gender: 'male' | 'female';
  // Medical specific fields
  bloodType?: string;
  allergies?: string[];
  medications?: string[];
  medicalHistory?: string[];
  lastCheckup?: string;
  doctorNotes?: string;
};

export type ClientBenefits = {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  // Benefits specific fields
  planType?: string;
  coverageLevel?: string;
  deductible?: number;
  copay?: number;
  benefitsUsed?: number;
  benefitsRemaining?: number;
  renewalDate?: string;
};

// ---------------------------------
//                API FUNCTIONS
// ---------------------------------
async function fetchClients(
  query: ClientQuery,
  signal?: AbortSignal
): Promise<ClientsResponse> {
  return httpClient
    .url('/clients')
    .query(query)
    .options({ signal })
    .get()
    .json();
}

export async function fetchClient(
  id: string,
  signal?: AbortSignal
): Promise<Client> {
  return httpClient.url(`/clients/${id}`).options({ signal }).get().json();
}

export async function fetchClientPersonalInformation(
  id: string,
  signal?: AbortSignal
): Promise<ClientPersonalInformation> {
  return httpClient
    .url(`/clients/${id}/personal-information`)
    .options({ signal })
    .get()
    .json();
}

export async function fetchClientMedicalInformation(
  id: string,
  signal?: AbortSignal
): Promise<ClientMedicalInformation> {
  return httpClient
    .url(`/clients/${id}/medical-information`)
    .options({ signal })
    .get()
    .json();
}

export async function fetchClientBenefits(
  id: string,
  signal?: AbortSignal
): Promise<ClientBenefits> {
  return httpClient
    .url(`/clients/${id}/benefits`)
    .options({ signal })
    .get()
    .json();
}

async function fetchInsights(signal?: AbortSignal): Promise<ClientInsights> {
  return httpClient.url('/clients/insights').options({ signal }).get().json();
}

// ---------------------------------
//                MUTATIONS
// ---------------------------------
export async function createClient(
  client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>,
  signal?: AbortSignal
): Promise<Client> {
  return httpClient.url('/clients').options({ signal }).post(client).json();
}

export async function updateClient(
  id: string,
  updates: Partial<Client>,
  signal?: AbortSignal
): Promise<Client> {
  return httpClient
    .url(`/clients/${id}`)
    .options({ signal })
    .put(updates)
    .json();
}

export async function deleteClient(
  id: string,
  signal?: AbortSignal
): Promise<void> {
  return httpClient.url(`/clients/${id}`).options({ signal }).delete().res(); // Use .res() instead of .json() for void responses
}
