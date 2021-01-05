import logo from './logo.svg';
import './App.css';

import Nav from './Nav/Nav';
import './Nav/Nav.css';

import Home from './Home/Home';
import './Home/Home.css';

import Login from './Login/Login';
import './Login/Login.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Nav></Nav>

        <Route
          exact path="/"
          render={props => (<Home {...props} />)} />

        <Route
          exact path="/login"
          render={props => (<Login {...props} />)} />
      </div>
    </Router>
    
  );
}

export default App;
