import axios, { AxiosInstance, RawAxiosRequestHeaders } from "axios";

export const createHttpRequestInstance = (requestUrl:string,opts?:RawAxiosRequestHeaders): AxiosInstance=>
    axios.create({
        baseURL: requestUrl,
        headers: {
            "Content-type": "application/json",
            ...opts
        }
    })






















