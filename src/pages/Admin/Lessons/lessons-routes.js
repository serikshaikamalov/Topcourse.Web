import { Outlet } from "react-router-dom";
import AdminLessonsPage from "./_modules/Lessons/Pages/List/LessonList";
import AdminLessonAddPage from "./_modules/Lessons/Pages/Add/Add";
import AdminLessonEditPage from "./_modules/Lessons/Pages/Edit/Edit";
import LessonLayout from "./LessonLayout";
import LessonManagePage from "./_modules/Lessons/Pages/Manage/Manage";
import quizModuleRoutes from "./_modules/Quiz/quiz-routes";
import { adminHomeworkRoutes } from "./_modules/Homework/homework-routes";
import { adminCommentsRoutes } from "./_modules/Comments/comments-routes";

const adminLessonsRoutes = [
  {
    path: "lessons",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminLessonsPage,
      },
      {
        path: "add",
        element: AdminLessonAddPage,
      },
      {
        path: "edit/:lessonId",
        element: AdminLessonEditPage,
      },
      {
        path: ":lessonId",
        element: LessonLayout,
        children: [
          {
            path: "manage",
            element: LessonManagePage,
          },
          ...quizModuleRoutes,
          ...adminHomeworkRoutes,
          ...adminCommentsRoutes,
        ],
      },
    ],
  },
];

export default adminLessonsRoutes;
