import { startDay } from "App";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../components/Button/Button";
import CountDownTimer from "../../../../components/CountDownTimer/CountDownTimer";
import messages from "../../../../messages/message";
import "./course-block.scss";

const CourseAdvantages = styled.div`
  margin-bottom: 48px;
  display: grid;
  grid-auto-columns: 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 6px;
  grid-template-rows: auto auto;
  grid-template-columns: 0.5fr 0.5fr;
`;

const CourseAdvantageItem = styled.div`
  margin-bottom: 4px;
`;

const CourseBlock = ({ openModal }) => {
  let [text, setText] = useState("Frontend");

  useEffect(() => {
    const words = ["Frontend", "React"];
    let selectedWordIndex = 0;
    let position = words[selectedWordIndex].length - 1;
    // "reverse" | "forward";
    let cursorModeReversed = true;

    const timer = setInterval(() => {
      const focusedWord = words[selectedWordIndex];
      let updatedText = focusedWord.slice(0, position);

      // Обновялем текст
      setText(updatedText);

      // Позиция уменшается
      if (cursorModeReversed) {
        if (position > 0) {
          position--;
        } else {
          cursorModeReversed = !cursorModeReversed;

          selectedWordIndex =
            words.length - 1 > selectedWordIndex ? selectedWordIndex + 1 : 0;
          return;
        }
      } else {
        if (focusedWord.length > position) {
          position++;
        } else {
          cursorModeReversed = !cursorModeReversed;
          return;
        }
      }
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="course-block container mx-auto">
      <div className="left">
        <div className="course__name">
          Мамандық &#171;{text}
          <span className="cursor-blink">|</span> разработчик&#187;
        </div>
        <div className="course-block__start">Курс басталуы: {startDay}</div>
        <CourseAdvantages>
          <CourseAdvantageItem>
            Курста сайт жасауды үйренесіз(React)
          </CourseAdvantageItem>
          <CourseAdvantageItem>
            100+ аса видео форматта сабақтар
          </CourseAdvantageItem>
          <CourseAdvantageItem>
            8+ жылдық тәжірибесі бар ментор
          </CourseAdvantageItem>
          <CourseAdvantageItem>
            24/7 Ментормен тікелей байланыс
          </CourseAdvantageItem>

          <CourseAdvantageItem>Курс ұзақтығы: 4+ ай</CourseAdvantageItem>
          <CourseAdvantageItem>
            Курс қазақ және орыс тілінде
          </CourseAdvantageItem>
          <CourseAdvantageItem>
            Курс соңыда Сертификат табысталады
          </CourseAdvantageItem>
          <CourseAdvantageItem>
            <strong>Бонус</strong>: Резюмені дұрыс толтыру, Собеседованияда
            сұраққа жауап
          </CourseAdvantageItem>
        </CourseAdvantages>
        <div className="course-block__button-group">
          <a href="//wa.me/77772001991" target="_blank" rel="noreferrer">
            <Button>{messages.free_consultation}</Button>
          </a>

          <div>
            <CountDownTimer targetDate={new Date(2022, 8, 24)}></CountDownTimer>
          </div>
        </div>
        <div className="course-start-note">
          Адам санына байланысты курсқа жазылу ертерек тоқталылу мүмкін. Курсқа
          тіркеліп үлгеріңіз!{" "}
        </div>
      </div>
      <div className="course-block__image">
        <img src="./media/images/developer.png" alt="Курс туралы" />
      </div>
    </section>
  );
};

export default CourseBlock;
