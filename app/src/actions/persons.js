import C from './constants'

export const fetchPersons = () => ({
   type: C.FETCH_PERSONS,
});

export const removePerson = id => ({
    type: C.REMOVE_PERSON,
    id
});

export const addPerson = (person) => ({
    type: C.ADD_PERSON,
    person
});