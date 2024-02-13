import React from "react";
import Facebook from './icons/facebook.png';
import Instagram from './icons/instagram.png';
import Twitter from './icons/Twitter.png';
import Linkedin from './icons/linkedin.png';

export function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
                <img src={Twitter} alt="Twitter" />
                <img src={Linkedin} alt="Linkedin" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 contact-us">
                        <h2>CONTACT US</h2>
                        <h6>123 Second Street Fifth</h6>
                        <h6>Avenue,</h6>
                        <h6>Manhattan, New York</h6>
                        <h6>+987 654 3210</h6>
                    </div>
                    <div className="col-md-3 links">
                        <h2>ADDITIONAL LINKS</h2>
                        <h6>About Us</h6>
                        <h6>Terms and Conditions</h6>
                        <h6>Privacy policy</h6>
                        <h6>News</h6>
                        <h6>Contact us</h6>
                    </div>
                    <div className="col-md-3 contact-form">
                        <h2>CONTACT</h2>
                        <form>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                                    <input type="email" className="form-control" id="Email" placeholder="Email" />
                                </div>
                                <div className="form-group textarea">
                                    <input type="text" className="form-control" id="Comment" placeholder="Comment" />
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
