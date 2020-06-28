import React from 'react';
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from './Components/HomePage/HomePage';
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
      <Route exact path="/HomePage" component={Home} />
      <Route exact path="/Articles" component={Articles} />
      <Route exact path="/Events" component={Events} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
