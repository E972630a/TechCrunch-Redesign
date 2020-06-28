import React from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="showcase"></div>
                <div className="article-container">
                    <div className="grid-item">
                        <img className="article-img" src="img/AWSLogo.jpg" alt="AWS logo" />
                        <h2 id="article-title">Why AWS built a no-code tool</h2>
                        <h4 id="article-writer">Frederic Lardinois</h4>
                        <h5 id="article-date">7:36 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img-even" src="img/scooterimage.jpg" alt="image of a girl on a scooter" />
                        <h2 id="article-title-even">New York City could have an e-scooter pilot program by March</h2>
                        <h4 id="article-writer-even">Kirsten Korosec</h4>
                        <h5 id="article-date-even">6:41 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="img/Loupedeck-CT-07.jpg" alt="image of a device with buttons" />
                        <h2 id="article-title">The Loupedeck CT is a fantastic, flexible editing console for Mac and PC</h2>
                        <h4 id="article-writer">Darrell Etherington</h4>
                        <h5 id="article-date">5:17 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img-even" src="img/GettyImages-508482219.jpg" alt="puzzle of people's faces" />
                        <h2 id="article-title-even">Biased AI perpetuates racial injustice</h2>
                        <h4 id="article-writer-even">Miriam Vogel</h4>
                        <h5 id="article-date-even">5:04 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="img/someonewriting.png" alt="a notebook being wrote on" />
                        <h2 id="article-title">IPOs that could happen soon, cannot happen soon enough</h2>
                        <h4 id="article-writer">Alex Wilhelm</h4>
                        <h5 id="article-date">4:45 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img-even" src="img/united-states-capitol-two-tone.jpg" alt="united states capitol" />
                        <h2 id="article-title-even">PACT Act takes on internet platform content rules with ‘a scalpel rather
                    than a jackhammer’</h2>
                        <h4 id="article-writer-even">Devin Coldewey</h4>
                        <h5 id="article-date-even">4:24 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="img/awsbuilding.jpg" alt="AWS building" />
                        <h2 id="article-title">AWS launches Amazon Honeycode, a no-code mobile and web app builder</h2>
                        <h4 id="article-writer">Frederic Lardinois</h4>
                        <h5 id="article-date">4:12 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img-even" src="img/ps4-20th-console-all.jpg" alt="white PS4 gaming system" />
                        <h2 id="article-title-even">Sony will now pay researchers $50,000+ for critical PS4 bugs</h2>
                        <h4 id="article-writer-even">Greg Kumparak</h4>
                        <h5 id="article-date-even">4:02 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="img/cryptoimage.jpg" alt="crypto" />
                        <h2 id="article-title">Crypto Startup School: The legal and fundraising implications of crypto tokens
                </h2>
                        <h4 id="article-writer">Zoran Basich</h4>
                        <h5 id="article-date">3:00 pm EDT•June 24, 2020</h5>
                    </div>
                </div>
                <div className="container">
                    <div className="card" style="width: 18rem;">
                        <img className="card-img-top" src="img/techcrunchhome.png" alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-title">Articles</h3>
                            <p className="card-text">Read where we specifically report on the business related to tech, technology
                            news, analysis of emerging trends in tech, and profiling of new tech businesses and products.
                    </p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img className="card-img-top" src="img/eventstechcrunch.png" alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-title">Events/Advertise</h3>
                            <p className="card-text">TechCrunch hosts events around the globe that combine digital media and live
                        activations, as well as many media-only specials centered on momentous tech events.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="card" style="width: 18rem;">
                        <img className="card-img-top" src="img/SignUp-Facebook-Default-Image.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Sign Up/Contact Us</h4>
                            <p className="card-text">Create an account to unlock these benefits. Comment on articles and express
                        yourself and manage your newsletters. Contact us for more information or give us feedback.</p>
                            <a href="#" className="btn btn-primary">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;