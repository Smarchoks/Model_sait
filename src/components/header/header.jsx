import "./header.css";
import { useState } from "react";
import logo from "../header/img/logo.jpg";
import logo1 from "../header/img/logo1.png";
import logo2 from "../header/img/logo2.jpg";
import trash from "../header/img/trash_icon.png";
import { Link } from "react-router-dom";






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
            <Link className="header__link" to="/woman-page">Женщинам</Link>
            <Link className="header__link" to="/men-page">Мужчинам</Link>
            <Link className="header__link" to="/about_us-page">О нас</Link>
          </nav>
        </div>

        {/* Логотип */}
        <Link to="/" className="header__logo">
          <img src={logo2} alt="Логотип" width={100} height={50} />
        </Link>

        {/* Иконка корзины (всегда видна) */}
        <div className="header__cart">
          <Link to="/basket-page" className="cart__icon">
            <img src={trash} alt="Корзина" width={30} height={25} />
          </Link>
        </div>

        {/* Бургер-меню (появляется при клике) */}
        {isMenuOpen && (
          <div className="burger-menu">
            <Link className="burger-menu__link" to="/woman-page">Женщинам</Link>
            <Link className="burger-menu__link" to="/men-page">Мужчинам</Link>
            <Link className="burger-menu__link" to="/about_us-page">О нас</Link>
            <Link className="burger-menu__link" to="/basket-page">Корзина</Link>
          </div>
        )}
      </div>
    </header>




  );
};