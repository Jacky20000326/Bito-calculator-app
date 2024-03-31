// export const thousandsSeparatorTool = (num: number): string => {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

export const thousandsSeparatorTool = (num: number): string =>{
    
    let result = String(num).replace(
        /^\d+/,
        number => [...number].map(
            (digit, index, digits) => (
                !index || (digits.length - index) % 3 ? '' : ','
            ) + digit 
        ).join(''))

    return result
}
