import React, { Component } from 'react';

export class Person extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='person'>
                <div className='person__info'>
                    <span>
                        {this.props.person.name}
                    </span>
                    <div>
                        {this.props.person.org_name}
                    </div>
                </div>
                {
                    (this.props.person.img !== null)
                    ? <img src={this.props.person.img}></img>
                    : <div className='person__img'></div>
                }
            </div>
        )
    }
}