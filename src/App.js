import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <ul>
          {isLoggedIn && <li><Link to='/friends'>Friend's List</Link></li>}
          {isLoggedIn && <li><Link to='/friends/add'>Add Friend</Link></li>}
          {/* {!isLoggedIn && <li><Link to='/'>Log In</Link></li>} */}
          {isLoggedIn && <li><Link to='/logout'>Log Out</Link></li>}
        </ul>
        <h1>Client Auth Project</h1>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <PrivateRoute exact path='/logout' component={Logout} />
          <PrivateRoute exact path='/friends/add' component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
