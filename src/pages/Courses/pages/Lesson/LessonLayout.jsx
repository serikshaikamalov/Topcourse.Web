import Page from "components/Page/Page";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import LessonNav from "pages/Courses/components/LessonNav/LessonNav";
import { Outlet } from "react-router-dom";
import LessonsService from "services/lessonsService";
import "./lesson-layout.scss";

const LessonLayout = ({ data: lesson, router: { navigate } }) => {
  const hasQuiz = lesson?.quizes?.length > 0;
  const hasHomework = lesson?.homeworks?.length > 0;

  const lessonMenu = [
    {
      path: "theory",
      name: "Теория",
    },
  ];

  if (hasQuiz) {
    lessonMenu.push({
      path: "quiz",
      name: "Сұрақ жауап",
    });
  }

  if (hasHomework) {
    lessonMenu.push({
      path: "homework",
      name: "Үй жұмысы",
    });
  }

  return (
    <Page>
      <div className="lesson-layout">
        <div className="lesson-content">
          <Outlet context={lesson} />
        </div>
        <div className="lesson__navigation">
          <LessonNav menu={lessonMenu} navigate={navigate} />
        </div>
      </div>
    </Page>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(LessonLayout, (router) =>
    useRemoteResource(LessonsService.get, router.params?.lessonId)
  )
);
