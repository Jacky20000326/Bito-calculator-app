"use client";

import React from "react";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";



const createQueryClient = ()=>{
    return new QueryClient({
        defaultOptions: {
            queries: {
              staleTime: 60 * 1000,
            },
        },
    });
}


let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (typeof window === 'undefined') {
      // Server: always make a new query client
      return createQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = createQueryClient()
        return browserQueryClient
    }
}

export const QueryProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const queryClient = getQueryClient()


    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    );
};
