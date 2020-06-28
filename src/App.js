import React from 'react';

import './App.css';
import Article1 from '../src/Components/Articles/Article1';
import Article2 from '../src/Components/Articles/Article2'
import ArticleHome from '../src/Components/Articles/ArticleHome';
import{Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     
      <Route exact path='/article1' component={Article1}/>
      <Route exact path='/article2' component={Article2}/>
      <Route exact path='/' component={ArticleHome}/>
     
    </div>
  );
}

export default App;
