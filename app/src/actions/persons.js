import C from './constants'
/*
Persons
 */
export const fetchPersons = () => ({
    type: C.FETCH_PERSONS,
});

export const fetchPersonsSuccess = (data) => ({
    type: C.FETCH_PERSONS_SUCCESS,
    data
});

/*
Person
 */
export const fetchPerson = (id) => ({
    type: C.FETCH_PERSON,
    id
});

export const fetchPersonSuccess = (data) => ({
    type: C.FETCH_PERSON_SUCCESS,
    data
});

export const deletePerson = (id) => ({
    type: C.DELETE_PERSON,
    id
});

export const deletePersonSuccess = (id) => ({
    type: C.DELETE_PERSON_SUCCESS,
    id
});

export const openPersonView = () => ({
    type: C.OPEN_PERSON_VIEW
});

export const closePersonView = () => ({
    type: C.CLOSE_PERSON_VIEW
});

export const error = (error) => ({
    type: C.ERROR,
    error
});