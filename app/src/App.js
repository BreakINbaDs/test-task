import React, { Component } from 'react';
import './App.css';
import {PersonModal} from "./components/person/person_modal/PersonModal";
import {PersonsList} from "./containers/persons_list/PersonsList";
import {CreatePersonForm} from "./forms/create_person_form/CreatePersonForm";
import {APP_STATE_DEFAULT} from "./consts/AppStateDefault";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = APP_STATE_DEFAULT;

        this.createPerson = this.createPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    createPerson(person) {

    }

    deletePerson(id) {

    }

    render() {
        return (
          <div className="app">
              <PersonsList persons={this.state.persons}/>
          </div>
        );
    }
}