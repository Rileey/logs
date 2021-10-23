import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return(
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <img className="footer-img" src="./luckymelogo.png" alt=""/>
                        <div className="social-media">
                            <p><a className="facebook" href="http://facebook.com/luckymeNigeria" ><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></p>
                            <p><a className="twitter" href="http://twitter.com/luckymeNigeria" ><FontAwesomeIcon icon={['fab', 'twitter']} /></a></p>
                            <p><a className="instagram" href="http://instgram.com/luckymeNigeria" ><FontAwesomeIcon icon={['fab', 'instagram']} /></a></p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <h3>Contact Info</h3>
                        <p><span>support@luckyme.ng</span></p>
                    </div>
                </div>
                <h3 style={{color: "white"}}>Quick Links</h3>
                <div className="footer-bottom">
                            <p><a href="https://luckyme.ng/about" style={{textDecoration: "none", color: "white"}}>About LuckyMe </a></p>
                            <p><a href="https://luckyme.ng/terms" style={{textDecoration: "none", color: "white"}}>Terms &amp; Conditions</a></p>
                            <p><a href="#privacy-policy" style={{textDecoration: "none", color: "white"}}>Privacy Policy</a></p>
                            <p><a href="#billing-policy" style={{textDecoration: "none", color: "white"}}>Billing Policy</a></p>
                            <p><a href="https://luckyme.ng/contact" style={{textDecoration: "none", color: "white"}}>Contact Us</a></p>
                            <p><a href="https://luckyme.ng/faq" style={{textDecoration: "none", color: "white"}}>FAQ's</a></p>
                    </div>
            </footer>
        </div>
    )
}

export default Footer