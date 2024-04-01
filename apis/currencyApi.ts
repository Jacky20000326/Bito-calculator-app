import { AxiosPromise } from 'axios';
import { createHttpRequestInstance } from './HttpCommon'

const host:string = "https://65efcc68ead08fa78a50f929.mockapi.io";
const endPoint:string = "/api/v1/pairs";

// instance HttpRequest
export const ApiClient = createHttpRequestInstance(host)

// get currency api request

// ssr

export const gerServerSideProps = ()=>{
    
}


export const getCurrencyRequest = async ():AxiosPromise<currency.apiType[]>=>{

    return await ApiClient.get(endPoint);

}



