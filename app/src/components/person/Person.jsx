import React, { Component } from 'react';
import './Person.scss';
import {Draggable} from  'react-beautiful-dnd';

export class Person extends Component {

    render() {
        return (
            <Draggable draggableId={this.props.person.id.toString()} index={this.props.index}>
                {(provided) => (
                    <div className='person' onClick={this.props.onClick}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div className='person__info'>
                        <span>
                            {this.props.person.name}
                        </span>
                            <div className='person__org'>
                                <img src={require('../../assets/images/org.png')}/>
                                {this.props.person.org_name}
                            </div>
                        </div>
                        {
                            (this.props.person.picture_id !== null)
                                ? <img src={this.props.person.picture_id.pictures[128]} className='person__img'></img>
                                : <div className='person__img'>
                                    {this.props.person.first_name.charAt(0)}
                                    {this.props.person.last_name.charAt(0)}
                                </div>
                        }
                    </div>
                )}
            </Draggable>
        )
    }
}