import "../dropping-collection/dropping-collection.css";
import { lazy, Suspense } from 'react';

// Ленивая загрузка изображений
const LazyImage = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"  // Ленивая загрузка
      decoding="async" // Асинхронный декодинг
    />
  );
};

export const DropColl = () => {
  const models = [
    { id: 1, name: "Анна", surname: "Смирнова", look: "Деконструированный блейзер", image: "/img/model1.webp" },
    { id: 2, name: "Екатерина", surname: "Волкова", look: "Вощёное пальто", image: "/img/model2.webp" },
    { id: 3, name: "Кирилл", surname: "Петров", look: "Шёлковая рубашка", image: "/img/model3.webp" },
    { id: 4, name: "Максим", surname: "Кузнецов", look: "Кожаные брюки", image: "/img/model4.webp" },
    { id: 5, name: "Алексей", surname: "Попов", look: "Деним с эффектом поношенности", image: "/img/model5.webp" },
    { id: 6, name: "Андрей", surname: "Васильев", look: "Льняная рубашка-оверсайз", image: "/img/model6.webp" },
    { id: 7, name: "Павел", surname: "Смирнов", look: "Авангардный костюм", image: "/img/model7.webp" },
    { id: 8, name: "Наталья", surname: "Морозова", look: "Шерстяное пальто", image: "/img/model8.webp" },
    { id: 9, name: "Анастасия", surname: "Мельникова", look: "Асимметричный жилет", image: "/img/model9.webp" },
    { id: 10, name: "Ольга", surname: "Белова", look: "Тренч с рваными краями", image: "/img/model10.webp" },
  ];

  return (
    <>
      <div className="collection__title">
        <p>ARTISANAL</p>
        <p>Коллекция 2025</p>
      </div>
      <div className="collection__video">
        <iframe
          width="60%"
          height="500"
          src="https://www.youtube.com/embed/85I0MZsRRSQ"
          title="Видеопрезентация коллекции"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="collection__description">
        <div className="collection__description-text">
          В совместной коллекции Весна-Лето 2025 Encre Noire исследуется
          поиск индивидуальной истины. Размышления, помещённые в межпоколенческий
          контекст, раскрывают тему унаследованного гардероба.
        </div>
        <div className="collection__description-text">
          Оживляя память эпохи через радикальный взгляд нового поколения,
          одежда будто передаётся из рук в руки — её ДНК трансформируется
          и эволюционирует.
        </div>
      </div>
      <div className="fashion__card_wrapper">
        {models.map((model) => (
          <div className="fashion__card" key={model.id}>
            <Suspense fallback={<div className="image-placeholder" />}>
              <LazyImage
                src={model.image}
                alt={`${model.name} ${model.surname} - ${model.look}`}
                width={470}
                height={600}
                className="fashion__image"
              />
            </Suspense>
            <div className="model-info">
              <h3 className="model-name">{model.name} {model.surname}</h3>
              <p className="model-look">{model.look}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};



// import "../dropping-collection/dropping-collection.css";
// import model1 from "../../components/dropping-collection/img/model1.jpg";
// import model2 from "../../components/dropping-collection/img/model2.jpg";
// import model3 from "../../components/dropping-collection/img/model3.jpg";
// import model4 from "../../components/dropping-collection/img/model4.jpg";
// import model5 from "../../components/dropping-collection/img/model5.jpg";
// import model6 from "../../components/dropping-collection/img/model6.jpg";
// import model7 from "../../components/dropping-collection/img/model7.jpg";
// import model8 from "../../components/dropping-collection/img/model8.jpg";
// import model9 from "../../components/dropping-collection/img/model9.jpg";
// import model10 from "../../components/dropping-collection/img/model10.jpg";

// export const DropColl = () => {
//   const models = [
//     { id: 1, name: "Анна", surname: "Смирнова", look: "Деконструированный блейзер", image: model1 },
//     { id: 2, name: "Екатерина ", surname: "Волкова", look: "Вощёное пальто", image: model2 },
//     { id: 3, name: "Кирилл", surname: "Петров", look: "Шёлковая рубашка", image: model3 },
//     { id: 4, name: "Максим", surname: "Кузнецов", look: "Кожаные брюки", image: model4 },
//     { id: 5, name: "Алексей", surname: "Попов", look: "Деним с эффектом поношенности", image: model5 },
//     { id: 6, name: "Андрей", surname: "Васильев", look: "Льняная рубашка-оверсайз", image: model6 },
//     { id: 7, name: "Павел", surname: "Смирнов", look: "Авангардный костюм", image: model7 },
//     { id: 8, name: "Наталья", surname: "Морозова", look: "Шерстяное пальто", image: model8 },
//     { id: 9, name: "Анастасия", surname: " Мельникова", look: "Асимметричный жилет", image: model9 },
//     { id: 10, name: "Ольга", surname: "Белова", look: "Тренч с рваными краями", image: model10 },
//   ];

//   return (
//     <>
//       <div class="collection__title">
//         <p>ARTISANAL</p>
//         <p>Коллекция 2025</p>
//       </div>
//       <div class="collection__video">
//         <iframe
//           width="60%"
//           height="500"
//           src="https://www.youtube.com/embed/85I0MZsRRSQ"
//           title="Видеопрезентация коллекции"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//       <div class="collection__description">
//         <div class="collection__description-text">
//           В совместной коллекции Весна-Лето 2025 Encre Noire исследуется
//           поиск индивидуальной истины. Размышления, помещённые в межпоколенческий
//           контекст, раскрывают тему унаследованного гардероба.
//         </div>
//         <div class="collection__description-text">
//           Оживляя память эпохи через радикальный взгляд нового поколения,
//           одежда будто передаётся из рук в руки — её ДНК трансформируется
//           и эволюционирует.
//         </div>
//       </div>
//       <div class="fashion__card_wrapper">
//         {models.map((model) => (
//           <div class="fashion__card" key={model.id}>
//             <img
//               class="fashion__image"
//               width="470"
//               height="600"
//               src={model.image}
//               alt={`${model.name} ${model.surname} - ${model.look}`}
//             />
//             <div class="model-info">
//               <h3 class="model-name">{model.name} {model.surname}</h3>
//               <p class="model-look">{model.look}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };


// import "../dropping-collection/dropping-collection.css";
// import men1 from "../../components/dropping-collection/img/model1.jpg";
// import men2 from "../../components/dropping-collection/img/model2.jpg";
// import men3 from "../../components/dropping-collection/img/model3.jpg";
// import men4 from "../../components/dropping-collection/img/model4.jpg";
// import men5 from "../../components/dropping-collection/img/model5.jpg";
// import men6 from "../../components/dropping-collection/img/model6.jpg";
// import men7 from "../../components/dropping-collection/img/model7.jpg";
// import men8 from "../../components/dropping-collection/img/model8.jpg";
// import men9 from "../../components/dropping-collection/img/model9.jpg";
// import men10 from "../../components/dropping-collection/img/mode10.jpg";

// export const DropColl = () => {
//   const models = [
//     { id: 1, name: "Артём", surname: "Соколов", look: "Деконструированный блейзер" },
//     { id: 2, name: "Дмитрий", surname: "Иванов", look: "Вощёное пальто" },
//     { id: 3, name: "Кирилл", surname: "Петров", look: "Шёлковая рубашка" },
//     { id: 4, name: "Максим", surname: "Кузнецов", look: "Кожаные брюки" },
//     { id: 5, name: "Алексей", surname: "Попов", look: "Деним с эффектом поношенности" },
//     { id: 6, name: "Андрей", surname: "Васильев", look: "Льняная рубашка-оверсайз" },
//     { id: 7, name: "Павел", surname: "Смирнов", look: "Авангардный костюм" },
//     { id: 8, name: "Никита", surname: "Фёдоров", look: "Шерстяное пальто" },
//     { id: 9, name: "Сергей", surname: "Николаев", look: "Асимметричный жилет" },
//     { id: 10, name: "Иван", surname: "Орлов", look: "Тренч с рваными краями" },
//   ];

//   return (
//     <>
//       <div class="collection__title">
//         <p>ARTISANAL</p>
//         <p>Коллекция 2025</p>
//       </div>
//       <div class="collection__video">
//         <iframe
//           width="60%"
//           height="500"
//           src="https://www.youtube.com/embed/85I0MZsRRSQ"
//           title="Видеопрезентация коллекции"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//       <div class="collection__description">
//         <div class="collection__description-text">
//           В совместной коллекции Весна-Лето 2024 Maison Margiela исследуется
//           поиск индивидуальной истины. Размышления, помещённые в межпоколенческий
//           контекст, раскрывают тему унаследованного гардероба.
//         </div>
//         <div class="collection__description-text">
//           Оживляя память эпохи через радикальный взгляд нового поколения,
//           одежда будто передаётся из рук в руки — её ДНК трансформируется
//           и эволюционирует.
//         </div>
//       </div>
//       <div class="fashion__card_wrapper">
//         {models.map((model) => (
//           <div class="fashion__card" key={model.id}>
//             <img
//               class="fashion__image"
//               width="470"
//               height="600"
//               srcSet={model.id % 4 === 0 ? men4 : model.id % 3 === 0 ? men3 : model.id % 2 === 0 ? men2 : men1}
//               alt={`${model.name} ${model.surname}`}
//             />
//             <div class="model-info">
//               <h3 class="model-name">{model.name} {model.surname}</h3>
//               <p class="model-look">{model.look}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };



// import "../dropping-collection/dropping-collection.css";
// import men1 from "../../components/dropping-collection/img/men1.jpg";
// import men2 from "../../components/dropping-collection/img/men2.jpg";
// import men3 from "../../components/dropping-collection/img/men3.jpg";
// import men4 from "../../components/dropping-collection/img/men4.jpg";

// export const DropColl = () => {
//   const models = [
//     { id: 1, name: "Lucas", surname: "Moretti", look: "Deconstructed Blazer" },
//     { id: 2, name: "Jakob", surname: "Van Dijk", look: "Waxed Canvas Coat" },
//     { id: 3, name: "Mateo", surname: "Ivanov", look: "Memory Silk Shirt" },
//     { id: 4, name: "Elias", surname: "Chen", look: "Patina Leather Pants" },
//     { id: 5, name: "Rafael", surname: "Santos", look: "Distorted Denim" },
//     { id: 6, name: "Nikolai", surname: "Petrov", look: "Linen Overshirt" },
//     { id: 7, name: "Daniel", surname: "Kwon", look: "Fragmented Tailoring" },
//     { id: 8, name: "Sebastian", surname: "Lacroix", look: "Washed Wool Coat" },
//     { id: 9, name: "Oliver", surname: "Yamamoto", look: "Asymmetrical Vest" },
//     { id: 10, name: "Victor", surname: "Besson", look: "Raw Edge Trench" }, // Новая карточка
//   ];

//   return (
//     <>
//       <div class="collection__title">
//         <p>ARTISANAL</p>
//         <p>Коллекция 2025</p>
//       </div>
//       <div class="collection__video">
//         <iframe
//           width="60%"
//           height="500"
//           src="https://www.youtube.com/embed/85I0MZsRRSQ"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//       <div class="collection__description">
//         <div class="collection__description-text">
//           Для совместной коллекции Лето 2025 Maison Margiela разыгрывает
//           поиск индивидуальной истины. Помещая размышление в межпоколенческую
//           перспективу, бренд делает центральной темой унаследованный гардероб.
//         </div>
//         <div class="collection__description-text">
//           Оживляя память эпохи через радикальный взгляд следующего поколения,
//           одежда словно передаётся из рук в руки — её генетический код
//           изменяется и эволюционирует.
//         </div>
//       </div>
//       <div class="fashion__card_wrapper">
//         {models.map((model) => (
//           <div class="fashion__card" key={model.id}>
//             <img
//               class="fashion__image"
//               width="470"
//               height="600"
//               srcSet={model.id % 4 === 0 ? men4 : model.id % 3 === 0 ? men3 : model.id % 2 === 0 ? men2 : men1}
//               alt={`${model.name} ${model.surname}`}
//             />
//             <div class="model-info">
//               <h3 class="model-name">{model.name} {model.surname}</h3>
//               <p class="model-look">{model.look}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };







// import "../dropping-collection/dropping-collection.css";
// import men1 from "../../components/dropping-collection/img/men1.jpg";
// import men2 from "../../components/dropping-collection/img/men2.jpg";
// import men3 from "../../components/dropping-collection/img/men3.jpg";
// import men4 from "../../components/dropping-collection/img/men4.jpg";

// export const DropColl = () => {
//   const models = [
//     { id: 1, name: "Lucas", surname: "Moretti", look: "Deconstructed Blazer" },
//     { id: 2, name: "Jakob", surname: "Van Dijk", look: "Waxed Canvas Coat" },
//     { id: 3, name: "Mateo", surname: "Ivanov", look: "Memory Silk Shirt" },
//     { id: 4, name: "Elias", surname: "Chen", look: "Patina Leather Pants" },
//     { id: 5, name: "Rafael", surname: "Santos", look: "Distorted Denim" },
//     { id: 6, name: "Nikolai", surname: "Petrov", look: "Linen Overshirt" },
//     { id: 7, name: "Daniel", surname: "Kwon", look: "Fragmented Tailoring" },
//     { id: 8, name: "Sebastian", surname: "Lacroix", look: "Washed Wool Coat" },
//     { id: 9, name: "Oliver", surname: "Yamamoto", look: "Asymmetrical Vest" },
//   ];

//   return (
//     <>
//       <div class="collection__title">
//         <p>ARTISANAL</p>
//         <p>Коллекция 2025</p>
//       </div>
//       <div class="collection__video">
//         <iframe
//           width="60%"
//           height="500"
//           src="https://www.youtube.com/embed/85I0MZsRRSQ"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//       <div class="collection__description">
//         <div class="collection__description-text">
//           Для совместной коллекции Весна-Лето 2024 Maison Margiela разыгрывает
//           поиск индивидуальной истины. Помещая размышление в межпоколенческую
//           перспективу, бренд делает центральной темой унаследованный гардероб.
//         </div>
//         <div class="collection__description-text">
//           Оживляя память эпохи через радикальный взгляд следующего поколения,
//           одежда словно передаётся из рук в руки — её генетический код
//           изменяется и эволюционирует.
//         </div>
//       </div>
//       <div class="fashion__card_wrapper">
//         {models.map((model) => (
//           <div class="fashion__card" key={model.id}>
//             <img
//               class="fashion__image"
//               width="470"
//               height="600"
//               srcSet={model.id % 4 === 0 ? men4 : model.id % 3 === 0 ? men3 : model.id % 2 === 0 ? men2 : men1}
//               alt={`${model.name} ${model.surname}`}
//             />
//             <div class="model-info">
//               <h3 class="model-name">{model.name} {model.surname}</h3>
//               <p class="model-look">{model.look}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };











// import "../dropping-collection/dropping-collection.css";
// import men1 from "../../components/dropping-collection/img/men1.jpg";
// import men2 from "../../components/dropping-collection/img/men2.jpg";
// import men3 from "../../components/dropping-collection/img/men3.jpg";
// import men4 from "../../components/dropping-collection/img/men4.jpg";

// export const DropColl = () => {
//   return (
//     <>
//       <div class="collection__title">
//         <p>ARTISANAL</p>
//         <p>Коллекция 2025</p>
//       </div>
//       <div class="collection__video">
//         <iframe
//           width="60%"
//           height="500"
//           src="https://www.youtube.com/embed/85I0MZsRRSQ"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//       <div class="collection__description">
//         <div class="collection__description-text">
//           Для совместной коллекции Весна-Лето 2024 Maison Margiela разыгрывает
//           поиск индивидуальной истины. Помещая размышление в межпоколенческую
//           перспективу, бренд делает центральной темой унаследованный гардероб.
//         </div>
//         <div class="collection__description-text">
//           Оживляя память эпохи через радикальный взгляд следующего поколения,
//           одежда словно передаётся из рук в руки — её генетический код
//           изменяется и эволюционирует.
//         </div>
//       </div>
//       <div class="fashion__card_wrapper">
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//         <div class="fashion__card">
//           <img
//             class="fashion__image"
//             width="470"
//             height="600"
//             srcSet={men1}
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };
