import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Articles from './Components/Articles/Articles';
import Events from './Components/Events/Events';
import Contact from './Components/ContactPage/ContactSignUp';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
import './App.css';
import Article1 from '../src/Components/Articles/Article1';
import Article2 from '../src/Components/Articles/Article2'
import ArticleHome from '../src/Components/Articles/ArticleHome';
import{Route} from 'react-router-dom'


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
    <div className="App">
     
      <Route exact path='/article1' component={Article1}/>
      <Route exact path='/article2' component={Article2}/>
      <Route exact path='/' component={ArticleHome}/>
     
    </div>
  );
}

export default App;
