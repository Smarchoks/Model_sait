import { BrowserRouter, Routes, Route } from "react-router"; // Обратите внимание: "react-router-dom", а не "react-router"
import { Layout } from "../layout/layout";
import { Collection } from "../collection/collection";
import { Vizit } from "../vizit/vizit";
import { DropColl } from "../dropping-collection/dropping-collection";

import "./fonts.scss";
import "./normalize.css";
import "./variables.scss";
import { HomePage } from "../../pages/home-page";
import { ContainerPage } from "../container-pages/container-page";
import { CollectionPage } from "../../pages/collection-page";
import { MenPage } from "../../pages/men-page";
import { About_us__page } from "../../pages/about_us-page";
import { WomanPage } from "../../pages/woman-page";
import { ProductPage } from "../../pages/product-page";
import { BasketPage } from "../../pages/basket-page";

export const App = () => {
  return (
    <ContainerPage>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} errorElement={<div>Что-то не так...</div>}>
            <Route index element={<HomePage />} />
            <Route path="/collection-page" element={<CollectionPage />} />
            <Route path="/men-page" element={<MenPage />} />
            <Route path="/about_us-page" element={<About_us__page />} />
            <Route path="/woman-page" element={<WomanPage />} />
            <Route path="/product-page" element={<ProductPage />} />
            <Route path="/basket-page" element={<BasketPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContainerPage>
  );
};








































// import { BrowserRouter, Routes, Route } from "react-router";
// import { Layout } from "../layout/layout";
// import { Collection } from "../collection/collection";
// import { Vizit } from "../vizit/vizit";
// import { DropColl } from "../dropping-collection/dropping-collection";

// import "./fonts.scss";
// import "./normalize.css";
// import "./variables.scss";
// import { HomePage } from "../../pages/home-page";
// import { ContainerPage } from "../container-pages/container-page";
// import { CollectionPage } from "../../pages/collection-page";
// import { MenPage } from "../../pages/men-page";
// import { About_us__page } from "../../pages/about_us-page";
// import { WomanPage } from "../../pages/woman-page";
// import { ProductPage } from "../../pages/product-page";
// import { BasketPage } from "../../pages/basket-page";




// export const App = () => {
//   return (
//     <ContainerPage>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             element={<Layout />}
//             errorElement={<div>Что-то не так...</div>}
//           >
//             <Route index element={<HomePage />} />
//             <Route Route path="/collection-page" element={<CollectionPage />} />
//             <Route Route path="/men-page" element={<MenPage />} />
//             <Route Route path="/about_us-page" element={<About_us__page />} />
//             <Route Route path="/woman-page" element={<WomanPage />} />
//             <Route Route path="/product-page" element={<ProductPage />} />
//             <Route Route path="/basket-page" element={<BasketPage />} />
            
            
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </ContainerPage>
//   );
// };
