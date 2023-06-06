import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
          
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Carros, casas e celulares por preços acessíveis só aqui!
          </h1>
          <p className='primary-text'>
            Está a procura de uma loja de automóveis, uma corretora de imoveis e uma loja de celulares com serviços de qualidade? A CellCarHome te oferece isso tudo em um só E-Commerce.
          </p>
          <button className='secondary-button'>
            Compre agora <FiArrowRight />
          </button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
};


export default Home