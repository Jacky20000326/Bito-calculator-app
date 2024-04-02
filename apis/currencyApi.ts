

export const fetchCurrencyData = async ():Promise<currency.apiType[]> => {

    const host:string = "https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs";

    const res = await fetch(
        host
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    let data = await res.json();
    return data;
};