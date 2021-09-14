import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav'
import Resume from './components/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header></Header>
        <div>
          <Nav/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
