import React, {Fragment} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>


      
        </Switch>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
