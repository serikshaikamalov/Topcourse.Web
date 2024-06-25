const LessonOptions = ({ lesson }) => {
  const lessonOptions = ["Теория"];

  if (lesson?.quizes?.length > 0) {
    lessonOptions.push("Тесты");
  }
  if (lesson?.homeworks?.length > 0) {
    lessonOptions.push("Үй жұмысы");
  }
  return lessonOptions.map((x, index) => (
    <div key={index}>
      <span className="color-green">{x}</span>
    </div>
  ));
};

export default LessonOptions;
