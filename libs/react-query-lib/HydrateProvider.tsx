import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

import { fetchCurrencyData } from "@/apis/currencyApi";
import React from "react";

export default async function HydratedPosts({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["currency"],
        queryFn: fetchCurrencyData,
        staleTime: 60 * 1000,
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            {children}
        </HydrationBoundary>
    );
}
