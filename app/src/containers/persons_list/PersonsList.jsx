import React, { Component } from 'react';
import {Person} from "../../components/person/Person";
import './PersonsList.css';

export class PersonsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='persons_list'>
                {this.props.persons.map((person, index) =>
                    (
                        <Person person={person}></Person>
                    )
                )}
            </div>
        )
    }
}