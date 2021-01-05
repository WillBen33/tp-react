import logo from './logo.svg';
import './App.css';

import Homepage from './homepage/Homepage';
import './homepage/Homepage.css';

import Login from './login/Login';
import './login/Login.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          exact path="/"
          render={props => (<Homepage {...props} />)} />

        <Route
          exact path="/login"
          render={props => (<Login {...props} />)} />
      </div>
    </Router>
    
  );
}

export default App;
