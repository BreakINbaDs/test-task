import React, { Component } from 'react';
import './PersonModal.scss';

export class PersonModal extends Component {

    render() {
        if (this.props.isVisible) {
            return (
                <div className='person_modal_background'>
                    <div className='person_modal'>
                        <img src={require('../../../assets/images/close.png')}
                             className='person_modal__close' onClick={() => this.props.onClosePersonView()}></img>
                        <h1>Person information</h1>
                        <div className='person_modal__wrapper'>
                            <div className='person_modal__main-info'>
                                {
                                    (this.props.person.img !== undefined)
                                        ? <img src={this.props.person.img}></img>
                                        : <div className='person_modal__img'>
                                            {this.props.person.first_name.charAt(0)}
                                            {this.props.person.last_name.charAt(0)}
                                        </div>
                                }
                                <div className='person_modal__person-name'>
                                    {this.props.person.name}
                                </div>
                                <div className='person_modal__person-phone'>
                                    {this.props.person.phone[0].value}
                                </div>
                            </div>
                            <div className='person_modal__info'>
                                <div className='person_modal__info-row'>
                                    <span>Email </span>
                                    <div className='person_modal__info-item'>
                                        {this.props.person.email[0].value}
                                    </div>
                                </div>
                                <div className='person_modal__info-row'>
                                    <span>Organisation </span>
                                    <div className='person_modal__info-item'>
                                        {this.props.person.org_name}
                                    </div>
                                </div>
                                <div className='person_modal__info-row'>
                                    <span>Location </span>
                                    <div className='person_modal__info-item'>
                                        {this.props.person.org_id.address}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='person_modal__footer'>
                            <div className='person_modal__button-delete'
                                 onClick={() => this.props.onDeletePerson(this.props.person.id)}>Delete
                            </div>
                            <div className='person_modal__button-back'
                                 onClick={() => this.props.onClosePersonView()}>Back
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (null);
        }
    }
}