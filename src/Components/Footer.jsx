import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";





function Footer() {
  return (
    <div className="footer">
        <div className="sb__footer section__padding">
             <div className="sb__footer-links">
              <div className="sb__footer-links_div">
              <h4>N-161, Green Park,</h4>
              <a href="/">
                <p>South Delhi, Delhi India</p>
              </a>
              <a href="/">
                <p>nx@novaexporium.com</p>
              </a>
              <a href="/">
                <p>+91-7779981423</p>
              </a>
              </div>
              <div className="sb__footer-links_div">
              <h4>Home</h4>
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/exhibitor">
                <p>Exhibitor</p>
              </a>
              <a href="/visitor">
                <p>Visitor</p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
              </div>
              <div className="sb__footer-links_div">
              <h4>Help</h4>
              <a href="/faqs">
                <p>FAQS</p>
              </a>
              <a href="/guide">
                <p>Guide</p>
              </a>
              </div>
              <div className="sb__footer-links_div">
                <h4>comimg soon on</h4>
                <div className="socialmedia">
                <a href="/"><FaFacebookF /></a>
                <a href="/"><FaInstagram /></a>
                <a href="/"><FaTwitterSquare /></a>
                <a href="/"><FaRocketchat /></a>
                </div>
              </div>
             </div>
             <hr></hr>
             <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()}  By NovaeXporium Made with Wix Studio™




                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Condition</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>

                </div>
             </div>
        </div>
      
    </div>
  );
}

export default Footer;