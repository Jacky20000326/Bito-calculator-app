"use client";
import { useCurrencyStore } from "../../store/currencyContextStore";
import React from "react";
import styled from "./SelectCurrencyCategory.module.sass";
import { CurrencySelectDefines } from "../../defines/currencyDefines";
import { PageDefines } from "../../defines/pageDefines";
const SelectCurrencyCategory = () => {
    const {
        currencyRateData,

        targetSelectCurrency,
        setTargetSelectCurrency,
        tranSelectCurrency,
        setTranSelectCurrency,
        chooseCurrencySelect,
        setCurrPage,
    } = useCurrencyStore();

    const setSelectCurrencyHandler = (currencyInfo: currency.apiType) => {
        if (chooseCurrencySelect == CurrencySelectDefines.target) {
            setTargetSelectCurrency((data) => (data = currencyInfo));
        }

        if (chooseCurrencySelect == CurrencySelectDefines.transfer) {
            setTranSelectCurrency((data) => (data = currencyInfo));
        }

        setCurrPage(PageDefines.rateConversion);
    };

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
