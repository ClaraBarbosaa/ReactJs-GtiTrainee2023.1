import React from 'react';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImageIphone13 from '../Assets/catalog-img-iphone13.png';
import SamsungS21Image from '../Assets/samsungs21-img-catalog.png';
import XiaomiMi11Image from '../Assets/xiaomi11-img-catalog.png';
import Pixel6ProImage from '../Assets/pixel6-img-catalog.png';
import OnePlus9ProImage from '../Assets/oneplus9-img-catalog.png';
import MotorolaGPowerImage from '../Assets/motorolag-img-catalog.png';
import SonyXperiaImage from '../Assets/sonyxperia-img-catalog.png';

const Catalog = () => {
  const catalogInfoData = [
    {
      image: SamsungS21Image,
      title: "Samsung Galaxy S21 Ultra",
      subtitle: "R$ 6.999,00",
      text: "O Galaxy S21 Ultra é o topo de linha da Samsung, oferecendo um display incrível e diversos recursos.",
    },
    {
      image: XiaomiMi11Image,
      title: "Xiaomi Mi 11",
      subtitle: "R$ 3.499,00",
      text: "O Xiaomi Mi 11 oferece um excelente desempenho, câmeras de alta resolução e uma tela AMOLED brilhante.",
    },
    {
      image: Pixel6ProImage,
      title: "Google Pixel 6 Pro",
      subtitle: "R$ 5.499,00",
      text: "O Google Pixel 6 Pro traz uma experiência de software pura com o Android, além de uma câmera de alta qualidade.",
    },
    {
      image: OnePlus9ProImage,
      title: "OnePlus 9 Pro",
      subtitle: "R$ 4.999,00",
      text: "O OnePlus 9 Pro combina um design elegante com um desempenho excepcional.",
    },
    {
      image: MotorolaGPowerImage,
      title: "Motorola Moto G Power",
      subtitle: "R$ 1.599,00",
      text: "O Motorola Moto G Power tem um ótimo custo-benefício com uma bateria de longa duração.",
    },
    {
      image: SonyXperiaImage,
      title: "Sony Xperia 1 III",
      subtitle: "R$ 6.999,00",
      text: "O Sony Xperia 1 III é um smartphone premium com destaque para sua tela 4K HDR OLED e seu conjunto de câmeras de alta qualidade.",
    },
  ];

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
          <p className='catalog-Iphone13-name'>Iphone 13 Pro Max</p>
          <p className='catalog-text'>
          O iPhone 13 Pro Max é o carro-chefe da Apple, apresentando um poderoso processador, câmeras de última geração e uma tela impressionante.
          </p>
        </div>
      </div>
      <div className='work-section-bottom'>
        {catalogInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
           <h2>{data.title}</h2>
           <div className='catalog-product-price'><p>{data.subtitle}</p></div>
           <p>{data.text}</p>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Catalog