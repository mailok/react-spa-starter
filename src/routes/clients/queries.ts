import type { FetchClientsListFilter } from "@/lib/api/clients";

export const clientKeys = {
  all: ['clients'] as const,
  lists: () => [...clientKeys.all, 'list'] as const,
  list: (filter: FetchClientsListFilter) =>
    [...clientKeys.lists(), filter] as const,
  details: () => [...clientKeys.all, 'detail'] as const,
  detail: (id: number) => [...clientKeys.details(), id] as const,
  summary: () => [...clientKeys.all, 'summary'] as const,
};
