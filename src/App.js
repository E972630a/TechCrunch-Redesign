import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
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
        <Route  path="/" component={HomePage} exact/>
        <Route  path="/articles" component={Articles} />
        <Route  path="/events" component={Events} />
        <Route  path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
