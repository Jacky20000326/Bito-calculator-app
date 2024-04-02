"use client";
import React, { useEffect, useState } from "react";
import styled from "./RateTable.module.sass";
import Image from "next/image";
import { fetchCurrencyData } from "../apis/currencyApi";
import { useQuery } from "@tanstack/react-query";
import { useCurrencyStore } from "../store/currencyContextStore";

import { usePathname, useRouter } from "next/navigation";
import { PageRouteDefines } from "../defines/pageDefines";
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
                    <div
                        className={styled.rateConversionBtn}
                        onClick={movePageHandler}
                    >
                        Rate ConversionBtn
                    </div>
            </div>
        );
    }


export default Home;
