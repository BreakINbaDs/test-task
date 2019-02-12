import {apiService} from "./apiService";
import {error, fetchOrganisationsSuccess} from "../actions";

const namespace = '/organizations';
const organisations = apiService(namespace);

export const getOrganisations = () => {
    return function(dispatch) {
        return organisations.list()
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    dispatch(fetchOrganisationsSuccess(data));
                } else {
                    console.log('Error', data);
                    dispatch(error(data));
                }
            })
            .catch(err => {
                dispatch(error(err));
            });
    };
};
