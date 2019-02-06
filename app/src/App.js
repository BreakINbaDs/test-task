import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import {PersonsListPage} from "./pages/persons_list_page/PersonsListPage";
import {getPerson, getPersons, removePerson} from "./services/webAPI";
import {PersonModal} from "./components/person/person_modal/PersonModal";
import {closePersonView} from "./actions/index";
import {CreatePersonForm} from "./components/forms/create_person_form/CreatePersonForm";

class App extends Component {

    constructor(props) {
        super(props);

        this.openPerson = this.openPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        this.closePersonModalView = this.closePersonModalView.bind(this);
        this.fetchPersons = this.fetchPersons.bind(this);
    }
    componentDidMount() {
        this.fetchPersons();
    }

    fetchPersons() {
        this.props.dispatch(getPersons(this.props.pagination));
    }

    openPerson(id) {
        this.props.dispatch(getPerson(id));
    }

    deletePerson(id) {
        this.props.dispatch(removePerson(id));
    }

    closePersonModalView() {
        this.props.dispatch(closePersonView());
    }

    render() {
        console.log('Persons', this.props.persons);
        return (
          <div className="app">
              <PersonsListPage persons={this.props.persons}
                               onOpenPerson={this.openPerson}
                               hasMore={this.props.pagination.more_items_in_collection}
                               onLoadMore={this.fetchPersons}
              />
              <PersonModal person={this.props.person}
                           onDeletePerson={this.deletePerson}
                           onClosePersonView={this.closePersonModalView}
                           isVisible={this.props.personView.isOpened}
              />
              <CreatePersonForm/>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons,
        person: state.person,
        personView: state.personView,
        pagination: state.pagination
    };
};
export default connect(mapStateToProps)(App);