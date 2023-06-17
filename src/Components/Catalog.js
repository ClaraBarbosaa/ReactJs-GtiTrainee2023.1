import React from 'react';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImageIphone13 from "../Assets/catalog-img-iphone13.png";

const Catalog = () => {
  return (
    <>
      <div className='catalog-bannerImage-container'>
        <img src={BannerBackground} alt="" />
      </div>
      
      <div>
        <h1 className='primary-heading'>
          Catálogo desse mês da CellCarHome
        </h1>
      </div>

      <div className='catalog-banner-container'>
        <div>
          <img src={BannerImageIphone13} alt="" />
        </div>
        <div className='catalog-text-section'>
          <p className='catalog-product-name'>Iphone 13 Pro Max</p>
          <p className='catalog-text'>
          O iPhone 13 Pro Max é o carro-chefe da Apple, apresentando um poderoso processador, câmeras de última geração e uma tela impressionante.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Catalog