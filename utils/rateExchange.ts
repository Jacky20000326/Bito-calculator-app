import { thousandsSeparatorTool } from "./thousandsSeparator";

export const perCurrencyTransfer = (targetCurrencyPrize: number,transferPrize: number,transferDecimal:number ):number=>{
    let moveDecimalPoint = Number(transferDecimal) 
    let originDivideResult = targetCurrencyPrize / transferPrize
    let transferResult =  Math.floor(targetCurrencyPrize * Math.pow(10, originDivideResult)) / Math.pow(10, moveDecimalPoint);
    if(targetCurrencyPrize == transferPrize){
        return 1
    }
    console.log(transferResult)
    console.log(Number(thousandsSeparatorTool(transferResult)) )
    return Number(thousandsSeparatorTool(transferResult)) 
}



// export const decimalLimit= (valuePrise:number,decimal:number ):number=>{
//     let transferResult =   Math.pow(10, valuePrise) / Math.pow(10, decimal);
//     return transferResult
// }