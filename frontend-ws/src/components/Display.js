import React, { Component } from 'react';
import './css/ProductBox.css'

export default class ProductBox extends Component {


    render() {
        const { elem } = this.props
        console.log('PB-img: ', elem.image)
        return (

            <div className="container">
                <img src={elem.image} alt={`img: ${elem.image}`} />
                <div></div>
                <div>{`${elem.id}) `}<b style={{marginLeft: 40+'px'}}>{elem.name}</b></div>
                
            </div>
        )
    }

}
