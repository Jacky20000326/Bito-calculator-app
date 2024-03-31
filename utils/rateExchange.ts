import { thousandsSeparatorTool } from "./thousandsSeparator";

export const perCurrencyTransfer = (targetCurrencyPrize: number,transferPrize: number,transferDecimal:number,time:number ):string=>{
    let originDivideResult = (targetCurrencyPrize / transferPrize) * time

    return thousandsSeparatorTool(originDivideResult,transferDecimal)
}



// export const decimalLimit= (valuePrise:number,decimal:number ):number=>{
//     let transferResult =   Math.pow(10, valuePrise) / Math.pow(10, decimal);
//     return transferResult
// }