"use client"
import React,{useState} from "react";
import styled from "./CurrencyItem.module.sass";
import { fetchCurrencyData } from "@/apis/currencyApi";
import { useQuery } from "@tanstack/react-query";
import Image from 'next/image'
const CurrencyItem = () => {
    const { data } = useQuery({ queryKey: ['currency'], queryFn: fetchCurrencyData })
    
    const [currencyData,setCurrencyData] = useState(data)

    if(currencyData != undefined){
        return (<div>
        
            {currencyData.map(item => (
                <div className={styled.rateColumn} key={item.id}>
                    <div className={styled.currencyInfoCube}>
                        <div className={styled.currencyIcon}>
                            <Image src={item.currency_icon}
                                width={500}
                                height={500}
                                alt={item.currency}/>
                        </div>
                        <div className={styled.currencyName}>{item.currency} / TWD</div>
                    </div>
        
                    <div className={styled.currencyPrize}>{item.twd_price}</div>
                </div>
            ))}
        </div>
        );
    }

};

export default CurrencyItem;
