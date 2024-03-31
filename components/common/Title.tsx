"use client";
import React from "react";
import styled from "./Title.module.sass";
import { AiOutlineClose } from "react-icons/ai";
import { PageDefines } from "../../defines/pageDefines";
import { useCurrencyStore } from "../../store/currencyContextStore";
const title = () => {
    const { currPage, setCurrPage } = useCurrencyStore();
    const ClosePageHandler = () => {
        if (currPage == PageDefines.rateConversion) {
            setCurrPage(PageDefines.rateTable);
        }
        if (currPage == PageDefines.currencySelect) {
            setCurrPage(PageDefines.rateConversion);
        }
    };
    return (
        <div className={styled.titleContainer}>
            <div className={styled.titleTxt}>{currPage}</div>
            {currPage != PageDefines.rateTable && (
                <AiOutlineClose
                    onClick={ClosePageHandler}
                    size={30}
                    className={styled.closeBtn}
                />
            )}
        </div>
    );
};

export default title;
