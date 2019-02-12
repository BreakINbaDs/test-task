import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './LoaderIndicator.scss';

export class LoaderIndicator extends Component {

    render() {
        return (
            <div className={`loader ${this.props.loading ? "loader--visible" : ""}`}>
                <div className='loader__wrapper'>
                    <Loader type="Watch" color="#678CB8" height={80} width={80} />
                </div>
            </div>
        )
    }
}