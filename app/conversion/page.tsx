"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "./Conversion.module.sass";
import { AiFillCaretDown, AiOutlineDoubleLeft } from "react-icons/ai";
import { PageRouteDefines } from "../../defines/pageDefines";
import { useCurrencyStore } from "../../store/currencyContextStore";
import { CurrencySelectDefines } from "../../defines/currencyDefines";
import { perCurrencyTransfer } from "../../utils/rateExchange";
import { useRouter } from "next/navigation";
import { fetchCurrencyData } from "@/apis/currencyApi";

const Conversion = () => {
    const router = useRouter();
    const {
        tranSelectCurrency,
        targetSelectCurrency,
        setChooseCurrencySelect,
        setCurrencyRateData,
        currencyRateData,
        typePrice,
        setTypePrice,
    } = useCurrencyStore();

    // get the current currency transfer result
    const currTransferCurrency = useCallback(() => {
        let transInputTypeToNumber = Number(typePrice);
        // check transInputTypeToNumber is not NAN

        if (isNaN(transInputTypeToNumber)) {
            return "Please enter a number.";
        } else {
            if (
                tranSelectCurrency?.twd_price !== undefined &&
                targetSelectCurrency?.twd_price !== undefined &&
                tranSelectCurrency?.amount_decimal !== undefined
            ) {
                return perCurrencyTransfer(
                    targetSelectCurrency?.twd_price,
                    tranSelectCurrency?.twd_price,
                    tranSelectCurrency?.amount_decimal,
                    transInputTypeToNumber
                );
            }
        }
    }, [typePrice]);

    // set the target currency select
    const setTargetSelectHandler = () => {
        setChooseCurrencySelect(CurrencySelectDefines.target);
        // setCurrPage(PageRouteDefines.currencySelect);
        router.push(PageRouteDefines.currencySelect);
    };

    // set the transfer currency select
    const setTransferSelectHandler = () => {
        setChooseCurrencySelect(CurrencySelectDefines.transfer);
        router.push(PageRouteDefines.currencySelect);
        // setCurrPage(PageRouteDefines.currencySelect);
    };

    // get
    const perCetCurrencyTransfer = () => {
        if (
            tranSelectCurrency?.twd_price !== undefined &&
            targetSelectCurrency?.twd_price !== undefined &&
            tranSelectCurrency?.amount_decimal !== undefined
        ) {
            return perCurrencyTransfer(
                targetSelectCurrency?.twd_price,
                tranSelectCurrency?.twd_price,
                tranSelectCurrency?.amount_decimal,
                1
            );
        }
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
        <div className={styled.conversionPage}>
            <div className={styled.conversionContainer}>
                <div className={styled.targetCurrencyContainer}>
                    <button
                        className={styled.targetCurrencySelect}
                        onClick={setTargetSelectHandler}
                    >
                        <img
                            className={styled.currencyIcon}
                            src={targetSelectCurrency?.currency_icon}
                            alt=""
                        />
                        <div className={styled.currencyName}>
                            {targetSelectCurrency?.currency}/ TWD
                        </div>
                        <AiFillCaretDown size={20} />
                    </button>
                    <input
                        value={typePrice}
                        onChange={(e) => setTypePrice(e.target.value)}
                        className={styled.targetCurrencyMonetInput}
                    />
                </div>
                <div className={styled.tranCurrencyContainer}>
                    <button
                        className={styled.tranCurrencySelect}
                        onClick={setTransferSelectHandler}
                    >
                        <img
                            className={styled.currencyIcon}
                            src={tranSelectCurrency?.currency_icon}
                            alt=""
                        />
                        <div className={styled.currencyName}>
                            {tranSelectCurrency?.currency} / TWD
                        </div>
                        <AiFillCaretDown size={20} />
                    </button>
                    <input
                        className={styled.tranCurrencyPriseInput}
                        value={currTransferCurrency()}
                        readOnly
                    />
                </div>
                <AiOutlineDoubleLeft size={30} className={styled.decoration} />
                <div className={styled.calculateResult}>
                    1 {targetSelectCurrency?.currency} ≈{" "}
                    {perCetCurrencyTransfer()} {tranSelectCurrency?.currency}
                </div>
            </div>
        </div>
    );
};

export default Conversion;
