import { ClientList } from './client-list';
import { ClientsProvider } from './clients-provider';
import { ClientsFilter } from './clients-filter';

export default function ClientsPage() {
  return (
    <ClientsProvider>
      <div className="flex size-full flex-col gap-6 p-6">
        <ClientsFilter />
        <ClientList />
      </div>
    </ClientsProvider>
  );
}
