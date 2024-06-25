import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import "./author.scss";

const Author = () => {
  return (
    <section className="author">
      <div className="container mx-auto">
        <SectionTitle>Курс авторы</SectionTitle>
        <div className="author__inner">
          <div className="author__left">
            <div className="author__text">
              <div className="author__intro">
                Мен атым <span className="author__name">Серік Шайкамалов</span>{" "}
                және мен жайлы қысқаша фактілер:
              </div>
              <div className="author__advantages">
                <div>1. Сайт жасауда 8 жылдан аса тәжірибе бар</div>
                <div>2. Қайда оқыдым: IITU, KBTU түлегі</div>
                <div>
                  3. Қайда жұмыс жасадым: Freelance, стартап және IT
                  компанияларда жұмыс атқарып келдім
                </div>
                <div>
                  4. Senior Frontend разработчик болып Американдық компанияда
                  жұмыс атқарамын
                </div>
                <div>
                  5. Менің жұмыстарым:{" "}
                  <a href="https://bilimland.kz/">BilimLand.kz</a>,{" "}
                  <a href="https://kitap.kz">Kitap.kz</a>,{" "}
                  <a href="https://ntwallet.ae/">NT.Wallet</a>,{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.serik.namazapp">
                    Намаз оқып үйренейік
                  </a>
                  ,{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.gosmart.ramazan">
                    MyOraza
                  </a>
                  ,{" "}
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="author__right">
            <div className="author__photo">
              <img
                src="./ava2.jpeg"
                alt="Serik Shaikamalov, Senior Frontend Developer"
              />
              <div>
                <a href="https://www.linkedin.com/in/serik-shaikamalov/">
                  LinkedIn
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/serik.shaikamalov/">
                  <i className="fa fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
