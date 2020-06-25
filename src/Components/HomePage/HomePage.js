import React from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div class="showcase" />
                <div className="article-container">
                    <div className="grid-item">
                        <img className="article-img" src="AWSLogo.jpg" alt="AWS logo" />
                        <h2 id="article-title">Why AWS built a no-code tool</h2>
                        <h4 id="article-writer">Frederic Lardinois</h4>
                        <h5 id="article-date">7:36 pm EDT•June 24, 2020</h5>
                    </div>
                    <div class="grid-item">
                        <img className="article-img-even" src="scooterimage.jpg" alt="a girl on a scooter" />
                        <h2 id="article-title-even">New York City could have an e-scooter pilot program by March</h2>
                        <h4 id="article-writer-even">Kirsten Korosec</h4>
                        <h5 id="article-date-even">6:41 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="Loupedeck-CT-07.jpg" alt="a device with buttons" />
                        <h2 id="article-title">The Loupedeck CT is a fantastic, flexible editing console for Mac and PC</h2>
                        <h4 id="article-writer">Darrell Etherington</h4>
                        <h5 id="article-date">5:17 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img-even" src="GettyImages-508482219.jpg" alt="puzzle of peoples faces" />
                        <h2 id="article-title-even">Biased AI perpetuates racial injustice</h2>
                        <h4 id="article-writer-even">Miriam Vogel</h4>
                        <h5 id="article-date-even">5:04 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="someonewriting.png" alt="AWS logo" />
                        <h2 id="article-title">IPOs that could happen soon, cannot happen soon enough</h2>
                        <h4 id="article-writer">Alex Wilhelm</h4>
                        <h5 id="article-date">4:45 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img-even" src="united-states-capitol-two-tone.jpg" alt="AWS logo" />
                        <h2 id="article-title-even">PACT Act takes on internet platform content rules with ‘a scalpel rather than a jackhammer’</h2>
                        <h4 id="article-writer-even">Devin Coldewey</h4>
                        <h5 id="article-date-even">4:24 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="awsbuilding.jpg" alt="AWS logo" />
                        <h2 id="article-title">AWS launches Amazon Honeycode, a no-code mobile and web app builder</h2>
                        <h4 id="article-writer">Frederic Lardinois</h4>
                        <h5 id="article-date">4:12 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img-even" src="ps4-20th-console-all.jpg" alt="AWS logo" />
                        <h2 id="article-title-even">Sony will now pay researchers $50,000+ for critical PS4 bugs</h2>
                        <h4 id="article-writer-even">Greg Kumparak</h4>
                        <h5 id="article-date-even">4:02 pm EDT•June 24, 2020</h5>
                    </div>
                    <div className="grid-item">
                        <img className="article-img" src="cryptoimage.jpg" alt="AWS logo" />
                        <h2 id="article-title">Crypto Startup School: The legal and fundraising implications of crypto tokens</h2>
                        <h4 id="article-writer">Zoran Basich</h4>
                        <h5 id="article-date">3:00 pm EDT•June 24, 2020</h5>
                    </div>
                </div>
                    <div className="container">
                        <div className="card" style="width: 18rem;">
                            <img className="card-img-top" src="techcrunchhome.png" alt="a magnifying glass with a letter" />
                            <div className="card-body">
                                <h3 className="card-title">Articles</h3>
                                <p className="card-text">Read where we specifically report on the business related to tech, technology news, analysis of emerging trends in tech, and profiling of new tech businesses and products.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card" style="width: 18rem;">
                            <img className="card-img-top" src="eventstechcrunch.png" alt="event happening at tech crunch" />
                            <div className="card-body">
                                <h3 className="card-title">Events & Advertise</h3>
                                <p className="card-text">TechCrunch hosts events around the globe that combine digital media and live activations, as well as many media-only specials centered on momentous tech events.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                        <div className="card" style="width: 18rem;">
                            <img className="card-img-top" src="SignUp-Facebook-Default-Image.jpg" alt="sign up logo" />
                            <div className="card-body">
                                <h4 className="card-title">Sign Up/Contact Us</h4>
                                <p className="card-text">Create an account to unlock these benefits. Comment on articles and express yourself and manage your newsletters. Contact us for more information or give us feedback.</p>
                                <a href="#" className="btn btn-primary">Sign In</a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    </div>
        )
    }
}

export default HomePage;