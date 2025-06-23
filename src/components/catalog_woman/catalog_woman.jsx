

import React, { useState } from "react";
import "./catalog_woman.css";
import bag1 from "../catalog_woman/img/bag_woman1.jpg";
import bag2 from "../catalog_woman/img/bag_woman2.jpg";
import bag3 from "../catalog_woman/img/bag_woman3.jpg";
import bag4 from "../catalog_woman/img/bag_woman4.jpg";
import bag5 from "../catalog_woman/img/bag_woman5.jpg";
import bag6 from "../catalog_woman/img/bag_woman6.jpg";
import glases1 from "../catalog_woman/img/woman_glasses1.jpg";
import glases2 from "../catalog_woman/img/woman_glasses2.jpg";
import glases3 from "../catalog_woman/img/woman_glasses3.jpg";
import glases4 from "../catalog_woman/img/woman_glasses4.jpg";
import glases5 from "../catalog_woman/img/woman_glasses5.jpg";
import glases6 from "../catalog_woman/img/woman_glasses6.jpg";
import jacket1 from "../catalog_woman/img/woman_jacket1.jpg";
import jacket2 from "../catalog_woman/img/woman_jacket2.jpg";
import jacket3 from "../catalog_woman/img/woman_jacket3.jpg";
import jacket4 from "../catalog_woman/img/woman_jacket4.jpg";
import jacket5 from "../catalog_woman/img/woman_jacket5.jpg";
import jacket6 from "../catalog_woman/img/woman_jacket6.jpg";
import pants1 from "../catalog_woman/img/woman_pants1.jpg";
import pants2 from "../catalog_woman/img/woman_pants2.jpg";
import pants3 from "../catalog_woman/img/woman_pants3.jpg";
import pants4 from "../catalog_woman/img/woman_pants4.jpg";
import pants5 from "../catalog_woman/img/woman_pants5.jpg";
import pants6 from "../catalog_woman/img/woman_pants6.jpg";

const Notification = ({ message, onClose }) => (
  <div style={{
    position: 'fixed',
    top: '30px',
    right: '30px',
    background: '#fff',
    border: '1px solid #222',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    padding: '20px 30px',
    zIndex: 9999,
    fontSize: '18px'
  }}>
    {message}
    <button
      style={{
        marginLeft: '20px',
        background: 'none',
        border: 'none',
        color: '#222',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '18px'
      }}
      onClick={onClose}
      aria-label="Закрыть"
    >
      ×
    </button>
  </div>
);

const products = {
  bags: [
    { id: 101, name: "Женская сумка 1", price: 3500, image: bag1 },
    { id: 102, name: "Женская сумка 2", price: 4200, image: bag2 },
    { id: 103, name: "Женская сумка 3", price: 3900, image: bag3 },
    { id: 104, name: "Женская сумка 4", price: 4500, image: bag4 },
    { id: 105, name: "Женская сумка 5", price: 3800, image: bag5 },
    { id: 106, name: "Женская сумка 6", price: 4100, image: bag6 }
  ],
  glasses: [
    { id: 107, name: "Женские очки 1", price: 2500, image: glases1 },
    { id: 108, name: "Женские очки 2", price: 2800, image: glases2 },
    { id: 109, name: "Женские очки 3", price: 3200, image: glases3 },
    { id: 110, name: "Женские очки 4", price: 2900, image: glases4 },
    { id: 111, name: "Женские очки 5", price: 2700, image: glases5 },
    { id: 112, name: "Женские очки 6", price: 3100, image: glases6 }
  ],
  jackets: [
    { id: 113, name: "Женская куртка 1", price: 12500, image: jacket1 },
    { id: 114, name: "Женская куртка 2", price: 14200, image: jacket2 },
    { id: 115, name: "Женская куртка 3", price: 13900, image: jacket3 },
    { id: 116, name: "Женская куртка 4", price: 14500, image: jacket4 },
    { id: 117, name: "Женская куртка 5", price: 13800, image: jacket5 },
    { id: 118, name: "Женская куртка 6", price: 14100, image: jacket6 }
  ],
  pants: [
    { id: 119, name: "Женские брюки 1", price: 8500, image: pants1 },
    { id: 120, name: "Женские брюки 2", price: 9200, image: pants2 },
    { id: 121, name: "Женские брюки 3", price: 8900, image: pants3 },
    { id: 122, name: "Женские брюки 4", price: 9500, image: pants4 },
    { id: 123, name: "Женское платье 5", price: 8800, image: pants5 },
    { id: 124, name: "Женские брюки 6", price: 9100, image: pants6 }
  ]
};

export const Catalog_woman = () => {
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    setNotification(`${product.name} добавлен в корзину!`);
    setTimeout(() => setNotification(""), 2000);
  };

  return (
    <div className="catalog_men-container">
      {notification && (
        <Notification message={notification} onClose={() => setNotification("")} />
      )}

      {/* Сумки */}
      <div className="catalog_men_name__wrapper">
        <p className="catalog_men-name"> Женщинам</p>
        <p className="fraction">/</p>
        <p className="catalog_men-name"> Сумки</p>
      </div>
      <div className="catalog_men-wrapper">
        {products.bags.map(product => (
          <div key={product.id} className="catalog_men-cards">
            <img
              className="catalog_men-image"
              width="200"
              height="300"
              src={product.image}
              alt={product.name}
            />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price} ₽</p>
            <button 
              className="catalog_men-button" 
              onClick={() => addToCart(product)}
            >
              Добавить
            </button>
          </div>
        ))}
      </div>
      
      {/* Очки */}
      <div className="catalog_men_name__wrapper">
        <p className="catalog_men-name"> Женщинам</p>
        <p className="fraction">/</p>
        <p className="catalog_men-name"> Очки</p>
      </div>
      <div className="catalog_men-wrapper">
        {products.glasses.map(product => (
          <div key={product.id} className="catalog_men-cards">
            <img
              className="catalog_men-image"
              width="200"
              height="300"
              src={product.image}
              alt={product.name}
            />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price} ₽</p>
            <button 
              className="catalog_men-button" 
              onClick={() => addToCart(product)}
            >
              Добавить
            </button>
          </div>
        ))}
      </div>

      {/* Куртки */}
      <div className="catalog_men_name__wrapper">
        <p className="catalog_men-name"> Женщинам</p>
        <p className="fraction">/</p>
        <p className="catalog_men-name"> Куртки</p>
      </div>
      <div className="catalog_men-wrapper">
        {products.jackets.map(product => (
          <div key={product.id} className="catalog_men-cards">
            <img
              className="catalog_men-image"
              width="200"
              height="300"
              src={product.image}
              alt={product.name}
            />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price} ₽</p>
            <button 
              className="catalog_men-button" 
              onClick={() => addToCart(product)}
            >
              Добавить
            </button>
          </div>
        ))}
      </div>

      {/* Брюки */}
      <div className="catalog_men_name__wrapper">
        <p className="catalog_men-name"> Женщинам</p>
        <p className="fraction">/</p>
        <p className="catalog_men-name"> Брюки - Платья</p>
      </div>
      <div className="catalog_men-wrapper">
        {products.pants.map(product => (
          <div key={product.id} className="catalog_men-cards">
            <img
              className="catalog_men-image"
              width="200"
              height="300"
              src={product.image}
              alt={product.name}
            />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price} ₽</p>
            <button 
              className="catalog_men-button" 
              onClick={() => addToCart(product)}
            >
              Добавить
            </button>
          </div>
        ))}
      </div>

      <div className="collection-number">[COLLECTION 0.3]</div>
    </div>
  );
};


// import React, { useState } from "react";
// import "./catalog_woman.css";
// import bag1 from "../catalog_men/img/catalog_men-bag1.jpg";
// import bag2 from "../catalog_woman/img/bag_woman2.jpg";
// import bag3 from "../catalog_woman/img/bag_woman3.jpg";
// import bag4 from "../catalog_men/img/catalog_men-bag4.jpg";
// import bag5 from "../catalog_woman/img/bag_woman4.jpg";
// import glases1 from "../catalog_men/img/catalog_men-glases1.jpg";
// import glases2 from "../catalog_men/img/catalog_men-glases2.jpg";
// import glases3 from "../catalog_men/img/catalog_men-glases3.jpg";
// import glases4 from "../catalog_men/img/catalog_men-glases4.jpg";
// import glases5 from "../catalog_men/img/catalog_men-glases5.jpg";
// import glases6 from "../catalog_men/img/catalog_men-glases6.jpg";
// import jacket1 from "../catalog_men/img/jacket1.jpg";
// import jacket2 from "../catalog_men/img/jacket2.jpg";
// import jacket3 from "../catalog_men/img/jacket3.jpg";
// import jacket4 from "../catalog_men/img/jacket4.jpg";
// import jacket5 from "../catalog_men/img/jacket5.jpg";
// import jacket6 from "../catalog_men/img/jacket6.jpg";
// import pants1 from "../catalog_men/img/pants1.jpg";
// import pants2 from "../catalog_men/img/pants2.jpg";
// import pants3 from "../catalog_men/img/pants3.jpg";
// import pants4 from "../catalog_men/img/pants4.jpg";
// import pants5 from "../catalog_men/img/pants5.jpg";
// import pants6 from "../catalog_men/img/pants6.jpg";

// const Notification = ({ message, onClose }) => (
//   <div style={{
//     position: 'fixed',
//     top: '30px',
//     right: '30px',
//     background: '#fff',
//     border: '1px solid #222',
//     borderRadius: '8px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
//     padding: '20px 30px',
//     zIndex: 9999,
//     fontSize: '18px'
//   }}>
//     {message}
//     <button
//       style={{
//         marginLeft: '20px',
//         background: 'none',
//         border: 'none',
//         color: '#222',
//         fontWeight: 'bold',
//         cursor: 'pointer',
//         fontSize: '18px'
//       }}
//       onClick={onClose}
//       aria-label="Закрыть"
//     >
//       ×
//     </button>
//   </div>
// );

// const products = {
//   bags: [
//     { id: 1, name: "Женская сумка 1", price: 3500, image: bag1 },
//     { id: 2, name: "Женская сумка 2", price: 4200, image: bag2 },
//     { id: 3, name: "Женская сумка 3", price: 3900, image: bag3 },
//     { id: 4, name: "Женская сумка 4", price: 4500, image: bag4 },
//     { id: 5, name: "Женская сумка 5", price: 3800, image: bag5 },
//     { id: 6, name: "Женская сумка 6", price: 4100, image: bag1 }
//   ],
//   glasses: [
//     { id: 7, name: "Женские очки 1", price: 2500, image: glases1 },
//     { id: 8, name: "Женские очки 2", price: 2800, image: glases2 },
//     { id: 9, name: "Женские очки 3", price: 3200, image: glases3 },
//     { id: 10, name: "Женские очки 4", price: 2900, image: glases4 },
//     { id: 11, name: "Женские очки 5", price: 2700, image: glases5 },
//     { id: 12, name: "Женские очки 6", price: 3100, image: glases6 }
//   ],
//   jackets: [
//     { id: 13, name: "Женская куртка 1", price: 12500, image: jacket1 },
//     { id: 14, name: "Женская куртка 2", price: 14200, image: jacket2 },
//     { id: 15, name: "Женская куртка 3", price: 13900, image: jacket3 },
//     { id: 16, name: "Женская куртка 4", price: 14500, image: jacket4 },
//     { id: 17, name: "Женская куртка 5", price: 13800, image: jacket5 },
//     { id: 18, name: "Женская куртка 6", price: 14100, image: jacket6 }
//   ],
//   pants: [
//     { id: 19, name: "Женские брюки 1", price: 8500, image: pants1 },
//     { id: 20, name: "Женские брюки 2", price: 9200, image: pants2 },
//     { id: 21, name: "Женские брюки 3", price: 8900, image: pants3 },
//     { id: 22, name: "Женские брюки 4", price: 9500, image: pants4 },
//     { id: 23, name: "Женские брюки 5", price: 8800, image: pants5 },
//     { id: 24, name: "Женские брюки 6", price: 9100, image: pants6 }
//   ]
// };

// export const Catalog_woman = () => {
//   const [notification, setNotification] = useState("");

//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItem = cart.find(item => item.id === product.id);
    
//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }
    
//     localStorage.setItem("cart", JSON.stringify(cart));
//     setNotification(`${product.name} добавлен в корзину!`);
//     setTimeout(() => setNotification(""), 2000);
//   };

//   return (
//     <div className="catalog_men-container">
//       {notification && (
//         <Notification message={notification} onClose={() => setNotification("")} />
//       )}

//       {/* Сумки */}
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Женщинам</p>
//         <p className="fraction">/</p>
//         <p className="catalog_men-name"> Сумки</p>
//       </div>
//       <div className="catalog_men-wrapper">
//         {products.bags.map(product => (
//           <div key={product.id} className="catalog_men-cards">
//             <img
//               className="catalog_men-image"
//               width="200"
//               height="300"
//               src={product.image}
//               alt={product.name}
//             />
//             <p className="product-price">{product.price} ₽</p>
//             <button 
//               className="catalog_men-button" 
//               onClick={() => addToCart(product)}
//             >
//               Добавить
//             </button>
//           </div>
//         ))}
//       </div>
      
//       {/* Очки */}
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Женщинам</p>
//         <p className="fraction">/</p>
//         <p className="catalog_men-name"> Очки</p>
//       </div>
//       <div className="catalog_men-wrapper">
//         {products.glasses.map(product => (
//           <div key={product.id} className="catalog_men-cards">
//             <img
//               className="catalog_men-image"
//               width="200"
//               height="300"
//               src={product.image}
//               alt={product.name}
//             />
//             <p className="product-price">{product.price} ₽</p>
//             <button 
//               className="catalog_men-button" 
//               onClick={() => addToCart(product)}
//             >
//               Добавить
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Куртки */}
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Женщинам</p>
//         <p className="fraction">/</p>
//         <p className="catalog_men-name"> Куртки</p>
//       </div>
//       <div className="catalog_men-wrapper">
//         {products.jackets.map(product => (
//           <div key={product.id} className="catalog_men-cards">
//             <img
//               className="catalog_men-image"
//               width="200"
//               height="300"
//               src={product.image}
//               alt={product.name}
//             />
//             <p className="product-price">{product.price} ₽</p>
//             <button 
//               className="catalog_men-button" 
//               onClick={() => addToCart(product)}
//             >
//               Добавить
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Брюки */}
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Женщинам</p>
//         <p className="fraction">/</p>
//         <p className="catalog_men-name"> Брюки</p>
//       </div>
//       <div className="catalog_men-wrapper">
//         {products.pants.map(product => (
//           <div key={product.id} className="catalog_men-cards">
//             <img
//               className="catalog_men-image"
//               width="200"
//               height="300"
//               src={product.image}
//               alt={product.name}
//             />
//             <p className="product-price">{product.price} ₽</p>
//             <button 
//               className="catalog_men-button" 
//               onClick={() => addToCart(product)}
//             >
//               Добавить
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="collection-number">[COLLECTION 0.3]</div>
//     </div>
//   );
// };


// import React, { useState } from "react";
// import "./catalog_woman.css";
// import bag1 from "../catalog_men/img/catalog_men-bag1.jpg";
// import bag2 from "../catalog_woman/img/bag_woman2.jpg";
// import bag3 from "../catalog_woman/img/bag_woman3.jpg";
// import bag4 from "../catalog_men/img/catalog_men-bag4.jpg";
// import bag5 from "../catalog_woman/img/bag_woman4.jpg";
// import glases1 from "../catalog_men/img/catalog_men-glases1.jpg";
// import glases2 from "../catalog_men/img/catalog_men-glases2.jpg";
// import glases3 from "../catalog_men/img/catalog_men-glases3.jpg";
// import glases4 from "../catalog_men/img/catalog_men-glases4.jpg";
// import glases5 from "../catalog_men/img/catalog_men-glases5.jpg";
// import glases6 from "../catalog_men/img/catalog_men-glases6.jpg";











// // Компонент всплывающего уведомления
// const Notification = ({ message, onClose }) => (
//   <div style={{
//     position: 'fixed',
//     top: '30px',
//     right: '30px',
//     background: '#fff',
//     border: '1px solid #222',
//     borderRadius: '8px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
//     padding: '20px 30px',
//     zIndex: 9999,
//     fontSize: '18px'
//   }}>
//     {message}
//     <button
//       style={{
//         marginLeft: '20px',
//         background: 'none',
//         border: 'none',
//         color: '#222',
//         fontWeight: 'bold',
//         cursor: 'pointer',
//         fontSize: '18px'
//       }}
//       onClick={onClose}
//       aria-label="Закрыть"
//     >
//       ×
//     </button>
//   </div>
// );

// export const Catalog_woman = () => {




// const [notification, setNotification] = useState("");

//   // Функция для показа уведомления
//   const handleAdd = () => {
//     setNotification("Товар добавлен в корзину!");
//     setTimeout(() => setNotification(""), 2000);
//   };

//   return (
//     <div className="catalog_men-container">
//       {/* Всплывающее уведомление */}
//       {notification && (
//         <Notification message={notification} onClose={() => setNotification("")} />
//       )}

//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Женщинам</p>
//         <p className="fraction">/</p>
//         <p className="catalog_men-name"> Сумки</p>
//       </div>
//       <div className="catalog_men-wrapper">
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={bag1}
//             alt=""
//           />
//           <p className="product-price">3500 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={bag2}
//             alt=""
//           />
//           <p className="product-price">4200 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={bag3}
//             alt=""
//           />
//           <p className="product-price">3900 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={bag4}
//             alt=""
//           />
//           <p className="product-price">4500 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={bag5}
//             alt=""
//           />
//           <p className="product-price">3800 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={bag1}
//             alt=""
//           />
//           <p className="product-price">4100 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//       </div>
      
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Женщинам</p>
//         <p className="fraction">/</p>
//         <p className="catalog_men-name"> Очки</p>
//       </div>
//       <div className="catalog_men-wrapper">
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={glases1}
//             alt=""
//           />
//           <p className="product-price">2500 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={glases2}
//             alt=""
//           />
//           <p className="product-price">2800 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={glases3}
//             alt=""
//           />
//           <p className="product-price">3200 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={glases4}
//             alt=""
//           />
//           <p className="product-price">2900 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={glases5}
//             alt=""
//           />
//           <p className="product-price">2700 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//         <div className="catalog_men-cards">
//           <img
//             className="catalog_men-image"
//             width="200"
//             height="300"
//             srcSet={glases6}
//             alt=""
//           />
//           <p className="product-price">3100 ₽</p>
//           <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
//         </div>
//       </div>
//       <div className="collection-number">[COLLECTION 0.3]</div>
//     </div>
//   );
// };










  // const [notification, setNotification] = useState("");

  // // Функция для показа уведомления
  // const handleAdd = () => {
  //   setNotification("Товар добавлен в корзину!");
  //   setTimeout(() => setNotification(""), 2000);
  // };

  // return (
  //   <div className="catalog_men-container">
  //     {/* Всплывающее уведомление */}
  //     {notification && (
  //       <Notification message={notification} onClose={() => setNotification("")} />
  //     )}

  //     <div className="catalog_men_name__wrapper">
  //       <p className="catalog_men-name"> Женщинам</p>
  //       <p className="fraction">/</p>
  //       <p className="catalog_men-name"> Сумки</p>
  //     </div>
  //     <div className="catalog_men-wrapper">
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag1}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag2}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag3}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag4}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag5}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag1}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //     </div>
      
  //     <div className="catalog_men_name__wrapper">
  //       <p className="catalog_men-name"> Женщим</p>
  //       <p className="fraction">/</p>
  //       <p className="catalog_men-name"> Очки</p>
  //     </div>
  //     <div className="catalog_men-wrapper">
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases1}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases2}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases3}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases4}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases5}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases6}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //     </div>
  //     <div class="collection-number">[COLLECTION 0.3]</div>
  //   </div>


