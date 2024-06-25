import AdminLessonQuizListPage from "./Quiz/pages/List/List";
import AdminLessonQuizAddPage from "./Quiz/pages/Add/Add";
import AdminLessonQuizEditPage from "./Quiz/pages/Edit/Edit";
import AdminLessonQuizQuestionListPage from "./Questions/pages/List/List";
import AdminLessonQuizQuestionAddPage from "./Questions/pages/Add/Add";
import AdminLessonQuizQuestionEditPage from "./Questions/pages/Edit/Edit";
import AdminLessonQuizAnswerPage from "./Answers/Pages/List/List";
import AdminLessonQuizAnswerAddPage from "./Answers/Pages/Add/Add";
import AdminLessonQuizAnswerEditPage from "./Answers/Pages/Edit/Edit";
import { Outlet } from "react-router-dom";

const answerRoutes = [
  {
    path: "answers",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminLessonQuizAnswerPage,
      },
      {
        path: "add",
        element: AdminLessonQuizAnswerAddPage,
      },
      {
        path: "edit/:answerId",
        element: AdminLessonQuizAnswerEditPage,
      },
    ],
  },
];

const questionRoutes = [
  {
    path: "questions",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminLessonQuizQuestionListPage,
      },
      {
        path: "add",
        element: AdminLessonQuizQuestionAddPage,
      },
      {
        path: "edit/:questionId",
        element: AdminLessonQuizQuestionEditPage,
      },
      {
        path: ":questionId",
        element: Outlet,
        children: answerRoutes,
      },
    ],
  },
];

const quizRoutes = [
  {
    path: "quiz",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminLessonQuizListPage,
      },
      {
        path: "add",
        element: AdminLessonQuizAddPage,
      },
      {
        path: "edit/:quizId",
        element: AdminLessonQuizEditPage,
      },
      {
        path: ":quizId",
        element: Outlet,
        children: questionRoutes,
      },
    ],
  },
];

export default quizRoutes;
