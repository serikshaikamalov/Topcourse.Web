import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import "./course-result.scss";

const CourseResult = () => {
  const skills = [
    {
      title: "Верстка жасау",
      text: "HTML және СSS арқылы көрнекті сайттарды жасап үйренесіз",
    },
    {
      title: "Программирование Javascript",
      text: "Javascript арқылы қосымшаларға логика жазып үйренесіз",
    },
    {
      title: "React-пен жұмыс істеп үйренесіз",
      text: 'React арқылы "тірі" сайттарды жасап үйренесіз',
    },
    {
      title: "Git-пен жұмыс",
      text: "Өзіңіздің жұмыстарыңызды Git-те сақтап үйренесіз",
    },
    {
      title: "Резюмені дұрыс толтыру",
      text: "Резюме толтырудағы басты ережелер және қателіктер",
    },
    {
      title: "Собеседованиядағы 20 сұраққа жауап",
      text: "Собеседованияда жиі кездесетін сұрақтарға толық жауап",
    },
  ];

  return (
    <section className="skills">
      <div className="container mx-auto">
        <SectionTitle>Курстан не үйренесіз</SectionTitle>
        <div className="skills__list">
          {skills.map((s, index) => {
            return (
              <div className="skills__item" key={index}>
                <h3 className="skills__subtitle">{s.title}</h3>
                <p className="skills__text">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseResult;
