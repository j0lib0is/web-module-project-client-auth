import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/'>Log In</Link></li>
          <li><Link to='/friends'>Friend's List</Link></li>
        </ul>
        <h1>Client Auth Project</h1>
        <Switch>
          <Route path='/' component={Login} />
          <Route path='/friends' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
