import { ClientList } from './components/client-list';
import {
  SearchFilter,
  StatusFilter,
  ViewModeToggle,
} from './components/clients-filter';
import { Insights } from './components/client-insights';

export default function ClientsPage() {
  return (
    <div className="flex size-full flex-col gap-6 p-6">
      <Insights />
      <div className="@container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <StatusFilter />
          <SearchFilter />
        </div>
        <ViewModeToggle />
      </div>
      <ClientList />
    </div>
  );
}
