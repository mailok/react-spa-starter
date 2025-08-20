import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useClientsContext } from "./clients-provider";
import { useSelector } from "@xstate/store/react";
import { Button } from '@/components/ui/button';
import { LayoutGrid, Table2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

export function ClientsFilter() {
  const store = useClientsContext();
  const status = useSelector(store, (state) => state.context.status);
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    store.trigger.setSearch({ value: debouncedSearchTerm });
  }, [debouncedSearchTerm, store]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Tabs defaultValue={status}>
          <TabsList>
            <TabsTrigger
              className="cursor-pointer"
              value="active"
              onClick={() => store.trigger.setStatus({ value: 'active' })}
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer"
              value="pending"
              onClick={() => store.trigger.setStatus({ value: 'pending' })}
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer"
              value="inactive"
              onClick={() => store.trigger.setStatus({ value: 'inactive' })}
            >
              Inactive
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <ViewModeToggle />
    </div>
  );
}

function ViewModeToggle() {
  const store = useClientsContext();
  const viewMode = useSelector(store, (state) => state.context.viewMode);

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant={viewMode === 'cards' ? 'default' : 'outline'}
        size="sm"
        onClick={() => store.trigger.setViewMode({ value: 'cards' })}
        className="cursor-pointer"
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        variant={viewMode === 'table' ? 'default' : 'outline'}
        size="sm"
        onClick={() => store.trigger.setViewMode({ value: 'table' })}
        className="cursor-pointer"
      >
        <Table2 className="h-4 w-4" />
      </Button>
    </div>
  );
}