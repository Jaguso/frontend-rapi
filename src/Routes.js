import React, {Component} from 'react';
import {BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';


class Routes extends Component{

  render(){
    return(
      <Router>
        <main>
        <Navbar/>
        <div className="container text-center">
          <Route exact path="/" component={Signup} />
          <Route exact path="/signup" component={Signup} />
        </div>
        </main>
      </Router>
    )
  }
}


export default Routes;