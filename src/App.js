import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import Navigation from './nav';
import Home from './home'
import Qoutes from './qoutes';
import Contact from './Contact'
import Phonewall from './phonewall';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/phonepaper' component={Phonewall}/>
        <Route path='/qoutes' component={Qoutes}/>
        <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App

