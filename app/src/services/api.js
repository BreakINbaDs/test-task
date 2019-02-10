export const sendPOST = (url, data) => {
    return fetch(url+`?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

export const sendGET = (url, params) => {
    //TODO: implement function params to queryParams
    const queryParams = params;
    return fetch(url+`?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`);
};

export const sendPUT = (id, url, data) => {
    return fetch(url+`/`+id+`?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

export const sendDELETE = (id, url) => {
    return fetch(url+`/`+id+`?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`, {
        method: "DELETE",
    });
};

