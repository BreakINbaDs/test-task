import {sendDELETE, sendGET, sendPOST, sendPUT} from "./api";

export const apiService = (namespace) => {
    return {
        list: (params = []) => {
            return sendGET(namespace, params);
        },
        view: (id) => {
            return sendGET(namespace + '/' + id);
        },
        create: (data) => {
            return sendPOST(namespace, data);
        },
        update: (id, data) => {
            return sendPUT(id, namespace, data);
        },
        delete: (id) => {
            return sendDELETE(id, namespace)
        }
    }
};