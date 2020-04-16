import React, {Component} from 'react';
import ProdBox from './ProductBox'

export default class Products extends Component{


    render(){
        const {data} = this.props
        console.log(data)
        return(
        <div>
            {data.map((elem) => {
                return(
                    <ProdBox elem={elem} />
                    ) 
                    
            })}
        </div>
        )
    }
    
}
