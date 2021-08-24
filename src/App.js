import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Navbar from './components/Navbar';
import Diary from './components/Diary';
import Reminder from './components/Reminder';
import Login from './components/Login';
import {connect} from 'react-redux'

function App({displayName}) {
  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <Switch>
            <Route path="/" exact>
            {displayName.length <= 0 ? 
            <Redirect to="/login" /> 
            : <><Navbar />
              <Diary /></>
            }
            </Route>
            <Route path="/login">
            {displayName.length > 0 ? 
            <Redirect to="/" /> 
            :<Login />
            }
            </Route>
            <Route path="/reminder">
            {displayName.length <= 0 ? 
            <Redirect to="/login" /> 
            : <><Navbar />
              <Reminder /></>
            }
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}


export default connect(state => ({...state}))(App);
