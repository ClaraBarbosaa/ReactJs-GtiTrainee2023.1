import React from 'react'

const Contact = () => {
    return (
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Tem alguma dúvida ou sugestão?</h1>
        <h1 className="primary-heading">Podemos ajudar!</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="seu_email@gmail.com" />
          <button className="secondary-button">Enviar</button>
        </div>
      </div>
    );
  };  

export default Contact