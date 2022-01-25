import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/'>Log In</Link></li>
        </ul>
        <h1>Client Auth Project</h1>
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
