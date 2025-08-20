import { sleep } from "../utils";

export type FetchClientsListFilter = {
  status?: string;
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
  gender: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type ClientList = {
  data: Client[];
  total: number;
};

export async function fetchList(filter: FetchClientsListFilter) {
  await sleep();
  let filtered = mockClients;
  if (filter.status) {
    filtered = filtered.filter((client) => client.status === filter.status);
  }

  const page = filter.page ?? 1;
  const size = filter.size ?? 10;
  const start = (page - 1) * size;
  const end = start + size;
  const paginated = filtered.slice(start, end);

  return {
    data: paginated,
    total: filtered.length,
  };
}



// --- MOCK DATA ---

const mockClients: Client[] = [
  {
    id: '1',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    name: 'Juan Carlos Rodríguez',
    email: 'juan.rodriguez@email.com',
    phone: '+1 (555) 123-4567',
    birthDate: '1985-03-15',
    age: 39,
    gender: 'male',
    status: 'active',
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2024-01-10T14:20:00Z',
  },
  {
    id: '2',
    photo:
      'https://images.unsplash.com/photo-1494790108755-2616c96c4e8f?w=150&h=150&fit=crop&crop=face',
    name: 'María González López',
    email: 'maria.gonzalez@email.com',
    phone: '+1 (555) 234-5678',
    birthDate: '1990-07-22',
    age: 34,
    gender: 'female',
    status: 'pending',
    createdAt: '2023-02-20T09:15:00Z',
    updatedAt: '2024-01-08T11:45:00Z',
  },
  {
    id: '3',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    name: 'Roberto Silva',
    email: 'roberto.silva@email.com',
    phone: '+1 (555) 345-6789',
    birthDate: '1978-11-08',
    age: 45,
    gender: 'male',
    status: 'inactive',
    createdAt: '2023-03-10T16:45:00Z',
    updatedAt: '2023-12-15T08:30:00Z',
  },
  {
    id: '4',
    photo:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    name: 'Ana Patricia Morales',
    email: 'ana.morales@email.com',
    phone: '+1 (555) 456-7890',
    birthDate: '1992-05-30',
    age: 32,
    gender: 'female',
    status: 'active',
    createdAt: '2023-04-05T13:20:00Z',
    updatedAt: '2024-01-12T15:10:00Z',
  },
  {
    id: '5',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    name: 'Carlos Eduardo Vega',
    email: 'carlos.vega@email.com',
    phone: '+1 (555) 567-8901',
    birthDate: '1987-09-12',
    age: 37,
    gender: 'male',
    status: 'active',
    createdAt: '2023-05-18T11:30:00Z',
    updatedAt: '2024-01-09T09:20:00Z',
  },
  {
    id: '6',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    name: 'Sofía Hernández',
    email: 'sofia.hernandez@email.com',
    phone: '+1 (555) 678-9012',
    birthDate: '1995-12-03',
    age: 29,
    gender: 'female',
    status: 'pending',
    createdAt: '2023-06-22T14:40:00Z',
    updatedAt: '2024-01-11T16:30:00Z',
  },
];