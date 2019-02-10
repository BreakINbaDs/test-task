import React, { Component } from 'react';
import {Person} from "../../../components/person/Person";
import './PersonsList.scss';
import InfiniteScroll from 'react-infinite-scroller';

export class PersonsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDragging: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        if (!this.state.isDragging)
            this.props.onLoadMore();
    }

    render() {
        return (
            <InfiniteScroll className='persons_list'
                            hasMore={this.props.hasMore}
                            loadMore={() => this.loadMore()}
            >
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
        )
    }
}