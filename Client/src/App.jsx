import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/services" component={Services} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;


// this is our homepage

// had to install/run "npm install react-router-dom"
