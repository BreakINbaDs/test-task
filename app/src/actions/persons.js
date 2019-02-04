import C from './constants'

export const fetchPersons = () => ({
    type: C.FETCH_PERSONS,
});

export const fetchPersonsSuccess = (data) => ({
    type: C.FETCH_PERSONS_SUCCESS,
    data
});

export const fetchPerson = (id) => ({
    type: C.FETCH_PERSON,
    id
});

export const fetchPersonSuccess = (data) => ({
    type: C.FETCH_PERSON_SUCCESS,
    data
});

export const error = (error) => ({
    type: C.ERROR,
    error
});