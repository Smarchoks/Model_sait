import React, { useState } from "react";
import "./catalog_men.css";
import bag1 from "../catalog_men/img/catalog_men-bag1.jpg";
import bag2 from "../catalog_men/img/catalog_men-bag2.jpg";
import bag3 from "../catalog_men/img/catalog_men-bag3.jpg";
import bag4 from "../catalog_men/img/catalog_men-bag4.jpg";
import bag5 from "../catalog_men/img/catalog_men-bag5.jpg";
import glases1 from "../catalog_men/img/catalog_men-glases1.jpg";
import glases2 from "../catalog_men/img/catalog_men-glases2.jpg";
import glases3 from "../catalog_men/img/catalog_men-glases3.jpg";
import glases4 from "../catalog_men/img/catalog_men-glases4.jpg";
import glases5 from "../catalog_men/img/catalog_men-glases5.jpg";
import glases6 from "../catalog_men/img/catalog_men-glases6.jpg";
import jacket1 from "../catalog_men/img/jacket1.jpg";
import jacket2 from "../catalog_men/img/jacket2.jpg";
import jacket3 from "../catalog_men/img/jacket3.jpg";
import jacket4 from "../catalog_men/img/jacket4.jpg";
import jacket5 from "../catalog_men/img/jacket5.jpg";
import jacket6 from "../catalog_men/img/jacket6.jpg";
import pants1 from "../catalog_men/img/pants1.jpg";
import pants2 from "../catalog_men/img/pants2.jpg";
import pants3 from "../catalog_men/img/pants3.jpg";
import pants4 from "../catalog_men/img/pants4.jpg";
import pants5 from "../catalog_men/img/pants5.jpg";
import pants6 from "../catalog_men/img/pants6.jpg";

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
    { id: 1, name: "Мужская сумка 1", price: 3500, image: bag1 },
    { id: 2, name: "Мужская сумка 2", price: 4200, image: bag2 },
    { id: 3, name: "Мужская сумка 3", price: 3900, image: bag3 },
    { id: 4, name: "Мужская сумка 4", price: 4500, image: bag4 },
    { id: 5, name: "Мужская сумка 5", price: 3800, image: bag5 },
    { id: 6, name: "Мужская сумка 6", price: 4100, image: bag1 }
  ],
  glasses: [
    { id: 7, name: "Мужские очки 1", price: 2500, image: glases1 },
    { id: 8, name: "Мужские очки 2", price: 2800, image: glases2 },
    { id: 9, name: "Мужские очки 3", price: 3200, image: glases3 },
    { id: 10, name: "Мужские очки 4", price: 2900, image: glases4 },
    { id: 11, name: "Мужские очки 5", price: 2700, image: glases5 },
    { id: 12, name: "Мужские очки 6", price: 3100, image: glases6 }
  ],
  jackets: [
    { id: 13, name: "Кожаная куртка 1", price: 12500, image: jacket1 },
    { id: 14, name: "Кожаная куртка 2", price: 14200, image: jacket2 },
    { id: 15, name: "Кожаная куртка 3", price: 13900, image: jacket3 },
    { id: 16, name: "Кожаная куртка 4", price: 14500, image: jacket4 },
    { id: 17, name: "Кожаная куртка 5", price: 13800, image: jacket5 },
    { id: 18, name: "Кожаная куртка 6", price: 14100, image: jacket6 }
  ],
  pants: [
    { id: 19, name: "Кожаные брюки 1", price: 8500, image: pants1 },
    { id: 20, name: "Кожаные брюки 2", price: 9200, image: pants2 },
    { id: 21, name: "Кожаные брюки 3", price: 8900, image: pants3 },
    { id: 22, name: "Кожаные брюки 4", price: 9500, image: pants4 },
    { id: 23, name: "Кожаные брюки 5", price: 8800, image: pants5 },
    { id: 24, name: "Кожаные брюки 6", price: 9100, image: pants6 }
  ]
};

export const Catalog_men = () => {
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
        <p className="catalog_men-name"> Мужчинам</p>
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
        <p className="catalog_men-name"> Мужчинам</p>
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
        <p className="catalog_men-name"> Мужчинам</p>
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
        <p className="catalog_men-name"> Мужчинам</p>
        <p className="fraction">/</p>
        <p className="catalog_men-name"> Брюки</p>
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
// import "./catalog_men.css";
// import bag1 from "../catalog_men/img/catalog_men-bag1.jpg";
// import bag2 from "../catalog_men/img/catalog_men-bag2.jpg";
// import bag3 from "../catalog_men/img/catalog_men-bag3.jpg";
// import bag4 from "../catalog_men/img/catalog_men-bag4.jpg";
// import bag5 from "../catalog_men/img/catalog_men-bag5.jpg";
// import glases1 from "../catalog_men/img/catalog_men-glases1.jpg";
// import glases2 from "../catalog_men/img/catalog_men-glases2.jpg";
// import glases3 from "../catalog_men/img/catalog_men-glases3.jpg";
// import glases4 from "../catalog_men/img/catalog_men-glases4.jpg";
// import glases5 from "../catalog_men/img/catalog_men-glases5.jpg";
// import glases6 from "../catalog_men/img/catalog_men-glases6.jpg";
// // Добавляем импорты для новых изображений (замените на реальные пути)
// import jacket1 from "../catalog_men/img/catalog_men-bag5.jpg";
// import jacket2 from "../catalog_men/img/catalog_men-bag5.jpg";
// import jacket3 from "../catalog_men/img/catalog_men-bag5.jpg";
// import pants1 from "../catalog_men/img/catalog_men-bag5.jpg";
// import pants2 from "../catalog_men/img/catalog_men-bag5.jpg";
// import pants3 from "../catalog_men/img/catalog_men-bag5.jpg";

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
//     { id: 1, name: "Мужская сумка 1", price: 3500, image: bag1 },
//     { id: 2, name: "Мужская сумка 2", price: 4200, image: bag2 },
//     { id: 3, name: "Мужская сумка 3", price: 3900, image: bag3 },
//     { id: 4, name: "Мужская сумка 4", price: 4500, image: bag4 },
//     { id: 5, name: "Мужская сумка 5", price: 3800, image: bag5 },
//     { id: 6, name: "Мужская сумка 6", price: 4100, image: bag1 }
//   ],
//   glasses: [
//     { id: 7, name: "Мужские очки 1", price: 2500, image: glases1 },
//     { id: 8, name: "Мужские очки 2", price: 2800, image: glases2 },
//     { id: 9, name: "Мужские очки 3", price: 3200, image: glases3 },
//     { id: 10, name: "Мужские очки 4", price: 2900, image: glases4 },
//     { id: 11, name: "Мужские очки 5", price: 2700, image: glases5 },
//     { id: 12, name: "Мужские очки 6", price: 3100, image: glases6 }
//   ],
//   jackets: [
//     { id: 13, name: "Кожаная куртка 1", price: 12500, image: jacket1 },
//     { id: 14, name: "Кожаная куртка 2", price: 14200, image: jacket2 },
//     { id: 15, name: "Кожаная куртка 3", price: 13900, image: jacket3 },
//     { id: 16, name: "Кожаная куртка 4", price: 14500, image: jacket1 },
//     { id: 17, name: "Кожаная куртка 5", price: 13800, image: jacket2 },
//     { id: 18, name: "Кожаная куртка 6", price: 14100, image: jacket3 }
//   ],
//   pants: [
//     { id: 19, name: "Кожаные брюки 1", price: 8500, image: pants1 },
//     { id: 20, name: "Кожаные брюки 2", price: 9200, image: pants2 },
//     { id: 21, name: "Кожаные брюки 3", price: 8900, image: pants3 },
//     { id: 22, name: "Кожаные брюки 4", price: 9500, image: pants1 },
//     { id: 23, name: "Кожаные брюки 5", price: 8800, image: pants2 },
//     { id: 24, name: "Кожаные брюки 6", price: 9100, image: pants3 }
//   ]
// };

// export const Catalog_men = () => {
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
//         <p className="catalog_men-name"> Мужчинам</p>
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
//         <p className="catalog_men-name"> Мужчинам</p>
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

//       {/* Куртки (новая категория) */}
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Мужчинам</p>
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

//       {/* Брюки (новая категория) */}
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Мужчинам</p>
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
// import "./catalog_men.css";
// import bag1 from "../catalog_men/img/catalog_men-bag1.jpg";
// import bag2 from "../catalog_men/img/catalog_men-bag2.jpg";
// import bag3 from "../catalog_men/img/catalog_men-bag3.jpg";
// import bag4 from "../catalog_men/img/catalog_men-bag4.jpg";
// import bag5 from "../catalog_men/img/catalog_men-bag5.jpg";
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

// // Данные товаров
// const products = {
//   bags: [
//     { id: 1, name: "Мужская сумка 1", price: 3500, image: bag1 },
//     { id: 2, name: "Мужская сумка 2", price: 4200, image: bag2 },
//     { id: 3, name: "Мужская сумка 3", price: 3900, image: bag3 },
//     { id: 4, name: "Мужская сумка 4", price: 4500, image: bag4 },
//     { id: 5, name: "Мужская сумка 5", price: 3800, image: bag5 },
//     { id: 6, name: "Мужская сумка 6", price: 4100, image: bag1 }
//   ],
//   glasses: [
//     { id: 7, name: "Мужские очки 1", price: 2500, image: glases1 },
//     { id: 8, name: "Мужские очки 2", price: 2800, image: glases2 },
//     { id: 9, name: "Мужские очки 3", price: 3200, image: glases3 },
//     { id: 10, name: "Мужские очки 4", price: 2900, image: glases4 },
//     { id: 11, name: "Мужские очки 5", price: 2700, image: glases5 },
//     { id: 12, name: "Мужские очки 6", price: 3100, image: glases6 }
//   ]
// };

// export const Catalog_men = () => {


// const [notification, setNotification] = useState("");

//   // Функция добавления в корзину
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
//       {/* Всплывающее уведомление */}
//       {notification && (
//         <Notification message={notification} onClose={() => setNotification("")} />
//       )}

//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Мужчинам</p>
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
      
//       <div className="catalog_men_name__wrapper">
//         <p className="catalog_men-name"> Мужчинам</p>
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
//             <p>Сумка №1</p>
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






















































































