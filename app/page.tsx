"use client";
import { useCurrencyStore } from "../store/currencyContextStore";
import Title from "../components/common/Title";
import RateTable from "../components/currency/RateTable";
import Conversion from "../components/currency/Conversion";
import { PageDefines } from "../defines/pageDefines";
import SelectCurrencyCategory from "../components/currency/SelectCurrencyCategory";
export default function Home() {
    const { currPage } = useCurrencyStore();
    return (
        <div className="app">
            <Title />
            {currPage == PageDefines.rateTable && <RateTable />}
            {currPage == PageDefines.currencySelect && (
                <SelectCurrencyCategory />
            )}
            {currPage == PageDefines.rateConversion && <Conversion />}
        </div>
    );
}
