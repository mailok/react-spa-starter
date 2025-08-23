import { useQuery } from "@tanstack/react-query";
import { clientQuieries } from "./queries";
import { useClientSearch } from "./use-client-search";

export function useClientsQuery() {
  const [{ page, size, status, search }] = useClientSearch();
  const query = { status, page, size, search };
  return useQuery(clientQuieries.clients(query));
}