import React, { Component } from 'react';
import {Person} from "../../components/person/Person";
import './PersonsList.css';
import InfiniteScroll from 'react-infinite-scroller';

export class PersonsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='persons_list'>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={}
                    hasMore={true || false}
                    loader={<div className="persons_list__loader" key={0}>Loading ...</div>}
                >
                    {this.props.persons.map((person, index) =>
                        (
                            <Person person={person}></Person>
                        )
                    )}
                </InfiniteScroll>
            </div>
        )
    }
}