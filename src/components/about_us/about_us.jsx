import "./about_us.css";
import logo_about_us from "./img/logo_about_us.png";
export const About_us = () => {
  return (
     <section className="about_us">
      <div className="about_us__container">
        <div className="about_us__image-wrapper">
          <img
            className="about_us__image"
            src={logo_about_us}
            alt="Логотип ENCR(E) NOIRE"
            loading="lazy"
          />
        </div>
        
        <div className="about_us__content">
          <h1 className="about_us__title">
            [О нас] ENCR(E) NOIRE · [EST. 2025]
          </h1>
          
          <div className="about_us__history">
            <p>
              НЕОЖИДАННОЕ ЗАРОЖДЕНИЕ В [2019] ГОДУ В РАМКАХ ЭКСПЕРИМЕНТАЛЬНОГО ПРОЕКТА
              ПО СОЧЕТАНИЮ ТЕКСТИЛЬНЫХ МАТЕРИАЛОВ С НЕТРАДИЦИОННЫМИ ПИГМЕНТАМИ
              СЛУЧАЙНО БЫЛ СОЗДАН ПРОТОТИП, СТАВШИЙ ОСНОВОЙ ДЛЯ ПЕРВОЙ КАПСУЛЬНОЙ
              КОЛЛЕКЦИИ.
            </p>
          </div>
          
          <div className="about_us__info">
            <p className="about_us__production">
              Производство: Россия / г. Санкт-Петербург, ш. Энтузиастов, д. 12, корп. 2
            </p>
            
            <h2 className="about_us__subtitle">СОТРУДНИЧЕСТВО:</h2>
            
            <ul className="about_us__contacts">
              <li>ДЛЯ ПРЕССЫ: ENCR[E]-PRESS@PROTONMAIL[.]COM</li>
              <li>ОПТОВЫЕ ЗАКАЗЫ: ENCR[E]-ORDERS@PROTONMAIL[.]COM</li>
              <li>ТВОРЧЕСКИЕ ПРЕДЛОЖЕНИЯ: ENCR[E]-LAB@PROTONMAIL[.]COM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
