"use client";

import { useQuery, useQueryClient } from "react-query";
import React from "react";
import CurrencyItem from "./currency/CurrencyItem";

const Post = ({ data }: { data: currency.apiType[] }) => {
    // This query was not prefetched on the server and will not start
    // fetching until on the client, both patterns are fine to mix
    // const { data: commentsData } = useQuery({
    //     queryKey: ["posts-comments"],
    //     queryFn: getData,
    // });

    return (
        <>
            {data.map((item) => {
                return <CurrencyItem item={item} />;
            })}
        </>
    );
};

export default Post;
