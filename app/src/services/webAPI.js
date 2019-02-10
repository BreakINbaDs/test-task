import storePersons from "../store/storeConfiguration";
import {
    fetchPersons,
    fetchPersonsSuccess,
    fetchPerson,
    fetchPersonSuccess,
    deletePerson,
    deletePersonSuccess,
    error,
    openPersonView,
    closePersonView,
    addPerson,
    addPersonSuccess,
    closeCreatePersonForm,
    updatePerson,
    updatePersonSuccess
} from "../actions/index";

const store = storePersons();

export const getPersons = (pagination) => {
    store.dispatch(fetchPersons());
    return function(dispatch) {
        return fetch(`https://api.pipedrive.com/v1/persons?start=`+pagination.next_start+`&limit=`+pagination.limit+`&api_token=f8b6b82465c5e5dd9c3575039abaab1877919329
        &sort=7341051c832696d047bf2bc387a00cef97c2b891 ASC`)
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

export const createPerson = (person) => {
    console.log('Person to add:', person);
    return function(dispatch, getState) {
        let state = getState();
        return fetch(`https://api.pipedrive.com/v1/persons?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        })
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    dispatch(addPersonSuccess(data));
                    dispatch(closeCreatePersonForm());
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

export const updatePersonInfo = (person) => {
    store.dispatch(updatePerson());
    return function(dispatch) {
        return fetch(`https://api.pipedrive.com/v1/persons/`+person.id+`?api_token=f8b6b82465c5e5dd9c3575039abaab1877919329`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        })
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    dispatch(updatePersonSuccess(person));
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

export const reorderPersons = (personFrom, personTo) => {
    this.updatePersonInfo(personFrom);
    this.updatePersonInfo(personTo);
};