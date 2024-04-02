"use client";
import React, { useState } from "react";
import styled from "./SelectCurrencyItem.module.sass";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrencyData } from "@/apis/currencyApi";
import { CurrencySelectDefines } from "@/defines/currencyDefines";
import { PageRouteDefines } from "@/defines/pageDefines";
import { useRouter } from "next/navigation";
import { useCurrencyStore } from "@/store/currencyContextStore";
import Image from "next/image";

const SelectCurrencyItem = () => {
    const router = useRouter();
    const { data } = useQuery({
        queryKey: ["currency"],
        queryFn: fetchCurrencyData,
    });
    const [selectDataList, setSelectDataList] = useState(data);
    const {
        setTargetSelectCurrency,
        chooseCurrencySelect,
        setTranSelectCurrency,
    } = useCurrencyStore();

    const setSelectCurrencyHandler = (currencyInfo: currency.apiType) => {
        if (chooseCurrencySelect === CurrencySelectDefines.target) {
            setTargetSelectCurrency((data) => (data = currencyInfo));
        }

        if (chooseCurrencySelect === CurrencySelectDefines.transfer) {
            setTranSelectCurrency((data) => (data = currencyInfo));
        }
        router.push(PageRouteDefines.rateConversion);
    };

    if (selectDataList === undefined) return null;
    return (
        <>
            {selectDataList.map((item) => (
                <div
                    key={item.id}
                    onClick={() => {
                        setSelectCurrencyHandler(item);
                    }}
                    className={styled.optionCurrency}
                >
                    <Image
                        className={styled.currencyIcon}
                        src={item.currency_icon}
                        alt={item.currency}
                        width={60}
                        height={60}
                        priority={true}
                    />
                    <div className={styled.currencyName}>{item.currency}</div>
                </div>
            ))}
        </>
    );
};

export default SelectCurrencyItem;
