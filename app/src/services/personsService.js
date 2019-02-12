import {
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
import {apiService} from "./apiService";

const namespace = '/persons';
const persons = apiService(namespace);

export const getPersons = (pagination) => {
    return function(dispatch) {
        return persons.list({
                start: pagination.next_start,
                limit: pagination.limit
            })
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
    return function(dispatch) {
        dispatch(fetchPerson());
        return persons.view(id)
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
    const file = person.avatar;
    delete person.avatar;
    return function(dispatch) {
        dispatch(addPerson());
        return persons.create(person)
            .then(data => data.json())
            .then(data => {
                if (data.success) {
                    console.log('Data:', data);
                    addPersonAvatar(data, file, dispatch);
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

export const addPersonAvatar = (person, file, dispatch) => {
    return persons.upload(person.data.id, file)
        .then(data => data.json())
        .then(data => {
            if (data.success) {
                console.log('Data:', data);
                dispatch(addPersonSuccess(person));
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

export const removePerson = (id) => {
    return function(dispatch) {
        dispatch(deletePerson());
        return persons.delete(id)
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
    return function(dispatch) {
        return persons.update(person.id, person)
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
    return function (dispatch) {
        
    }
};