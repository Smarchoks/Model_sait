import "./header.css";
import { useState } from "react";
import logo from "../header/img/logo.jpg";
import logo1 from "../header/img/logo1.png";
import logo2 from "../header/img/logo2.jpg";
import trash from "../header/img/trash_icon.png";







export const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header className="header">
      <div className="header__wrapper">
        <div className="header__nav">
          {/* Бургер-иконка (видна только на мобильных) */}
          <div className="burger" onClick={toggleMenu}>
            <span className="burger__icon">☰</span>
          </div>

          {/* Основное меню (скрывается на мобильных) */}
          <nav className="header__group-links">
            <a className="header__link" href="/woman-page">Женщинам</a>
            <a className="header__link" href="/men-page">Мужчинам</a>
            <a className="header__link" href="/about_us-page">О нас</a>
          </nav>
        </div>

        {/* Логотип */}
        <a href="/" className="header__logo">
          <img src={logo2} alt="Логотип" width={100} height={50} />
        </a>

        {/* Иконка корзины (всегда видна) */}
        <div className="header__cart">
          <a href="/basket-page" className="cart__icon">
            <img src={trash} alt="Корзина" width={30} height={25} />
          </a>
        </div>

        {/* Бургер-меню (появляется при клике) */}
        {isMenuOpen && (
          <div className="burger-menu">
            <a className="burger-menu__link" href="/woman-page">Женщинам</a>
            <a className="burger-menu__link" href="/men-page">Мужчинам</a>
            <a className="burger-menu__link" href="/about_us-page">О нас</a>
            <a className="burger-menu__link" href="/basket-page">Корзина</a>
          </div>
        )}
      </div>
    </header>




  );
};
