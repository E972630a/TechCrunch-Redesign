import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Articles from './Components/Articles/Articles';
import Events from './Components/Events/Events';
import Contact from './Components/ContactPage/ContactSignUp';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
