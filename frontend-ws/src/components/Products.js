import React, { Component } from 'react';
import ProdBox from './ProductBox';
import './css/Products.css'

export default class Products extends Component {

    openProduct(id){
        window.location.assign(`/products/${id}`)
    }

    render() {
        const { data } = this.props
        return (
            <div className="main">
                {data.map((elem, index) => {
                    return (
                        <div key={index} onClick={(e) => {this.openProduct(elem.id)}}>
                            <ProdBox elem={elem} />
                        </div>
                    )
                })}
            </div>
        )
    }

}