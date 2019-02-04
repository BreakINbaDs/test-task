import React, { Component } from 'react';
import {Person} from "../../components/person/Person";
import './PersonsList.scss';

export class PersonsList extends Component {

    render() {
        return (
            <div className='persons_list'>
                <div className='persons_list__header'></div>
                <h1>Peoples's List</h1>
                <div className='persons_list__wrapper'>
                    {
                        this.props.persons.map((person, index) =>
                            (
                                <Person
                                    person={person}
                                    key={index}
                                    onClick={() => this.props.onOpenPerson(person.id)}
                                ></Person>
                            )
                        )
                    }
                </div>
                <div className='persons_list__footer'></div>
            </div>
        )
    }
}