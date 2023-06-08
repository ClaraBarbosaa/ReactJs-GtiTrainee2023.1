import React from 'react';
import IconCar from "../Assets/icon-car.png";
import IconHouse from "../Assets/icon-house.png";
import IconSmartphone from "../Assets/icon-smartphone.png";

const Work = () => {
    const workInfoData = [
      {
        image: IconCar,
        title: "Compre carros",
        text: "Aqui você encontrará diversos carros a venda. Também possuímos serviços de seguros.",
      },
      {
        image: IconHouse,
        title: "Alugue ou compre imóveis",
        text: "Na nossa corretora de imóveis, temos diversos contratos incríveis.",
      },
      {
        image: IconSmartphone,
        title: "Compre celulares",
        text: "Dos celulares mais baratos aos mais caros, encontre o ideal para você na nossa loja de celulares.",
      },
    ];
    return (
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Serviços</p>
          <h1 className="primary-heading">Como funciona?</h1>
          <p className="primary-text">
            A CellCarHome é 3 em 1, ou seja, prestamos três tipos de serviço em uma só loja. 
            Nossos serviços incluem uma corretora de imóveis, uma loja de automóveis e uma loja de celulares.
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Work;