import C from './constants'

export const fetchPersons = () => ({
    type: C.FETCH_PERSONS,
});

export const personsFetched = (data) => ({
    type: C.PERSONS_FETCHED,
    data
});

export const error = (error) => ({
    type: C.ERROR,
    error
});