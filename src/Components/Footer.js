import React from 'react';
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Ajuda</span>
            <span>Share</span>
            <span>Carreiras</span>
            <span>Serviços</span>
          </div>
          <div className="footer-section-columns">
            <span>112-233-4556</span>
            <span>clientecch@gmail.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Termos e Condições</span>
            <span>Política de privacidade</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;