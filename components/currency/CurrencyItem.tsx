import React from "react";
import styled from "./CurrencyItem.module.sass";

const CurrencyItem = ({ item }: { item: currency.apiType }) => {
    return (
        <div className={styled.rateColumn} key={item.id}>
            <div className={styled.currencyInfoCube}>
                <div className={styled.currencyIcon}>
                    <img src={item.currency_icon} alt="" />
                </div>
                <div className={styled.currencyName}>{item.currency} / TWD</div>
            </div>

            <div className={styled.currencyPrize}>{item.twd_price}</div>
        </div>
    );
};

export default CurrencyItem;
