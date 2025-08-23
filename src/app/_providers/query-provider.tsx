'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '../_lib/query-client';
import { useState } from 'react';

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}