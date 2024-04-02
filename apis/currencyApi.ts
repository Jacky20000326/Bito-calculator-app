// import { AxiosPromise } from 'axios';
// import { createHttpRequestInstance } from './HttpCommon'

// 
// const endPoint:string = "/api/v1/pairs";


// export const ApiClient = createHttpRequestInstance(host)



// export const getCurrencyRequest = async ():AxiosPromise<currency.apiType[]>=>{

//     return (await ApiClient.get(endPoint)).data;

// }



export const fetchCurrencyData = async ():Promise<currency.apiType[]> => {

    const host:string = "https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs";

    const res = await fetch(
        host
    );
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    let data = await res.json();
    return data;
};