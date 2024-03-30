import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faSnapchat, faYoutube, faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="footer-quick-links-heading">COMPANY INFO</div>
                            <div className="footer-quick-links">About</div>
                            <div className="footer-quick-links">Social Responsibility</div>
                            <div className="footer-quick-links">Affiliate</div>
                            <div className="footer-quick-links">Fashion Blogger</div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-quick-links-heading">HELP & SUPPORT</div>
                            <div className="footer-quick-links">Shipping info</div>
                            <div className="footer-quick-links">Returns</div>
                            <div className="footer-quick-links">How To Order</div>
                            <div className="footer-quick-links">How To Track</div>
                            <div className="footer-quick-links">Size Chart</div>

                        </div>
                        <div className="col-md-2">
                            <div className="footer-quick-links-heading">CUSTOMER CARE</div>
                            <div className="footer-quick-links">Contact  Us</div>
                            <div className="footer-quick-links">Payment</div>
                            <div className="footer-quick-links">Bonus Point</div>
                            <div className="footer-quick-links">Notices</div>
                        </div>

                        <div className="offset-md-1 col-md-5 social-media-section">
                            <div className="row">
                                <div className="col-md-9">
                                    <div>SOCIALS</div>
                                    <span className="social-media-icons"><FontAwesomeIcon icon={faFacebook} /></span>
                                    <span className="social-media-icons"><FontAwesomeIcon icon={faInstagram} /></span>
                                    <span className="social-media-icons"><FontAwesomeIcon icon={faTwitter} /></span>
                                    <span className="social-media-icons"><FontAwesomeIcon icon={faSnapchat} /></span>
                                    <span className="social-media-icons"><FontAwesomeIcon icon={faYoutube} /></span>
                                </div>
                                <div className="col-md-3">
                                    <div>PLATFORMS</div>
                                    <span className="social-media-icons"><FontAwesomeIcon icon={faAndroid} /></span>
                                    <span className="social-media-icons"><FontAwesomeIcon icon={faApple} /></span>
                                </div>
                            </div>
                            <div className="row sign-up-section">
                                <div className="col-md-12">
                                    <label>SIGN UP</label><br />
                                    <div className="row">
                                        <div className="col-md-10"><input type="text" className="form-control" placeholder="Your email" style={{ fontSize: '0.8rem' }} /></div>
                                        <div className="col-md-2 subscribe-btn-div"><button className="subscribe-btn">SUBSCRIBE</button></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row rights-and-coockies">
                        <div className="rights">2010-2024 All Rights Reserved</div>
                        <div className="cookies">
                            <div className="privacy-copyrights">
                                <span className="each-right">Privacy Center</span>
                                <span className="each-right">Privacy & Cookie Policy</span>
                                <span className="each-right">Manage Cookies</span>
                            </div>
                            <div className="privacy-copyrights">
                                <span className="each-right">Terms & Conditions</span>
                                <span className="each-right">Copyright Notice</span>
                                <span className="each-right">Imprint</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}