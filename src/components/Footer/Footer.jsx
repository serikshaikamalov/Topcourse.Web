import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="footer">
          <div className="footer__callme">
            <div className="footer__title">Хабарласыңыз</div>
            <div>+7(777)200-1991</div>
          </div>
          <div className="footer__writeme">
            <div className="footer__title">Бізге жазыңыз</div>
            <div>
              <div className="foooter_link"><a href="mailto:info@frontends.kz">info@frontends.kz</a></div>
              <div className="foooter_link"><a href="mailto:admin@frontends.kz">admin@frontends.kz</a></div>
            </div>
          </div>
          <div className="footer__adress">
            <div className="footer__title">Біздің мекен-жай</div>
            <div>Мамыр-1 көшесі, БЦ Quarum, Алматы қаласы, Қазақстан</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
