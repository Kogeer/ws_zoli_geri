import React, { Component } from 'react';
import './css/ProductBox.css'

export default class ProductBox extends Component {


    render() {
        const { elem } = this.props
        return (

            <div className="container">
                <img src={elem.image} alt="img" />
                <div>{elem.id}</div>
                <div>{elem.name}</div>
                <div>{elem.shortSpecs}</div>
                <div>{elem.qty}</div>
                <div>{elem.price}</div>
            </div>
        )
    }

}
