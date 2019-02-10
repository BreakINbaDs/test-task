import React, { Component } from 'react';
import './CreatePersonForm.scss';
import  {refsToPerson} from "../../../helpers/personCreator";
import {PersonVisibility} from "../../../consts/enums/PersonVisibility";
import {validatePhone} from "../../../helpers/phoneValidator";
import {validateEmail} from "../../../helpers/emailValidator";

export class CreatePersonForm extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        const {_email, _phone} = this.refs;
        if (validatePhone(_phone.value) && validateEmail(_email.value)) {
            const person = refsToPerson(this.refs, PersonVisibility.SHARED);
            this.props.onAddPerson(person);
        }
    }
    render() {
        const {isVisible, onClosePersonCreateForm} = this.props;
        return (
            <div className={`create_person_form_background ${isVisible ? "create_person_form_background--visible" : ""}`}>
                <div className='create_person_form'>
                    <img src={require('../../../assets/images/close.png')}
                         className='person_modal__close' onClick={() => onClosePersonCreateForm()}></img>
                    <h1>Add person</h1>
                    <form>
                        <input ref="_name"
                               type="text"
                               placeholder="Full name..."
                               required/>
                        <input ref="_email"
                               type="email"
                               placeholder="Email..."
                               required/>
                        <input ref="_phone"
                               type="tel"
                               placeholder="Phone number..."
                               required/>
                        <input ref="_groups"
                               type="text"
                               placeholder="Group..."
                               required/>
                    </form>
                    <div className='create_person_form__footer'>
                        <button onClick={() => this.submit()}>ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}