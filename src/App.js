import React, { Component } from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/Book/BookDetail';

import Navbar from './components/Layout/Navbar';
import './App.css';

class App extends Component {
  
  render() {
  

    return (
    
      <BrowserRouter >
      <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path='/books/:id' component={BookDetail} />

      </Switch>
      
      </div>
      
      </BrowserRouter>
 
    );
  }
}

export default App;
