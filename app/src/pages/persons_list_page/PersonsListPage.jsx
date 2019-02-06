import React, { Component } from 'react';
import {Person} from "../../components/person/Person";
import './PersonsListPage.scss';
import InfiniteScroll from 'react-infinite-scroller';

export class PersonsListPage extends Component {

    render() {
        return (
            <InfiniteScroll className='persons_list'
                            hasMore={this.props.hasMore}
                            loadMore={() => this.props.onLoadMore()}>
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
            </InfiniteScroll>
        )
    }
}