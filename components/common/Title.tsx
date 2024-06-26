"use client";
import React, { useEffect, useState } from "react";
import styled from "./Title.module.sass";
import { AiOutlineClose } from "react-icons/ai";
import { PageNameDefines, PageRouteDefines } from "../../defines/pageDefines";
import { usePathname, useRouter } from "next/navigation";

const Title = () => {
    const childrenRouteName = usePathname();
    const route = useRouter();
    const [pageName, setpageName] = useState<PageNameDefines>(
        PageNameDefines.rateTable
    );

    const pageNameHandler = () => {
        if (childrenRouteName === PageRouteDefines.rateConversion) {
            setpageName(PageNameDefines.rateConversion);
        }
        if (childrenRouteName === PageRouteDefines.rateTable) {
            setpageName(PageNameDefines.rateTable);
        }
        if (childrenRouteName === PageRouteDefines.currencySelect) {
            setpageName(PageNameDefines.currencySelect);
        }
    };

    const ClosePageHandler = () => {
        if (childrenRouteName === PageRouteDefines.rateConversion) {
            route.push(PageRouteDefines.rateTable);
        }

        if (childrenRouteName === PageRouteDefines.currencySelect) {
            route.push(PageRouteDefines.rateConversion);
        }
    };

    useEffect(() => {
        pageNameHandler();
    }, [childrenRouteName]);
    return (
        <div className={styled.titleContainer}>
            <div className={styled.titleTxt}>{pageName}</div>
            {childrenRouteName !== PageRouteDefines.rateTable && (
                <AiOutlineClose
                    onClick={ClosePageHandler}
                    size={30}
                    className={styled.closeBtn}
                />
            )}
        </div>
    );
};

export default Title;
