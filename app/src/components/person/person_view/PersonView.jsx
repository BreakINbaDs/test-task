import React, { Component } from 'react';
import './PersonView.scss';

export class PersonView extends Component {

    render() {
        const {isVisible, person, onClosePersonView, onDeletePerson} = this.props;
        return (
            <div className={`person_modal_background ${isVisible ? "person_modal_background--visible" : ""}`}>
                <div className='person_modal'>
                    <img src={require('../../../assets/images/close.png')}
                         className='person_modal__close' onClick={() => onClosePersonView()}></img>
                    <h1>Person information</h1>
                    <div className='person_modal__wrapper'>
                        <div className='person_modal__main-info'>
                            {
                                (person.img !== undefined)
                                    ? <img src={this.props.person.img}></img>
                                    : <div className='person_modal__img'>
                                        {person.first_name.charAt(0)}
                                        {person.last_name.charAt(0)}
                                    </div>
                            }
                            <div className='person_modal__person-name'>
                                {person.name}
                            </div>
                            <div className='person_modal__person-phone'>
                                {person.phone[0].value}
                            </div>
                        </div>
                        <div className='person_modal__info'>
                            <div className='person_modal__info-row'>
                                <span>Email </span>
                                <div className='person_modal__info-item'>
                                    {person.email[0].value}
                                </div>
                            </div>
                            <div className='person_modal__info-row'>
                                <span>Organisation </span>
                                <div className='person_modal__info-item'>
                                    {person.org_name !== null && person.org_name}
                                </div>
                            </div>
                            <div className='person_modal__info-row'>
                                <span>Location </span>
                                <div className='person_modal__info-item'>
                                    {person.org_id !== null && person.org_id.address}
                                </div>
                            </div>
                            <div className='person_modal__info-row'>
                                <span>Groups</span>
                                <div className='person_modal__info-item'>
                                    {person['4af767b021868564752ea8d2b45c6af363237d6e'] !== null && person['4af767b021868564752ea8d2b45c6af363237d6e']}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='person_modal__footer'>
                        <div className='person_modal__button-delete'
                             onClick={() => onDeletePerson(this.props.person.id)}>Delete
                        </div>
                        <div className='person_modal__button-back'
                             onClick={() => onClosePersonView()}>Back
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}