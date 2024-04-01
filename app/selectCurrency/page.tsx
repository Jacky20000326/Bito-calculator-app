"use client";
import { useCurrencyStore } from "../../store/currencyContextStore";
import React, { useEffect, useState } from "react";
import styled from "./SelectCurrencyCategory.module.sass";
import { CurrencySelectDefines } from "../../Defines/currencyDefines";
import { useRouter } from "next/navigation";
import { PageRouteDefines } from "../../Defines/pageDefines";
const SelectCurrencyCategory = () => {
    const router = useRouter();
    const {
        currencyRateData,
        targetSelectCurrency,
        setTargetSelectCurrency,
        tranSelectCurrency,
        setTranSelectCurrency,
        chooseCurrencySelect,
    } = useCurrencyStore();

    const setSelectCurrencyHandler = (currencyInfo: currency.apiType) => {
        if (chooseCurrencySelect == CurrencySelectDefines.target) {
            setTargetSelectCurrency((data) => (data = currencyInfo));
        }

        if (chooseCurrencySelect == CurrencySelectDefines.transfer) {
            setTranSelectCurrency((data) => (data = currencyInfo));
        }

        router.push(PageRouteDefines.rateConversion);
    };

    useEffect(() => {
        console.log();
        if (currencyRateData.length == 0) {
            router.replace(PageRouteDefines.rateConversion);
            console.log("a");
        }
    }, []);

    return (
        <div className={styled.selectCurrencyCategoryContainer}>
            {currencyRateData.map((data) => (
                <div
                    key={data.id}
                    onClick={() => {
                        setSelectCurrencyHandler(data);
                    }}
                    className={styled.optionCurrency}
                >
                    <img
                        className={styled.currencyIcon}
                        src={data.currency_icon}
                        alt=""
                    />
                    <div className={styled.currencyName}>{data.currency}</div>
                </div>
            ))}
        </div>
    );
};

export default SelectCurrencyCategory;
