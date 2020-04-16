
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import Products from './components/Products'
import Orders from './components/Orders'



export default function App() {

  componentDidMount() {
    fetch('http://localhost:3050')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({ data: data })
      });
  }

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
          <Route path="/products/:id">
            <Products />
          </Route>
          <Route path="/orders/:id">
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
