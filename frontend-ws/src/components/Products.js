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
            <div className="Pmain">
                <h1>Product Page</h1>
                {data.map((elem, index) => {
                    console.log('P-elem: ',elem)
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