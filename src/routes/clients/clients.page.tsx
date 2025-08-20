import { ClientList } from './client-list';
import { ClientsProvider } from './clients-provider';
import { ClientsFilter } from './clients-filter';
import { ClientSummary } from './client-summary';

export default function ClientsPage() {
  return (
    <ClientsProvider>
      <div className="flex size-full flex-col gap-6 p-6">
        <ClientSummary />
        <ClientsFilter />
        <ClientList />
      </div>
    </ClientsProvider>
  );
}
