import styled from "styled-components";
import Accordion from "../../../../components/Accordion/Accordion";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const CoursesStyled = styled.div`
  & > div {
    margin-bottom: 20px;
  }
`;

const CourseStructure = () => {
  const courses = [
    {
      title: "HTML & CSS",
      meta: ["12 сабақ", "30 тақырып"],
      content: [
        "HTML-мен танысу",
        "HTML5 тэгтері",
        "CSS не үшін керек?",
        "CSS селекторлар",
        "Flexbox",
        "SEO",
        "Формамен жұмыс",
        "CSS Grid",
        "Адаптивный дизайн",
        "Емтихан",
      ],
    },
    {
      title: "Javascript",
      meta: ["24 сабақ", "40 тақырып"],
      content: [
        "Javascript деген не?",
        "EcmaScript",
        "Variables(айнымалылар) деген не?",
        "Айнымалылардың типі",
        "Массив және цикл",
        "Функция",
        "Таза функциялар",
        "Объектілер",
        "DOM-ға кіріспе. Бірінші бөлім",
        "DOM-ға кіріспе. Екінгі бөлім",
        "Константа, область видимости және замыкание",
        "Преоброзование типов",
        "Асинхронность",
        "Класстар және объектілер",
        "Рекурсия",
      ],
    },
    {
      title: "React",
      meta: ["12 сабақ", "23 тақырып"],
      content: [
        "React-қа кіріспе",
        "Virtual DOM vs Real DOM",
        "JSX синтакс",
        "Компонент-ке кіріспе",
        "Функциналды және класс компоненттері",
        "React Роутер және навигация",
        "Формамен жұмыс",
        "Хуктар не үшін керек?",
        "Басты хуктар: useState, useRef, useReducer",
        "Серверге запрос тастап үйрену",
        "Оптимизация: useMemo, useCallback",
        "Контекст",
        "Redux - State management",
        "TO-DO қосымшасын жасап үйренесіз.",
        "Best practicies"
      ],
    },
  ];
  return (
    <section className="cource-structure">
      <div className="container mx-auto">
        <SectionTitle>Курс бағдарламасы</SectionTitle>
        <CoursesStyled>
          {courses.map((c, index) => (
            <Accordion course={c} key={index}></Accordion>
          ))}
        </CoursesStyled>
      </div>
    </section>
  );
};

export default CourseStructure;
