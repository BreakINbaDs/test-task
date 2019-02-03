import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import {PersonsList} from "./containers/persons_list/PersonsList";
import {getPersons} from "./services/WebAPI";

class App extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.dispatch(getPersons());
    }

    render() {
        console.log('Persons', this.props.data);
        return (
          <div className="app">
              <PersonsList persons={[]}/>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.persons
    };
};
export default connect(mapStateToProps)(App);