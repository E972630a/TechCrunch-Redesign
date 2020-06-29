import React from 'react';



class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="showcase" />
                <div className="article-container">
                    <a href="/article1"><div className="grid-item">
                        <img className="article-img" src="img/AWSLogo.jpg" alt="AWS logo" />
                        <h2 id="article-title">Why AWS built a no-code tool</h2>
                        <h4 id="article-writer">Frederic Lardinois</h4>
                        <h5 id="article-date">7:36 pm EDT•June 24, 2020</h5>
                    </div></a>
                    <a href="/article2"><div className="grid-item">
                        <img className="article-img" src="img/scooterimage.jpg" alt="a girl on a scooter" />
                        <h2 id="article-title">New York City could have an e-scooter pilot program by March</h2>
                        <h4 id="article-writer">Kirsten Korosec</h4>
                        <h5 id="article-date">6:41 pm EDT•June 24, 2020</h5>
                    </div></a>
                    <a href="/article3"><div className="grid-item">
                        <img className="article-img" src="img/Loupedeck-CT-07.jpg" alt="a device with buttons" />
                        <h2 id="article-title">The Loupedeck CT is a fantastic, flexible editing console for Mac and PC</h2>
                        <h4 id="article-writer">Darrell Etherington</h4>
                        <h5 id="article-date">5:17 pm EDT•June 24, 2020</h5>
                    </div></a>
                </div>
                <div className="container">
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="img/techcrunchhome.png" alt="magnifying glass looking at a paper" />
                        <div className="card-body">
                            <h3 className="card-title">Articles</h3>
                            <p className="card-text">Read where we specifically report on the business related to tech, technology
                            news, analysis of emerging trends in tech, and profiling of new tech businesses and products.
                    </p>
                            <a href="/articles" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="img/eventstechcrunch.png" alt="an events poster" />
                        <div className="card-body">
                            <h3 className="card-title">Events/Advertise</h3>
                            <p className="card-text">TechCrunch hosts events around the globe that combine digital media and live
                        activations, as well as many media-only specials centered on momentous tech events.</p>
                            <a href="/events" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src="img/SignUp-Facebook-Default-Image.jpg" alt="a sign up logo" />
                        <div className="card-body">
                            <h4 className="card-title">Sign Up/Contact Us</h4>
                            <p className="card-text">Create an account to unlock these benefits. Comment on articles and express
                        yourself and manage your newsletters. Contact us for more information or give us feedback.</p>
                            <a href="/contact" className="btn btn-primary">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;