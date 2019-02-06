import React, { Component } from 'react';
import './CreatePersonForm.scss';

export class CreatePersonForm extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const {_name, _email, _phone} = this.refs;
        // this.props.onCreatePerson(_title.value, _color.value);
        console.log(`New Person: ${_name.value} ${_email.value}`)
    }
    render() {
        return (
            <div className='create_person_form_background'>
                <form className='create_person_form' onSubmit={this.submit}>
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
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}