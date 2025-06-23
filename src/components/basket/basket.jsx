import { useState, useEffect } from "react";
import "./basket.css"; 

export const Basket = () => {
  


 // Состояния для корзины и формы
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Загрузка корзины при открытии страницы
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Обновление количества товара
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Удаление товара
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Обработка формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Отправка формы
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Здесь могла бы быть отправка на сервер
    console.log("Отправленные данные:", {
      ...formData,
      items: cartItems,
      total: totalPrice
    });
    
    // Очищаем корзину
    localStorage.removeItem("cart");
    setIsSubmitted(true);
    
    // Через 3 секунды переходим на главную
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  // Подсчет общей суммы
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  // Если форма отправлена - показываем сообщение
  if (isSubmitted) {
    return (
      <div className="success-message">
        <h2>Спасибо за заказ!</h2>
        <p>Ваша заявка успешно отправлена.</p>
        <p>Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Ваша корзина</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Корзина пуста</p>
          <a href="/" className="continue-btn">Вернуться к покупкам</a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} width="80" />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Цена: {item.price} ₽</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2>Итого: {totalPrice} ₽</h2>
            
            <div className="order-notice">
              <p>Товар можно будет купить после заполнения формы, когда с вами свяжется наш сотрудник для подтверждения заказа.Каждый товар уникалн и создается вручную под каждого клиента.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="order-form">
              <div className="form-group">
                <label>Ваше имя*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Телефон*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Комментарий к заказу</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Оформить заказ
              </button>
            </form>
          </div>
        </>
      )}
    </div>













































//  // Состояния для корзины и формы
//   const [cartItems, setCartItems] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     comment: ""
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Загрузка корзины при открытии страницы
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(savedCart);
//   }, []);

//   // Обновление количества товара
//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;
    
//     const updatedCart = cartItems.map(item => 
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
    
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Удаление товара
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Обработка формы
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Отправка формы
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Здесь могла бы быть отправка на сервер
//     console.log("Отправленные данные:", {
//       ...formData,
//       items: cartItems,
//       total: totalPrice
//     });
    
//     // Очищаем корзину
//     localStorage.removeItem("cart");
//     setIsSubmitted(true);
    
//     // Через 3 секунды переходим на главную
//     setTimeout(() => {
//       window.location.href = "/";
//     }, 3000);
//   };

//   // Подсчет общей суммы
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + (item.price * item.quantity),
//     0
//   );

//   // Если форма отправлена - показываем сообщение
//   if (isSubmitted) {
//     return (
//       <div className="success-message">
//         <h2>Спасибо за заказ!</h2>
//         <p>Ваша заявка успешно отправлена.</p>
//         <p>Мы свяжемся с вами в ближайшее время.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-page">
//       <h1>Ваша корзина</h1>
      
//       {cartItems.length === 0 ? (
//         <div className="empty-cart">
//           <p>Корзина пуста</p>
//           <a href="/" className="continue-btn">Вернуться к покупкам</a>
//         </div>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cartItems.map(item => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} width="80" />
//                 <div className="item-info">
//                   <h3>{item.name}</h3>
//                   <p>Цена: {item.price} ₽</p>
//                   <div className="quantity-control">
//                     <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={() => removeItem(item.id)}
//                   className="remove-btn"
//                 >
//                   Удалить
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="order-summary">
//             <h2>Итого: {totalPrice} ₽</h2>
            
//             <form onSubmit={handleSubmit} className="order-form">
//               <div className="form-group">
//                 <label>Ваше имя*</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label>Email*</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label>Комментарий к заказу</label>
//                 <textarea
//                   name="comment"
//                   value={formData.comment}
//                   onChange={handleInputChange}
//                   rows="3"
//                 />
//               </div>
              
//               <button type="submit" className="submit-btn">
//                 Оформить заказ
//               </button>
//             </form>
//           </div>
//         </>
//       )}
//     </div>





  );
};