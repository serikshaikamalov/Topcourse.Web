const { useOutletContext } = require("react-router-dom");
const { default: Lesson } = require("./Lesson");

const LessonContainer = () => {
  const lesson = useOutletContext();

  return <Lesson lesson={lesson}></Lesson>;
};

export default LessonContainer;
