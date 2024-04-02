"use client";

import React from "react";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
import getQueryClient from './GetQueryClient'
export const QueryProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
              // With SSR, we usually want to set some default staleTime
              // above 0 to avoid refetching immediately on the client
              staleTime: 60 * 1000,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    );
};
