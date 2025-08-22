import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Table2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import { SearchInput } from '@/components/ui/search-input';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useClientSearch } from '../use-client-search';

export function ClientsFilter() {
  const [{ status }, setClientSearch] = useClientSearch();
  const [search, setLocalSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    setClientSearch({ search: debouncedSearchTerm });
  }, [debouncedSearchTerm, setClientSearch]);

  return (
    <div className="@container flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Tabs defaultValue={status}>
          <TabsList>
            <TabsTrigger
              className="cursor-pointer"
              value="active"
              onClick={() => setClientSearch({ status: 'active' })}
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer"
              value="pending"
              onClick={() => setClientSearch({ status: 'pending' })}
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer"
              value="inactive"
              onClick={() => setClientSearch({ status: 'inactive' })}
            >
              Inactive
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="hidden items-center space-x-2 @lg:flex">
          <SearchInput
            autoFocus
            placeholder="Search by name"
            value={search}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
      </div>
      <ViewModeToggle />
    </div>
  );
}

function ViewModeToggle() {
  const [{ viewMode }, setClientSearch] = useClientSearch();

  return (
    <div className="flex items-center space-x-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={viewMode === 'cards' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setClientSearch({ viewMode: 'cards' })}
            className="cursor-pointer"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View as cards</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={viewMode === 'table' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setClientSearch({ viewMode: 'table' })}
            className="cursor-pointer"
          >
            <Table2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View as table</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
