"use client";
import React from "react";
import styled from "./RateTable.module.sass";
import { useRouter } from "next/navigation";
import { PageRouteDefines } from "../Defines/pageDefines";
import CurrencyItem from "@/components/currency/CurrencyItem/CurrencyItem";
import HydratedPosts from "@/libs/react-query-lib/HydrateProvider";
const Home = () => {
    const Route = useRouter();

    const movePageHandler = () => {
        Route.push(PageRouteDefines.rateConversion);
    };

    return (
        <div className={styled.rateTableContainer}>
            <div className={styled.rateTableTitle}>
                <div className={styled.currencyTitle}>Currency</div>
                <div className={styled.priceTitle}>price</div>
            </div>

            <div className={styled.rateColumnContainer}>
                <HydratedPosts>
                    <CurrencyItem />
                </HydratedPosts>
            </div>
            <div className={styled.rateConversionBtn} onClick={movePageHandler}>
                Rate ConversionBtn
            </div>
        </div>
    );
};

export default Home;
