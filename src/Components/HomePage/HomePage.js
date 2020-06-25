import React from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="showcase" />
                <div className="pagecards">
                    <img src="" alt="Articles" />
                    <div className="container">
                        <h4><b>Articles</b></h4>
                        <p>Read All Our Articles</p>
                    </div>
                </div>
                <div className="pagecards">
                    <img src="" alt="events and advertise" />
                    <div className="container">
                        <h4><b>Events and Advertise</b></h4>
                        <p>Learn more about events we are having. Sign up to receive our weekly newsletters.</p>
                    </div>
                </div>
                <div className="pagecards">
                    <img src="" alt="contact and sign up" />
                    <div className="container">
                        <h4><b>Contact Us and Sign Up</b></h4>
                        <p>Sign up with us and we will guarentee the best articles you will read.</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;