import React, { Component } from 'react';
import './css/ProductBox.css'
import ProductBox from './ProductBox';

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
        console.log(elem)
        return (
           <ProductBox elem={elem} />
        )
    }

}