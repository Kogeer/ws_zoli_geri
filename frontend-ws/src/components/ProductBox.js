import React, { Component } from 'react';

export default class ProductBox extends Component {


    render() {
        const { elem } = this.props
        return (
            <div>
                <div>{elem.id}</div>
                <div>{elem.name}</div>
                <div>{elem.shortSpecs}</div>
                <div>{elem.image}</div>
                <div>{elem.qty}</div>
                <div>{elem.price}</div>
            </div>
        )
    }

}
