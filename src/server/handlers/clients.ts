import { http, HttpResponse } from 'msw';
import { clientsData, type Client } from '../data/clients';
import { sleep } from '../../lib/utils';

export const clientsHandlers = [
  // GET /api/clients - Get clients list with filters
  http.get('/api/clients', async ({ request }) => {
    const url = new URL(request.url);
    const status = url.searchParams.get('status');
    const search = url.searchParams.get('search');
    const page = parseInt(url.searchParams.get('page') || '1');
    const size = parseInt(url.searchParams.get('size') || '10');

    let filtered = [...clientsData];

    // Filter by status
    if (status && status !== 'all') {
      filtered = filtered.filter((client) => client.status === status);
    }

    // Filter by search (name and email)
    if (search && search.trim() !== '') {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (client) =>
          client.name.toLowerCase().includes(searchLower) ||
          client.email.toLowerCase().includes(searchLower)
      );
    }

    // Pagination
    const start = (page - 1) * size;
    const end = start + size;
    const paginated = filtered.slice(start, end);

    // Simulate realistic network delay
    await sleep();

    return HttpResponse.json({
      clients: paginated,
      total: filtered.length,
      page,
      size,
      totalPages: Math.ceil(filtered.length / size),
    });
  }),
  // GET /api/clients/insights - Get client statistics
  http.get('/api/clients/insights', async () => {
    const insights = {
      active: clientsData.filter((client) => client.status === 'active').length,
      inactive: clientsData.filter((client) => client.status === 'inactive')
        .length,
      pending: clientsData.filter((client) => client.status === 'pending')
        .length,
      total: clientsData.length,
    };

    // Simulate realistic network delay
    await sleep();

    return HttpResponse.json(insights);
  }),
  // GET /api/clients/:id - Get client by ID
  http.get('/api/clients/:id', async ({ params }) => {
    const { id } = params;
    const client = clientsData.find((c) => c.id === id);

    if (!client) {
      return HttpResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    await sleep();

    return HttpResponse.json(client);
  }),
  // GET /api/clients/:id/personal-information
  http.get('/api/clients/:id/personal-information', async ({ params }) => {
    const { id } = params;
    const client = clientsData.find((c) => c.id === id);

    if (!client) {
      return HttpResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    // Return personal information with additional mock data
    const personalInfo = {
      ...client,
      address: '123 Main St, City, State 12345',
      emergencyContact: '+1 (555) 999-0000',
      nationality: 'American',
    };

    await sleep();

    return HttpResponse.json(personalInfo);
  }),
  // GET /api/clients/:id/medical-information
  http.get('/api/clients/:id/medical-information', async ({ params }) => {
    const { id } = params;
    const client = clientsData.find((c) => c.id === id);

    if (!client) {
      return HttpResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    // Return medical information with mock data
    const medicalInfo = {
      id: client.id,
      name: client.name,
      status: client.status,
      age: client.age,
      gender: client.gender,
      bloodType: 'O+',
      allergies: ['Peanuts', 'Shellfish'],
      medications: ['Aspirin 81mg', 'Vitamin D'],
      medicalHistory: ['Hypertension', 'Diabetes Type 2'],
      lastCheckup: '2024-01-15',
      doctorNotes:
        'Patient is in good health. Continue current medication regimen.',
    };

    await sleep();

    return HttpResponse.json(medicalInfo);
  }),
  // GET /api/clients/:id/benefits
  http.get('/api/clients/:id/benefits', async ({ params }) => {
    const { id } = params;
    const client = clientsData.find((c) => c.id === id);

    if (!client) {
      return HttpResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    // Return benefits information with mock data
    const benefitsInfo = {
      id: client.id,
      name: client.name,
      email: client.email,
      status: client.status,
      createdAt: client.createdAt,
      planType: 'Premium Health Plan',
      coverageLevel: 'Comprehensive',
      deductible: 1000,
      copay: 25,
      benefitsUsed: 2500,
      benefitsRemaining: 7500,
      renewalDate: '2024-12-31',
    };

    await sleep();

    return HttpResponse.json(benefitsInfo);
  }),
  // POST /api/clients - Create new client
  http.post('/api/clients', async ({ request }) => {
    const newClient = (await request.json()) as Omit<
      Client,
      'id' | 'createdAt' | 'updatedAt'
    >;

    const client: Client = {
      ...newClient,
      id: (clientsData.length + 1).toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    clientsData.push(client);

    await sleep();

    return HttpResponse.json(client, { status: 201 });
  }),
  // PUT /api/clients/:id - Update client
  http.put('/api/clients/:id', async ({ params, request }) => {
    const { id } = params;
    const updates = (await request.json()) as Partial<Client>;

    const clientIndex = clientsData.findIndex((c) => c.id === id);

    if (clientIndex === -1) {
      return HttpResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    clientsData[clientIndex] = {
      ...clientsData[clientIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    await sleep();

    return HttpResponse.json(clientsData[clientIndex]);
  }),
  // DELETE /api/clients/:id - Delete client
  http.delete('/api/clients/:id', async ({ params }) => {
    const { id } = params;
    const clientIndex = clientsData.findIndex((c) => c.id === id);

    if (clientIndex === -1) {
      return HttpResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    clientsData.splice(clientIndex, 1);

    await sleep();

    return HttpResponse.json({ success: true });
  }),
];
