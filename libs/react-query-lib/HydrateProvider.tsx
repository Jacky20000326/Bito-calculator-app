
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

import { fetchCurrencyData } from '@/apis/currencyApi'
import React from "react"

export default async function HydratedPosts({children}:{children:React.ReactNode}) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
              // With SSR, we usually want to set some default staleTime
              // above 0 to avoid refetching immediately on the client
              staleTime: 60 * 1000,
            },
        },
    })
    await queryClient.prefetchQuery({ queryKey: ['currency'], queryFn: fetchCurrencyData })
    
    const dehydratedState = dehydrate(queryClient)

    return (
        <HydrationBoundary  state={dehydratedState}>
            {children}
        </HydrationBoundary  >
    )
}