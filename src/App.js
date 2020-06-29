import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import ArticleHome from './Components/Articles/ArticleHome';
import Events from './Components/Events/Events';
import Contact from './Components/ContactPage/ContactSignUp';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
import './App.css';
import Article1 from '../src/Components/Articles/Article1';
import Article2 from '../src/Components/Articles/Article2'
// import ArticleHome from '../src/Components/Articles/ArticleHome';
// import{Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route  path="/" component={HomePage} exact/>
        <Route  path="/articles" component={ArticleHome} />
     <Route exact path='/article1' component={Article1}/>
   <Route exact path='/article2' component={Article2}/>
        <Route  path="/events" component={Events} />
        <Route  path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
    // <div className="App">
     
 
    //   <Route exact path='/' component={ArticleHome}/>
     
    // </div>
  );
}

export default App;
