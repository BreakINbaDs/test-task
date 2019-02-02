import React, { Component } from 'react';

export class PersonModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='person_modal'>
                <div>Person information</div>
                <div>
                    <img src={this.person.img}></img>
                    <div>
                        {this.person.firstName}
                        {this.person.lastName}
                    </div>
                    <div>{this.person.tel}</div>
                </div>
                <div>
                    <span>Email</span>
                    {this.person.email}
                </div>
                <div>
                    <span>Organization</span>
                    {this.person.organization}
                </div>
                <div>
                    <span>Assistant</span>
                    {this.person.assistant}
                </div>
                <div>
                    <span>Groups</span>
                    {this.person.groups}
                </div>
                <div>
                    <span>Location</span>
                    {this.person.location}
                </div>
                <div>
                    <button>Delete</button>
                    <button>Back</button>
                </div>
            </div>
        )
    }
}