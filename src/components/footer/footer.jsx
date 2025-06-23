import "./footer.css";
import inst from "../../components/footer/img/inst_icon.png";
import youtube from "../../components/footer/img/you_icon.png";
import facebook from "../../components/footer/img/faceboock_icon.png";
import wk from "../../components/footer/img/wk.png";
import odn from "../../components/footer/img/odn.png";
import tele from "../../components/footer/img/tele.png";

export const Footer = () => {
  return (
  <div className="footer">
    <div className="footer__wrapper">
      <div className="footer__col">
        <h3 className="footer__heading">Encre Noire</h3>
        <p className="footer__text">Мы - современный интернет-магазин с люксовым ассортиментом товаров. Работаем с 2021 года.</p>
        <p className="footer__text">© 2025 Все права защищены</p>
      </div>
      
      <div className="footer__col">
        <h3 className="footer__heading">Контакты</h3>
        <p className="footer__text">Email: info@noire.com</p>
        <p className="footer__text">Телефон: +7 (123) 456-78-90</p>
        <p className="footer__text">Адрес: г. Санкт Петербург, ул. Примерная, 123</p>
      </div>
      
      <div className="footer__col">
        <h3 className="footer__heading">Мы в соцсетях</h3>
        <div className="footer__social">
          <a className="footer__social-link" href="#" aria-label="Instagram">
            <img src={wk} alt="Instagram" width="30"/>
          </a>
          <a className="footer__social-link" href="#" aria-label="Facebook">
            <img src={odn} alt="Facebook" width="30"/>
          </a>
          <a className="footer__social-link" href="#" aria-label="YouTube">
            <img src={tele} alt="YouTube" width="30"/>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};










    // <div class="footer">
    //   <div class="footer__wrapper">
    //     <div class="footer__wrapper-contact">
    //       <p class="footer__headling">SERVIZIO CLIENTI</p>
    //        <a class="footer__text" href="Женщинам">
    //           contacti
    //         </a>
    //       {/* <p class="footer__text">Contattaci</p> */}
    //       <p class="footer__text"> FAQ</p>
    //       <p class="footer__text">Imballaggio </p>
    //       <p>Modulo di reso</p>
    //     </div>
    //     <div class="footer__wrapper-privacy">
    //       <p class="footer__headling">Area Legale </p>
    //       <p class="footer__text">Note legali</p>
    //       <p class="footer__text">Privacy</p>
    //       <p class="footer__text"> Cookie</p>
    //     </div>
    //     <div class="footer__wrapper-links">
    //       <p class="footer__headling">Links</p>
    //       <div class="footer__block-btn">
    //         <a class="footer__btn" href="">
    //           <img width="30" src="./icon/video.png" />
    //         </a>
    //         <a class="footer__btn" href="">
    //           <img width="30" src="./icon/twitter.png" />
    //         </a>
    //         <a class="footer__btn" href="">
    //           <img width="30" src="./icon/facebook.png" />
    //         </a>
    //         <a class="footer__btn" href="">
    //           <img width="30" src="./icon/youtube.png" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
 

