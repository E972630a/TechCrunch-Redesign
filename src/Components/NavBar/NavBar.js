import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav id="navbar">
                        <img className="logo-img" alt="" src="" />
                        <div className="container">
                            <h1>TechCrunch</h1>
                            <ul>
                                <li><Link exact={true} to="/index">Home</Link></li>
                                <li><Link exact={true} to="/article">Articles</Link></li>
                                <li><Link exact={true} to="/events">Events and Newsletter</Link></li>
                                <li><Link exact={true} to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar;