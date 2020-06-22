import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav id="navbar">
                        <img className="logo-img" alt="" src="" />
                        <div className="container">
                            <h1>PFRAGRANCE</h1>
                            <ul>
                                <li><Link exact={true} to="/index">Home</Link></li>
                                <li><Link exact={true} to="/article">Articles</Link></li>
                                <li><Link exact={true} to="/events">Events and Advertise</Link></li>
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