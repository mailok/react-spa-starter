import { ClientList } from './components/client-list';
import { ClientsProvider } from './components/clients-provider';
import { ClientsFilter } from './components/clients-filter';
import { Insights } from './components/client-insights';

export default function ClientsPage() {
  return (
    <ClientsProvider>
      <div className="flex size-full flex-col gap-6 p-6">
        <Insights />
        <ClientsFilter />
        <ClientList />
      </div>
    </ClientsProvider>
  );
}
