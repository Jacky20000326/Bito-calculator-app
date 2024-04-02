"use client";
import {
    CurrencySelectDefines,
    targetSelectCurrencyDefaultValue,
    tranSelectCurrencyDefaultValue,
} from "@/defines/currencyDefines";
import React, { createContext, useContext, useState } from "react";
// import { PageDefines } from "../defines/pageDefines";

// Define the type of the context
interface CurrencyContextType {
    currencyRateData: currency.apiType[];
    setCurrencyRateData: React.Dispatch<
        React.SetStateAction<currency.apiType[]>
    >;
    // currPage: PageDefines;
    // setCurrPage: React.Dispatch<React.SetStateAction<PageDefines>>;
    targetSelectCurrency: currency.apiType | null;
    setTargetSelectCurrency: React.Dispatch<
        React.SetStateAction<currency.apiType | null>
    >;
    tranSelectCurrency: currency.apiType | null;
    setTranSelectCurrency: React.Dispatch<
        React.SetStateAction<currency.apiType | null>
    >;
    chooseCurrencySelect: CurrencySelectDefines;
    setChooseCurrencySelect: React.Dispatch<
        React.SetStateAction<CurrencySelectDefines>
    >;
    typePrice: string;
    setTypePrice: React.Dispatch<React.SetStateAction<string>>;
}

// Define the default value of the context
const CurrencyContextDefaultValue: CurrencyContextType = {
    currencyRateData: [],
    setCurrencyRateData: () => {},
    // currPage: PageDefines.rateTable,
    // setCurrPage: () => {},
    targetSelectCurrency: targetSelectCurrencyDefaultValue,
    setTargetSelectCurrency: () => {},
    tranSelectCurrency: tranSelectCurrencyDefaultValue,
    setTranSelectCurrency: () => {},
    chooseCurrencySelect: CurrencySelectDefines.target,
    setChooseCurrencySelect: () => {},
    typePrice: "1",
    setTypePrice: () => {},
};

const currencyContext = createContext<CurrencyContextType>(
    CurrencyContextDefaultValue
);

// Create the context
export const CurrencyContext = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    // Currency api request data
    let [currencyRateData, setCurrencyRateData] = useState<currency.apiType[]>(
        []
    );

    // current page detect
    // let [currPage, setCurrPage] = useState<PageDefines>(PageDefines.rateTable);

    // target currency select
    let [targetSelectCurrency, setTargetSelectCurrency] =
        useState<currency.apiType | null>(targetSelectCurrencyDefaultValue);

    // transfer currency select
    let [tranSelectCurrency, setTranSelectCurrency] =
        useState<currency.apiType | null>(tranSelectCurrencyDefaultValue);

    // let current choose select

    let [chooseCurrencySelect, setChooseCurrencySelect] =
        useState<CurrencySelectDefines>(CurrencySelectDefines.target);

    let [typePrice, setTypePrice] = useState<string>("1");

    let value = {
        currencyRateData,
        setCurrencyRateData,
        // currPage,
        // setCurrPage,
        targetSelectCurrency,
        setTargetSelectCurrency,
        tranSelectCurrency,
        setTranSelectCurrency,
        chooseCurrencySelect,
        setChooseCurrencySelect,
        typePrice,
        setTypePrice,
    };

    return (
        <currencyContext.Provider value={value}>
            {children}
        </currencyContext.Provider>
    );
};

// This hook returns the context value
export const useCurrencyStore = (): CurrencyContextType => {
    return useContext(currencyContext);
};
