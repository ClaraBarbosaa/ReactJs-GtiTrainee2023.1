import React from 'react';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImageIphone13 from '../Assets/catalog-img-iphone13.png';
import SamsungS21Image from '../Assets/samsungs21-img-catalog.png';
import XiaomiMi11Image from '../Assets/xiaomi11-img-catalog.png';
import Pixel6ProImage from '../Assets/pixel6-img-catalog.png';
import OnePlus9ProImage from '../Assets/oneplus9-img-catalog.png';
import MotorolaGPowerImage from '../Assets/motorolag-img-catalog.png';
import SonyXperiaImage from '../Assets/sonyxperia-img-catalog.png';
import FordMustangImage from '../Assets/fordmustang-img-catalog.png';
import ToyotaCamryImage from '../Assets/toyotacamry-img-catalog.png';
import BMW3SeriesImage from '../Assets/bmw3-img-catalog.png';
import HondaCivicImage from '../Assets/hondacivic-img-catalog.png';
import MercedesBenzImage from '../Assets/mercedesbenz-img-catalog.png';
import Chevrolet1500Image from '../Assets/chevrolet1500-img-catalog.png'

const Catalog = () => {
  const catalogSmartphoneInfoData = [
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

  const catalogCarInfoData = [
    {
      image: FordMustangImage,
      title: "Ford Mustang GT",
      subtitle: "$70.000",
      text: "Um icônico carro esportivo com um motor potente e design agressivo. Possui tecnologia avançada e alto desempenho.",
    },
    {
      image: ToyotaCamryImage,
      title: "Toyota Camry",
      subtitle: "$25.000",
      text: "Um sedã elegante e confiável, oferecendo conforto e economia de combustível. Ideal para viagens em família ou uso diário.",
    },
    {
      image: BMW3SeriesImage,
      title: "BMW 3 Series",
      subtitle: "$40.000",
      text: "Um sedan de luxo com design sofisticado, desempenho excepcional e recursos inovadores. Uma combinação perfeita de estilo e potência.",
    },
    {
      image: HondaCivicImage,
      title: "Honda Civic",
      subtitle: "$20.000",
      text: "Um carro compacto e versátil, conhecido por sua confiabilidade e economia. Oferece um interior espaçoso e recursos de segurança avançados.",
    },
    {
      image: MercedesBenzImage,
      title: "Mercedes-Benz C-Class",
      subtitle: "$45.000",
      text: "Um sedan premium que combina elegância e desempenho. Possui interior luxuoso, tecnologia de ponta e uma experiência de condução excepcional.",
    },
    {
      image: Chevrolet1500Image,
      title: "Chevrolet Silverado 1500",
      subtitle: "$35.000",
      text: "Uma picape robusta e confiável, projetada para trabalho pesado. Oferece capacidade de reboque, espaço de carga generoso e recursos de segurança avançados.",
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
        <div className='catalog-banner-section'>
          <p className='catalog-Iphone13-name'>Iphone 13 Pro Max</p>
          <p className='catalog-text'>
          O iPhone 13 Pro Max é o carro-chefe da Apple, apresentando um poderoso processador, câmeras de última geração e uma tela impressionante.
          </p>
        </div>
      </div>
      <div className='catalog-products-section'>
        <p className="primary-subheading">Smartphones</p>
        <div className='work-section-bottom'>
          {catalogSmartphoneInfoData.map((data) => (
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
        <p className="primary-subheading">Carros</p>
        <div className='work-section-bottom'>
          {catalogCarInfoData.map((data) => (
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
      </div>
      
    </>
  );
};

export default Catalog