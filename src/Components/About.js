import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="img-youtube-thumbnail" src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Confira o canal da CellCarHome no YouTube
        </h1>
        <p className="primary-text">
          Neste vídeo, você vai conferir os melhores carros de 2023. A melhor parte é que todos eles estão a venda na CellCarHome!
        </p>
        <p className="primary-text">
            Quer ficar por dentro dos produtos da nossa loja? Nos acompanhe no YouTube e não perca nenhuma novidade!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Confira
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;