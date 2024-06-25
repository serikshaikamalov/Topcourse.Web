import { Outlet } from "react-router-dom";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import LessonLayout from "./pages/Lesson/LessonLayout";
import HomeworkPage from "./pages/Lesson/pages/Homework/Homework";
import LessonContainer from "./pages/Lesson/pages/Lesson/LessonContainer";
import QuizPage from "./pages/Lesson/pages/Quiz/QuizPage";
import QuizStart from "./pages/Lesson/pages/QuizStart/QuizStart";
import SubmissionPage from "./pages/Lesson/pages/Submission/Submission";

const quizRoutes = [
  {
    path: "quiz",
    element: Outlet,
    children: [
      {
        path: "",
        element: QuizPage,
      },
      {
        path: "start",
        element: QuizStart,
      },
      {
        path: "submissions/:submissionId",
        element: SubmissionPage,
      },
    ],
  },
];

const lessonRoutes = [
  {
    path: "courses/:id",
    element: Outlet,
    children: [
      {
        path: "",
        element: CourseDetail,
      },
      {
        path: "lessons/:lessonId",
        element: LessonLayout,
        children: [
          {
            path: "",
            redirect: "theory",
          },
          {
            path: "theory",
            element: LessonContainer,
          },
          ...quizRoutes,
          {
            path: "homework",
            element: HomeworkPage,
          },
        ],
      },
    ],
  },
];

export const courseModuleRoutes = [...lessonRoutes];
