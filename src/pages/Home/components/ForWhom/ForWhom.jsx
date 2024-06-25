import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import "./forwhom.scss";

export const ForWhom = () => {
  const navigate = useNavigate();

  const go = () => {
    navigate("/roadmap");
  };

  return (
    <section className="forwhom">
      <div className="container mx-auto">
        <SectionTitle>Курс кімдер үшін?</SectionTitle>
        <div className="forwhom__img">
          <img src="./for-whom.svg" alt="Курс авторы" />
        </div>

        <div className="forwhom__content">
          <div className="forwhom__item">
            <div className="forwhom-wrapper__title">
              Жаңа мамандықты меңгергіңіз келсе
            </div>
            <div className="forwhom-wrapper__desc">
              <p>
                Программист деп атану үшін белгілі IT университетін бітіру шарт
                емес! Әлемнің алпауыт компанияларына қарашы Google, Facebook,
                Youtube сол сиақты ол жерде көбісінің IT университет бітірді
                деген қағазы жок. Ол деген нені көрсететі кез келген адам
                мамандықты меңгеремін десе үйренеді, ал біздің басты миссия ол
                жол көрсету/үйрету бастысы маман жасау. Егерде сіз университетті
                бітірген студент болсаңыз немесе мамандығыңызды ауыстырғыңыз
                келсе біздің мектепке қосылуға шақырамыз! Hello, World!
              </p>
            </div>
          </div>
          <div className="forwhom__item">
            <div className="forwhom-wrapper__title">
              Сайт жасап үйренгісі келетіндерге
            </div>
            <div className="forwhom-wrapper__desc">
              <p>
                Кез келген сайтты жасау үшін оның құрастыру блоктарын білу
                қажет. Олар HTML, CSS, JavaScript. Осы инструменттермен біз
                сізді "жақын" таңыстырып қана коймай көп практика болады.
                Нәтижесінде сайт жасап үйренесіз.
              </p>
            </div>
          </div>
          <div className="forwhom__item">
            <div className="forwhom-wrapper__title">
              Фронтенді үйреніп жатырмын
            </div>
            <div className="forwhom-wrapper__desc">
              <p>
                Frontend-ті өзім оқып жатырмын бірақ бойымда сенімсіздік бар.
                Көп сұраққа жауап таба алмай жатырмын. Йа, мамандықты өзің
                меңгеріп алу қиың әрі ұзақ уақытты талап етеді. Бұл сұраққа
                жалғыз жауап бар ол Ментормен бірге дайындалу. Біз әр студентпен
                жұмыс жасаймыз және нәтижесінде Roadmap яғни{" "}
                <a className="app-link color-red" onClick={go}>Даму картасын</a> жасап береміз. Сол
                арқылы студент өзінің прогресін көріп қана қоймай, кез келген
                сұраққа жауап алады.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
