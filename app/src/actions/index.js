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

export const fetchOrganisationsSuccess = (data) => ({
    type: C.FETCH_ORGANISATIONS_SUCCESS,
    data
});

export const searchPerson = (searchName) => ({
    type: C.SEARCH_PERSON,
    searchName
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

export const addPerson = () => ({
    type: C.ADD_PERSON,
});

export const addPersonSuccess = (data) => ({
    type: C.ADD_PERSON_SUCCESS,
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

export const openCreatePersonForm = () => ({
    type: C.OPEN_CREATE_PERSON_FORM
});

export const closeCreatePersonForm = () => ({
    type: C.CLOSE_CREATE_PERSON_FORM
});

export const updatePerson = () => ({
   type: C.UPDATE_PERSON
});

export const updatePersonSuccess = (person) => ({
    type: C.UPDATE_PERSON_SUCCESS,
    person
});

export const error = (error) => ({
    type: C.ERROR,
    error
});