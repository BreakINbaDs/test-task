import fetch from 'cross-fetch';
import storePersons from "../Store";
import {fetchPersons, personsFetched, error} from "../actions/persons";

const store = storePersons();

export const getPersons = () => {
    store.dispatch(fetchPersons());
    return function(dispatch, getState) {
        return fetch(`https://api.pipedrive.com/v1/persons?start=0&limit=3&api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`)
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    dispatch(personsFetched(data));
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