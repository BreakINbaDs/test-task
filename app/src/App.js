import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import {PersonsListPage} from "./pages/persons_list_page/PersonsListPage";
import {getPerson, getPersons, removePerson} from "./services/webAPI";
import {PersonView} from "./components/person/person_view/PersonView";
import {closeCreatePersonForm, closePersonView, openCreatePersonForm} from "./actions/index";
import {CreatePersonForm} from "./components/forms/create_person_form/CreatePersonForm";

class App extends Component {

    constructor(props) {
        super(props);

        this.openPerson = this.openPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        this.closePersonModalView = this.closePersonModalView.bind(this);
        this.fetchPersons = this.fetchPersons.bind(this);
        this.openPersonCreateForm = this.openPersonCreateForm.bind(this);
        this.closePersonCreateForm = this.closePersonCreateForm.bind(this);
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

    openPersonCreateForm() {
        this.props.dispatch(openCreatePersonForm())
    }

    closePersonCreateForm() {
        this.props.dispatch(closeCreatePersonForm())
    }

    onDragEnd(result) {
        console.log('Drag End:', result);
    }

    render() {
        console.log('Persons', this.props.persons);
        return (
          <div className="app">
              <PersonsListPage persons={this.props.persons}
                               onOpenPerson={this.openPerson}
                               onOpenPersonCreateForm={this.openPersonCreateForm}
                               hasMore={this.props.pagination.more_items_in_collection}
                               onLoadMore={this.fetchPersons}
                               onDragEnd={this.onDragEnd}
              />
              <PersonView person={this.props.person}
                          onDeletePerson={this.deletePerson}
                          onClosePersonView={this.closePersonModalView}
                          isVisible={this.props.personView.isOpened}
              />
              <CreatePersonForm isVisible={this.props.personCreateForm.isOpened}
                                onClosePersonCreateForm={this.closePersonCreateForm}
              />
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons,
        person: state.person,
        personView: state.personView,
        personCreateForm: state.personCreateForm,
        pagination: state.pagination
    };
};
export default connect(mapStateToProps)(App);