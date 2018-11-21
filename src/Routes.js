import React, {Component} from 'react';
import {BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import FormRestaurant from './Components/FormRestaurant/FormRestaurant';
import Home from './Components/Home/Home';

class Routes extends Component{

  render(){
    return(
      <Router>
        <main>
          <Navbar/>
          <div className="container text-center">
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/restaurant/create" component={FormRestaurant} />
          </div>
        </main>
      </Router>
    )
  }
}


export default Routes;