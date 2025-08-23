import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

export function useClientSearch() {
  return useQueryStates({
    status: parseAsString.withDefault('active'),
    search: parseAsString.withDefault(''),
    page: parseAsInteger.withDefault(1),
    size: parseAsInteger.withDefault(6),
    viewMode: parseAsString.withDefault('cards'),
  });
}
