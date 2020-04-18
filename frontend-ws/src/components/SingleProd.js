import React, { Component } from 'react';
import './css/ProductBox.css'
import ProductDetail from './ProductDetail';

export default class SingleProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elem: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://localhost:3050/product/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ elem: data })
            });
    }

    render() {
        const { elem } = this.state
        console.log('SP: ', elem)
        return (
            <ProductDetail elem={elem} />
        )
    }

}