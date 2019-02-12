import {sendDELETE, sendGET, sendPOST, sendPUT, sendUPLOAD} from "./api";

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
        upload: (id, file) => {
            return sendUPLOAD(id, namespace, file);
        },
        delete: (id) => {
            return sendDELETE(id, namespace)
        }
    }
};