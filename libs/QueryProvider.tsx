"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
              staleTime: 60 * 1000,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
    );
};
