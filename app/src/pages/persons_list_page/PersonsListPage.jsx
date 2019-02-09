import React, { Component } from 'react';
import {Person} from "../../components/person/Person";
import './PersonsListPage.scss';
import InfiniteScroll from 'react-infinite-scroller';
import {Droppable, DragDropContext} from  'react-beautiful-dnd';

export class PersonsListPage extends Component {

    render() {
        return (
            <div className='persons_list'>
                <div className='persons_list__header'>
                    <button onClick={() => this.props.onOpenPersonCreateForm()}>Add Person</button>
                </div>
                <h1>Peoples's List</h1>
                <DragDropContext
                    onDragEnd={(result) => {this.props.onDragEnd(result)}}
                >
                    <Droppable droppableId={'persons_list'}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <InfiniteScroll className='persons_list__wrapper'
                                                hasMore={this.props.hasMore}
                                                loadMore={() => this.props.onLoadMore()}
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
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className='persons_list__footer'></div>
            </div>
        )
    }
}