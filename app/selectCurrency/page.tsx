"use client";
import { useCurrencyStore } from "../../store/currencyContextStore";
import React, { useEffect, useState } from "react";
import styled from "./SelectCurrencyCategory.module.sass";
import { CurrencySelectDefines } from "../../defines/currencyDefines";
import { useRouter } from "next/navigation";
import { PageRouteDefines } from "../../defines/pageDefines";
import SelectCurrencyItem from "@/components/currency/SelectCurrenctItem/SelectCurrencyItem";
import HydratedPosts from "@/libs/react-query-lib/HydrateProvider";
const SelectCurrencyCategory = () => {
    const router = useRouter();
    const {
        currencyRateData,
    } = useCurrencyStore();


    useEffect(() => {
        if (currencyRateData.length == 0) {
            router.replace(PageRouteDefines.rateConversion);
        }
    }, []);

    return (
        <div className={styled.selectCurrencyCategoryContainer}>
                <SelectCurrencyItem/>
        </div>
    );
};

export default SelectCurrencyCategory;
