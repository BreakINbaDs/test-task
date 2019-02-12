import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './Loader.scss';

export class Loader extends Component {

    render() {
        console.log('loading', this.props.loading);
        return (
            <div className='loader'>
                <Loader type="Watch" color="#9FD8AB" height={80} width={80} />
            </div>
        )
    }
}