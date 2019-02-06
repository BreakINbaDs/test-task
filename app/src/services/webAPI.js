import storePersons from "../store/storeConfiguration";
import {
    fetchPersons,
    fetchPersonsSuccess,
    fetchPerson,
    fetchPersonSuccess,
    deletePerson,
    deletePersonSuccess,
    error, openPersonView, closePersonView
} from "../actions/index";

const store = storePersons();

export const getPersons = (pagination) => {
    store.dispatch(fetchPersons());
    return function(dispatch) {
        return fetch(`https://api.pipedrive.com/v1/persons?start=`+pagination.next_start+`&limit=`+pagination.limit+`&api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`)
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    dispatch(fetchPersonsSuccess(data));
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

export const getPerson = (id) => {
    store.dispatch(fetchPerson());
    return function(dispatch) {
        return fetch(`https://api.pipedrive.com/v1/persons/`+id+`?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`)
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    dispatch(fetchPersonSuccess(data));
                    dispatch(openPersonView());
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

export const removePerson = (id) => {
    store.dispatch(deletePerson());
    return function(dispatch) {
        return fetch(`https://api.pipedrive.com/v1/persons/`+id+`?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`, {method: 'DELETE'})
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    dispatch(deletePersonSuccess(id));
                    dispatch(closePersonView());
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