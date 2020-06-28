import React from 'react';


// import Articles from '../src/Components/Articles/Articles'
// import Contact from '../src/Components/ContactPage/ContactSignUp'
import BlogPost from '../BlogPost/BlogPost'

import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Home /> */}
      {/* <Articles /> */}
      <BlogPost />
      {/* <Events /> */}
      {/* <Contact /> */}
    </Router>
  );
}

export default App;
