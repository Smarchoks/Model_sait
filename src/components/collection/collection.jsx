import "./collection.css";
import collect from ".//img/collect.jpg";
import bag from "./img/bag.jpg";
import { Link } from "react-router-dom";
export const Collection = () => {
  return (
    <>
      {/* <div class="coollection">
        <img class="collection__imj" width="700" srcSet={collect} />
        <div class="collection__block">
          <div class="collection__block-text">
            <p>Gifts curated for the season</p>
            <p>A Masterstroke Of Metallics</p>
          </div>
          <div class="collection__block-btn">
            <a
              class="collection__block-btn-wrapper"
              Link
              to
              href="../collection-page"
            >
              Коллекция 2025
            </a>
          </div>
        </div>
      </div>
      <div class="futures">
        <div class="futures__wrapper">
          <div class="futures__card">
            <img
              class="futures__image"
              width="200"
              height="300"
              srcSet={bag}
              alt=""
            />
            <button class="futures__button">Shirts</button>
          </div>
          <div class="futures__card">
            <img
              class="futures__image"
              width="200"
              height="300"
              srcSet={bag}
              alt=""
            />
            <button class="futures__button">Shirts</button>
          </div>
          <div class="futures__card">
            <img
              class="futures__image"
              width="200"
              height="300"
              srcSet={bag}
              alt=""
            />
            <button class="futures__button">Shirts</button>
          </div>
          <div class="futures__card">
            <img
              class="futures__image"
              width="200"
              height="300"
              srcSet={bag}
              alt=""
            />
            <button class="futures__button">Shirts</button>
          </div>
          <div class="futures__card">
            <img
              class="futures__image"
              width="200"
              height="300"
              srcSet={bag}
              alt=""
            />
            <button class="futures__button">Shirts</button>
          </div>
          <div class="futures__card">
            <img
              class="futures__image"
              width="200"
              height="300"
              srcSet={bag}
              alt=""
            />
            <button class="futures__button">Shirts</button>
          </div>
        </div>
      </div> */}



 <section className="collection-section">
      <div className="collection-hero">
        <img 
          className="collection-hero__image" 
          src={collect} 
          srcSet={`${collect} 1x, ${collect} 2x`}
          alt="Main collection showcase"
          loading="lazy"
        />
        <div className="collection-hero__content">
          <div className="collection-hero__text">
            <p className="collection-subtitle">Сезонная подборка для подарков</p>
            <h2 className="collection-title">Великолепие металлических оттенков</h2>
          </div>
          <Link
            className="collection-button" 
            href="../collection-page"
          >
            Коллекция 2025
          </Link>
        </div>
      </div>
{/* 
      <div className="collection-grid">
        <div className="collection-grid__wrapper">
          {[...Array(6)].map((_, index) => (
            <div className="collection-card" key={index}>
              <img
                className="collection-card__image"
                src={bag}
                srcSet={`${bag} 1x, ${bag} 2x`}
                alt={`Collection item ${index + 1}`}
                loading="lazy"
              />
              <button className="collection-card__button">Shirts</button>
            </div>
          ))}
        </div>
      </div> */}
    </section>


    </>
  );
};
