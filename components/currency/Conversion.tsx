"use client";
import React, { useCallback, useMemo, useState } from "react";
import styled from "./Conversion.module.sass";
import { AiFillCaretDown, AiOutlineDoubleLeft } from "react-icons/ai";
import { PageDefines } from "../../defines/pageDefines";
import { useCurrencyStore } from "../../store/currencyContextStore";
import { CurrencySelectDefines } from "../../defines/currencyDefines";
import { perCurrencyTransfer } from "../../utils/rateExchange";
const conversion = () => {
    let initPrice = "1";
    let [typePrice, setTypePrice] = useState<string>("1");

    const {
        setCurrPage,
        tranSelectCurrency,
        targetSelectCurrency,
        setChooseCurrencySelect,
    } = useCurrencyStore();

    const currTransferCurrency = useCallback(() => {
        let transInputTypeToNumber = Number(typePrice);
        // check transInputTypeToNumber is not NAN
        if (isNaN(transInputTypeToNumber)) {
            return "NAN";
        } else {
            if (typeof perCetCurrencyTransfer == "number") {
                let TransferResult = perCetCurrencyTransfer * Number(typePrice);

                return String(TransferResult);
            }
        }
    }, [typePrice]);

    const setTargetSelectHandler = () => {
        setChooseCurrencySelect(CurrencySelectDefines.target);
        setCurrPage(PageDefines.currencySelect);
    };

    const setTransferSelectHandler = () => {
        setChooseCurrencySelect(CurrencySelectDefines.transfer);
        setCurrPage(PageDefines.currencySelect);
    };

    const perCetCurrencyTransfer = useMemo(() => {
        if (
            tranSelectCurrency?.twd_price !== undefined &&
            targetSelectCurrency?.twd_price !== undefined &&
            targetSelectCurrency?.amount_decimal !== undefined
        ) {
            return perCurrencyTransfer(
                targetSelectCurrency?.twd_price,
                tranSelectCurrency?.twd_price,
                tranSelectCurrency?.amount_decimal
            );
        }
    }, [tranSelectCurrency, targetSelectCurrency]);

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
                        value={typePrice || ""}
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
                    {perCetCurrencyTransfer} {tranSelectCurrency?.currency}
                </div>
            </div>
        </div>
    );
};

export default conversion;
