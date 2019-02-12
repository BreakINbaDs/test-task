import React, { Component } from 'react';
import {Person} from "../../components/person/Person";
import './PersonsListPage.scss';
import InfiniteScroll from 'react-infinite-scroller';
import {Droppable, DragDropContext} from  'react-beautiful-dnd';
import {PersonsList} from "../../components/person/persons_list/PersonsList";

export class PersonsListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isDragging: false
        };

        this.loadMore = this.loadMore.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    loadMore() {
        if (!this.state.isDragging && this.refs._search.value === '')
            this.props.onLoadMore();
    }

    onDragEnd(result) {
        this.setState({
            isDragging: false
        });
        this.props.onDragEnd(result)
    }

    onSearch() {
        this.props.onSearch(this.refs._search.value)
    }

    render() {
        return (
            <div className='persons_list_page'>
                <div className='persons_list_page__header'>
                    <img src={require('../../assets/images/logo.png')}/>
                    <button onClick={() => this.props.onOpenPersonCreateForm()}>Add Person</button>
                </div>
                <h1>Peoples's List</h1>
                <input ref="_search"
                       placeholder="Search by name..."
                       onChange={() => this.onSearch()}/>
                <DragDropContext
                    onDragStart={() => {this.setState({
                        isDragging: true
                    })}}
                    onDragEnd={(result) => {this.onDragEnd(result)}}
                >
                    <Droppable droppableId={'persons_list'}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <PersonsList
                                    hasMore={this.props.hasMore}
                                    onLoadMore={this.loadMore}
                                    onOpenPerson={this.props.onOpenPerson}
                                    persons={this.props.persons}
                                />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className='persons_list_page__footer'></div>
            </div>
        )
    }
}