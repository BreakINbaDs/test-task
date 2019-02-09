import React, { Component } from 'react';
import {Person} from "../../components/person/Person";
import './PersonsListPage.scss';
import InfiniteScroll from 'react-infinite-scroller';
import {Droppable} from  'react-beautiful-dnd';

export class PersonsListPage extends Component {

    render() {
        return (
            <div className='persons_list'>
                <div className='persons_list__header'>
                    <button onClick={() => this.props.onOpenPersonCreateForm()}>Add Person</button>
                </div>
                <h1>Peoples's List</h1>
                <Droppable droppableId={this.props.id}>
                    <InfiniteScroll className='persons_list__wrapper'
                                    hasMore={this.props.hasMore}
                                    loadMore={() => this.props.onLoadMore()}>
                        {
                            this.props.persons.map((person, index) =>
                                (
                                    <Person
                                        person={person}
                                        key={person.id}
                                        index={index}
                                        onClick={() => this.props.onOpenPerson(person.id)}
                                    ></Person>
                                )
                            )
                        }
                    </InfiniteScroll>
                </Droppable>
                <div className='persons_list__footer'></div>
            </div>
        )
    }
}