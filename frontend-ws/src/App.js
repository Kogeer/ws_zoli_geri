
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import Products from './components/Products'
import Orders from './components/Orders'



export default class App extends Component {
constructor(props){
  super(props)
  this.state={
    data: []
  }
}

  componentDidMount() {
    fetch('http://localhost:3050/products')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({ data: data })
      });
  }

  render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products data={this.state.data}/>
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/home/:id">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}
