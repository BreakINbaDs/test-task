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
import {apiService} from "./personsService";

const namespace = '/persons';
const store = storePersons();
const persons = apiService(namespace);

export const getPersons = (pagination) => {
    store.dispatch(fetchPersons());
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
    store.dispatch(fetchPerson());
    return function(dispatch) {
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
    console.log('Person to add:', person);
    return function(dispatch) {
        return persons.create(person)
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
    store.dispatch(updatePerson());
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
    this.updatePersonInfo(personFrom);
    this.updatePersonInfo(personTo);
};