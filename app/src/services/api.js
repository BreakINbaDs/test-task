import {apiConfig} from "../configs/WebApiConfig";

const formQueryParams = (data) => {
    let query = '';
    Object.keys(data).forEach((key) => {
        query += `&${key}=${data[key]}`;
    });
    return query;
};

export const sendPOST = (url, data=[]) => {
    return fetch(apiConfig.url+url+`?api_token=`+apiConfig.apiKey, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

export const sendGET = (url, params=[]) => {
    const queryParams = formQueryParams(params);
    return fetch(apiConfig.url+url+`?api_token=`+apiConfig.apiKey+queryParams);
};

export const sendPUT = (id, url, data=[]) => {
    return fetch(apiConfig.url+url+`/`+id+`?api_token=`+apiConfig.apiKey, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

export const sendUPLOAD = (id, url, file) => {
    return fetch(apiConfig.url+url+`/`+id+'/picture'+`?api_token=`+apiConfig.apiKey, {
        method: "POST",
        body: file,
    });
};

export const sendDELETE = (id, url) => {
    return fetch(apiConfig.url+url+`/`+id+`?api_token=`+apiConfig.apiKey, {
        method: "DELETE",
    });
};

