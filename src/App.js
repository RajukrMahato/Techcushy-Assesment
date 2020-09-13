import React from 'react';
import './';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Components/pages/Home'
import Navbar from './Components/pages/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddEmployee from './Components/employers/AddEmployee';
import EditEmployee from './Components/employers/EditEmployee';
import Details from './Components/employers/details';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/users/add" component={AddEmployee} />
            <Route exact path = "/users/edit/:id" component={EditEmployee} />
            <Route exact path = "/users/:id" component={Details} />
        </Switch>     
      </div>
    </Router>
  );
}

export default App;
