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
    queryFn: () => fetchClients(query),
  }),
  client: (id: string) => ({
    queryKey: clientKeys.client(id),
    queryFn: () => fetchClient(id),
  }),
  personalInformation: (id: string) => ({
    queryKey: clientKeys.personalInformation(id),
    queryFn: () => fetchClientPersonalInformation(id),
  }),
  medicalInformation: (id: string) => ({
    queryKey: clientKeys.medicalInformation(id),
    queryFn: () => fetchClientMedicalInformation(id),
  }),
  benefits: (id: string) => ({
    queryKey: clientKeys.benefits(id),
    queryFn: () => fetchClientBenefits(id),
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
async function fetchClients(query: ClientQuery): Promise<ClientsResponse> {
  return httpClient.url('/clients').query(query).get().json();
}

export async function fetchClient(id: string): Promise<Client> {
  return httpClient.url(`/clients/${id}`).get().json();
}

export async function fetchClientPersonalInformation(
  id: string
): Promise<ClientPersonalInformation> {
  return httpClient.url(`/clients/${id}/personal-information`).get().json();
}

export async function fetchClientMedicalInformation(
  id: string
): Promise<ClientMedicalInformation> {
  return httpClient.url(`/clients/${id}/medical-information`).get().json();
}

export async function fetchClientBenefits(id: string): Promise<ClientBenefits> {
  return httpClient.url(`/clients/${id}/benefits`).get().json();
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
