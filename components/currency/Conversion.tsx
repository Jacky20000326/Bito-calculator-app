"use client";
import React, { useCallback, useMemo, useState } from "react";
import styled from "./Conversion.module.sass";
import { AiFillCaretDown, AiOutlineDoubleLeft } from "react-icons/ai";
import { PageDefines } from "../../defines/pageDefines";
import { useCurrencyStore } from "../../store/currencyContextStore";
import { CurrencySelectDefines } from "../../defines/currencyDefines";
import { perCurrencyTransfer } from "../../utils/rateExchange";

const conversion = () => {
    const {
        setCurrPage,
        tranSelectCurrency,
        targetSelectCurrency,
        setChooseCurrencySelect,
        typePrice,
        setTypePrice,
    } = useCurrencyStore();

    // get the current currency transfer result
    const currTransferCurrency = useCallback(() => {
        let transInputTypeToNumber = Number(typePrice);
        // check transInputTypeToNumber is not NAN

        if (isNaN(transInputTypeToNumber)) {
            return "NAN";
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
        setCurrPage(PageDefines.currencySelect);
    };

    // set the transfer currency select
    const setTransferSelectHandler = () => {
        setChooseCurrencySelect(CurrencySelectDefines.transfer);
        setCurrPage(PageDefines.currencySelect);
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

export default conversion;
