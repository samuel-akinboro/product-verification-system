import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'
import Login from './components/Login';
import {connect} from 'react-redux'

function App({displayName}) {
  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/verify">
            {displayName.length <= 0 ? 
            <Redirect to="/admin" /> 
            : <Dashboard />
            }
            </Route>
            <Route path="/dashboard">
            {displayName.length <= 0 ? 
            <Redirect to="/admin" /> 
            : <Dashboard />
            }
            </Route>
            <Route path="/new-product-registration">
            {displayName.length <= 0 ? 
            <Redirect to="/admin" /> 
            : <Dashboard />
            }
            </Route>
            <Route path="/admin">
            {displayName.length > 0 ? 
            <Redirect to="/dashboard" /> 
            :<Login />
            }
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}


export default connect(state => ({...state}))(App);
