"use client";
import React, { useEffect } from "react";
import styled from "./RateTable.module.sass";
import Image from "next/image";
import { fetchCurrencyData } from "../apis/currencyApi";
import { useQuery } from "react-query";
import { useCurrencyStore } from "../store/currencyContextStore";

import { usePathname, useRouter } from "next/navigation";
import { PageRouteDefines } from "../Defines/pageDefines";
import CurrencyItem from "@/components/currency/CurrencyItem";
import { DehydratedState } from "@tanstack/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Home = () => {
    const { currencyRateData, setCurrencyRateData } = useCurrencyStore();
    const Route = useRouter();
    // const { data, isLoading } = useQuery("currency", getCurrencyRequest);

    const movePageHandler = () => {
        Route.push(PageRouteDefines.rateConversion);
    };

    const getCurrencyData = async () => {
        let dataResult = await fetchCurrencyData();
        setCurrencyRateData(dataResult);
    };

    // const { data } = useQuery(["currency"], getCurrencyRequest);

    useEffect(() => {
        if (currencyRateData.length == 0) {
            getCurrencyData();
        }
    }, []);
    return (
        <div className={styled.rateTableContainer}>
            <div className={styled.rateTableTitle}>
                <div className={styled.currencyTitle}>Currency</div>
                <div className={styled.priceTitle}>price</div>
            </div>

            <>
                <div className={styled.rateColumnContainer}>
                    {currencyRateData.map((item) => (
                        <CurrencyItem item={item} />
                    ))}
                </div>
                <div
                    className={styled.rateConversionBtn}
                    onClick={movePageHandler}
                >
                    Rate ConversionBtn
                </div>
            </>
        </div>
    );
};

export default Home;
