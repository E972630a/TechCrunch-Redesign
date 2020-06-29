import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <section className="footerContainer">
                    <div className="quickLinks">
                        <h3>About</h3>
                        <ul>
                            <li><a className="footer-nav" href="/">TechCrunch</a></li>
                            <li><a className="footer-nav" href="/events">Event</a></li>
                            <li><a className="footer-nav" href="/events">Advertise</a></li>
                            <li><a className="footer-nav" href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="quickLinks">
                        <h3>Legal</h3>
                        <ul>
                            <li><a className="footer-nav" href="#">Private Policy</a></li>
                            <li><a className="footer-nav" href="#">Terms of Service</a></li>
                            <li><a className="footer-nav" href="#">Extra Crunch Terms</a></li>
                            <li><a className="footer-nav" href="#">Privacy dashboard</a></li>
                            <li><a className="footer-nav" href="#">Code of Conduct</a></li>
                        </ul>
                    </div>
                    <div class="quickLinks">
                        <h3>Read Anywhere</h3>
                        <ul>
                            <li><a className="footer-nav" href="#">App Store</a></li>
                            <li><a className="footer-nav" href="#">Google Play</a></li>
                        </ul>
                    </div>
                    <div class="quickLinks">
                        <h3>International</h3>
                        <ul>
                            <li><a className="footer-nav" href="#">Japan</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/"><img className="socialmedia" src="img/facebooklogo.webp"
                            alt="facebook logo" /></a>
                        <a href="https://youtube.com/"><img className="socialmedia" src="img/youtubelogo.webp"
                            alt="youtube logo" /></a>
                        <a href="https://linkedin.com/"><img className="socialmedia" src="img/linkedinlogo.webp"
                            alt="linkedin logo" /></a>
                        <a href="https://twitter.com/"><img className="socialmedia" src="img/twitterlogo.webp"
                            alt="twitter logo" /></a>
                        <a href="https://www.instagram.com/"><img className="socialmedia" src="img/instagramlogo.webp"
                            alt="instagram logo" /></a>
                    </div>
                </section>
                <div className="copyright">
                    <p>&copy; 2013-2020 Verizon Media.All rights reserved.Powered by WordPress VIP.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;