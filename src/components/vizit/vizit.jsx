import { useState } from "react";
import "./vizit.css";
import vizit from "./img/vizit.jpg";
import vizit01 from "./img/vizit01.jpg";
// импорт для QR кода 
import qrCode from "./img/QR-Code.png"; 

export const Vizit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="vizit">
        <div className="vizit__wrapper">
          <img 
            className="vizit__img" 
            src={vizit01} 
            srcSet={`${vizit01} 1x, ${vizit} 2x`}
            alt="Winter Essentials collection"
            loading="lazy"
          />
          <div className="vizit__text-block">
            <p className="vizit__text-name">IN EVIDENZA</p>
            <h2 className="vizit__text-title">2025 must-have</h2>
            <p className="vizit__text-inf">
              От готовой одежды до обуви и культовых сумок Encre — Анонс летней презентаации моказа мод.
            </p>
            <button className="vizit__button" onClick={openModal}>
              УЗНАТЬ БОЛЬШЕ
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="modal-title">Скоро: Презентация коллекции 2025</h2>
            <p className="modal-text">
              Приглашаем вас на эксклюзивный показ новой коллекции Encre Noire, который состоится 15 августа 2025 года.
            </p>
            <p className="modal-text">
              Отсканируйте QR-код для добавления события в календарь и получения подробной информации.
            </p>
            <img src={qrCode} alt="QR код" className="modal-qr" />
            <p className="modal-small-text">
              *Для посещения мероприятия требуется чек от покупок наших товаров
            </p>
          </div>
        </div>
      )}
    </>
  );
};


// import "./vizit.css";
// import vizit from "./img/vizit.jpg";
// import vizit01 from "./img/vizit01.jpg";
// export const Vizit = () => {
//   return (


//     <div className="vizit">
//       <div className="vizit__wrapper">
//         <img 
//           className="vizit__img" 
//           src={vizit01} 
//           srcSet={`${vizit01} 1x, ${vizit} 2x`}
//           alt="Winter Essentials collection"
//           loading="lazy"
//         />
//         <div className="vizit__text-block">
//           <p className="vizit__text-name">IN EVIDENZA</p>
//           <h2 className="vizit__text-title">2025 must-have</h2>
//           <p className="vizit__text-inf">
//             От готовой одежды до обуви и культовых сумок Encre — в подборке представлены самые актуальные предметы сезона.
//           </p>
//           <button className="vizit__button">СМОТРЕТЬ КОЛЛЕКЦИЮ</button>
//         </div>
//       </div>
//     </div>
//   );
// };
