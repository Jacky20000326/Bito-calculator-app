"use client";
import Post from "@/components/Post";
import React from "react";
import { DehydratedState, QueryClient, QueryClientProvider } from "react-query";

export const QueryProvider = ({
    children,
    dehydratedState,
}: {
    children: React.ReactNode;
    dehydratedState: DehydratedState;
}) => {
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
        </QueryClientProvider>
    );
};
