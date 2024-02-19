import React from "react";
import Logoblanc from "../image/logo-idea-trav-blanc.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <div className="logo-container">
          <img src={Logoblanc} alt="IdeaTrav Logo" />
        </div>
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p>&copy; ideatrav@gmail.com</p>
    </div>
  );
}

export default Footer;
