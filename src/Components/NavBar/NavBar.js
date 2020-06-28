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
                                <li><Link exact={true} to="/">Home</Link></li>
                                <li><Link exact={true} to="/Articles">Articles</Link></li>
                                <li><Link exact={true} to="/Events">Events and Advertise</Link></li>
                                <li><Link exact={true} to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar;