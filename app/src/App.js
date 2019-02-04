import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import {PersonsList} from "./containers/persons_list/PersonsList";
import {getPerson, getPersons} from "./services/WebAPI";
import {PersonModal} from "./components/person/person_modal/PersonModal";

class App extends Component {

    constructor(props) {
        super(props);

        this.openPerson = this.openPerson.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getPersons());
    }

    openPerson(id) {
        this.props.dispatch(getPerson(id))
    }

    render() {
        console.log('Persons', this.props.persons);
        return (
          <div className="app">
              <PersonsList persons={this.props.persons} onOpenPerson={this.openPerson}/>
              <PersonModal person={this.props.person}/>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons,
        person: state.person,
    };
};
export default connect(mapStateToProps)(App);