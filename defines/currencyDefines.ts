export enum CurrencySelectDefines {
    target = "targetSelect",
    transfer = "transferSelect"
}

// targetSelectCurrency default value

export const targetSelectCurrencyDefaultValue: currency.apiType = {
    currency: "GHS",
    currency_icon:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/673.jpg",
    twd_price: 37081.21,
    amount_decimal: 7,
    id: 1,
};

// tranSelectCurrency default value
export  const tranSelectCurrencyDefaultValue: currency.apiType = {
    currency: "LKR",
    currency_icon:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/543.jpg",
    twd_price: 43527.61,
    amount_decimal: 8,
    id: 2,
};