import { startDay } from "App";
import React from "react";
import { BlueButton } from "../../../../components/Button/BlueButton";
import Card from "../../../../components/Card/Card";
import messages from "../../../../messages/message";
import "./CoursePrice.scss";

const CoursePrice = ({ openModal }) => {
  const courseAdvantages = [
    "Курс онлайн форматта болады. Cұраққа жауап алу мүмкіндігі",
    "+100 аса видео форматтағы сабақтар",
    "24/7 ментормен байланыс",
    "Курстың ұзақтығы 4 ай",
    "Бонус сабақтар: Собеседованияда қойылатын 20 сұраққа жауап",
    "Программирования бойынша пайдалы кітап/курстар",
    "Орын саны шектеулі.",
  ];

  return (
    <section className="course-price">
      <div className="container mx-auto">
        <Card>
          <div className="p-48">
            <div className="course-price__header">
              <div className="course-price__title">Курстың бағасы</div>
              <ul className="course-price__start-date list-none">
                <li>
                  Курс басталуы: <strong>{startDay}</strong>
                </li>
                {/* <li>
                Бос орын саны: <strong>11 орын(20 орыннан)</strong>
              </li> */}
                <li>
                  Курсқа тек <strong>10 адам</strong> алынады
                </li>
              </ul>
            </div>
            <ul className="course-price__menu">
              {courseAdvantages.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ul>
            <div className="course-price__prices">
              <div className="course-price-group">
                <span className="course-price__price course-price__new">
                  <span>300 000₸</span>
                </span>
                <span className="course-price__price course-price__old">
                  <span>550 000₸</span>
                </span>
              </div>
              <span className="per-month">
                IT Маман болу үшін айына 75 000₸
              </span>
            </div>
            <div className="discount-period">
              <span style={{ color: "red" }}>*</span> Жеңілдік тек алғашқы 10
              орынға ғана беріледі!
            </div>
            <div className="text-center">
              <a href="//wa.me/77772001991" target="_blank" rel="noreferrer">
                <BlueButton>
                  {messages.free_consultation}
                </BlueButton>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CoursePrice;
