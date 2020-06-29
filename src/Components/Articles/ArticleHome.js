import React from 'react';
// import Contact from '../src/Components/ContactPage/ContactSignUp'
import BlogPost from '../BlogPost/BlogPost'

import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      {/* <Home /> */}
      {/* <Articles /> */}
      <BlogPost />
      {/* <Events /> */}
      {/* <Contact /> */}
    </Router>
    </div>
  );
}

export default App;
