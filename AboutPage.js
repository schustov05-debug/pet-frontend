import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Баннер */}
      <div className="about-banner">
        <img
          src="/baner.png"
          alt="Баннер"
        />
      </div>

      {/* Текст */}
      <div className="about-content">
        <h1 className="about-title">Волонтёрский мини-приют «Добрый городок»</h1>
        <p className="about-text">
          Мы — команда волонтёров мини-приюта «Добрый городок» в Санкт-Петербурге.
          Мы спасаем бездомных кошек и собак, заботимся о них, дарим им заботу и
          активно ищем для каждого любящую семью. Сейчас в нашем приюте живут и
          ждут своего человека более 50 питомцев.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
