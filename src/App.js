import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import NavBar from './Pages/Components/NavBar';
import About from './Pages/Screens/About';
import Contact from './Pages/Screens/Contact';
import Home from './Pages/Screens/Home';
import Service from './Pages/Screens/Services';
import './App.css';
import Footer from './Pages/Components/Footer';


function App() {
  return (
    <div className="">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
