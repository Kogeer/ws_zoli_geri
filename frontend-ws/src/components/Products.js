import React, {Component} from 'react';

export default class Products extends Component{


    render(){
        const {value} = this.props
        console.log(value)
        return(
            <div>
                <h1>{value}</h1>
            </div>
        )
    }
    
}