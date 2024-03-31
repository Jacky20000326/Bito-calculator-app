// export const thousandsSeparatorTool = (num: number): string => {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

export const thousandsSeparatorTool = (num: number,transferDecimal:number): string =>{
    let decimalLimit = transferDecimal ++
    let calThousandsSeparator = num.toLocaleString(undefined,{ maximumFractionDigits: decimalLimit })
    let tranArr = calThousandsSeparator.split(".")[1] || ""
    
    if(tranArr && tranArr.length > transferDecimal){
        return calThousandsSeparator.slice(0, -1);
    }else{
        return calThousandsSeparator
    }
}
