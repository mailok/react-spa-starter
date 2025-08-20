import { createContext, useContext } from 'react';
import { useStore } from '@xstate/store/react';

export type ClientsStore = ReturnType<typeof useClientsStore>;

function useClientsStore() {
  return useStore({
    context: {
      status: 'active',
      search: '',
      page: 1,
      size: 10,
      viewMode: 'cards',
    },
    on: {
      toggleViewMode: (context) => ({
        ...context,
        viewMode: context.viewMode === 'cards' ? 'table' : 'cards',
      }),
      setViewMode: (context, event: { value: 'cards' | 'table' }) => ({
        ...context,
        viewMode: event.value,
      }),
      setSearch: (context, event: { value: string }) => ({
        ...context,
        search: event.value,
      }),
      setPage: (context, event: { value: number }) => ({
        ...context,
        page: event.value,
      }),
      setSize: (context, event: { value: number }) => ({
        ...context,
        size: event.value,
      }),
      setStatus: (
        context,
        event: { value: 'active' | 'inactive' | 'pending' }
      ) => ({
        ...context,
        status: event.value,
      }),
    },
  });
  
}


interface ClientsContext {
  store: ClientsStore;
}

const ClientsContext = createContext<ClientsContext | null>(null);


export function ClientsProvider({ children }: { children: React.ReactNode }) {
  const store = useClientsStore();

  return (
    <ClientsContext.Provider value={{store}}>
      {children}
    </ClientsContext.Provider>
  );
}


export function useClientsContext(): ClientsStore {
  const context = useContext(ClientsContext);
  if (context === null) {
    throw new Error('useClientsContext must be used within a ClientsProvider');
  }
  return context.store;
}




