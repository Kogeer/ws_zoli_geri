import React, { Component } from 'react';
import './css/ProductDetail.css'
export default class ProductBox extends Component {


    render() {
        const { elem } = this.props
        console.log('PB-img: ', elem.image)
        return (
            <div className="PDcontainer">
                <h1>Product Detail Page</h1>
                <img src={elem.image} alt={`img: ${elem.image}`} />
                <div></div>
                <div>{`${elem.id}) `}<b style={{marginLeft: 40+'px'}}>{elem.name}</b></div>
                <div>{elem.shortSpecs}</div>
                <div>{'On stock: '}<b>{elem.qty}</b></div>
                <div>{'Price: '}<b>{elem.price}</b></div>
            </div>
        )
    }

}
