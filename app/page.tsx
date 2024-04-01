"use client";
import React, { useEffect } from "react";
import styled from "./RateTable.module.sass";
import Image from "next/image";
import { getCurrencyRequest } from "../apis/currencyApi";
import { useQuery } from "react-query";
import { useCurrencyStore } from "../store/currencyContextStore";
import Loading from "../components/common/Loading";
import { usePathname,useRouter } from "next/navigation";
import { PageRouteDefines } from "../defines/pageDefines";

const Home = () => {
    const { currencyRateData, setCurrencyRateData} =
        useCurrencyStore();
    const Route = useRouter()
    const { data, isLoading } = useQuery(
        "currency",
        getCurrencyRequest
    );

    const movePageHandler = () => {
        Route.push(PageRouteDefines.rateConversion)
    };

    useEffect(() => {
        if (data && !isLoading) {
            let queryRespond = data.data as currency.apiType[];
            setCurrencyRateData(queryRespond);
        }
    }, [data]);
    return (
        <div className={styled.rateTableContainer}>
            <div className={styled.rateTableTitle}>
                <div className={styled.currencyTitle}>Currency</div>
                <div className={styled.priceTitle}>price</div>
            </div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className={styled.rateColumnContainer}>
                        {currencyRateData.map((item) => (
                            <div className={styled.rateColumn} key={item.id}>
                                <div className={styled.currencyInfoCube}>
                                    <div className={styled.currencyIcon}>
                                        <img src={item.currency_icon} alt="" />
                                    </div>
                                    <div className={styled.currencyName}>
                                        {item.currency} / TWD
                                    </div>
                                </div>

                                <div className={styled.currencyPrize}>
                                    {item.twd_price}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={styled.rateConversionBtn}
                        onClick={movePageHandler}
                    >
                        Rate ConversionBtn
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;