import { AppPagination } from '@/components/app-pagination';
import { useClientSearch } from '../use-client-search';
import { useClientsQuery } from '../use-clients-query';

export function ClientsPagination() {
  const [, setClientSearch] = useClientSearch();
  const { data } = useClientsQuery();

  if (!data) {
    return null;
  }

  function handlePageChange(newPage: number) {
    setClientSearch({ page: newPage });
  }

  return (
    <AppPagination
      currentPage={data.page}
      total={data.total}
      size={data.size}
      onPageChange={handlePageChange}
    />
  );
}
