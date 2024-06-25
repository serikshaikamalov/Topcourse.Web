import AdminCourseList from "./List/CourseList";
import AdminCourseAdd from "./Add/Add";
import AdminCoursesEditPage from "./Edit/Edit";
import { Outlet } from "react-router-dom";
import { adminChaptersRoutes } from "../Chapters/router";

export const adminCoursesRoutes = [
  {
    path: "courses",
    element: Outlet,
    name: "Курсы",
    children: [
      {
        path: "",
        element: AdminCourseList,
      },
      {
        path: "add",
        element: AdminCourseAdd,
        name: "Добавление курса",
      },
      {
        path: "edit/:id",
        element: AdminCoursesEditPage,
        name: "Редактирование курса",
      },
      {
        path: ":id",
        element: Outlet,
        name: "Курс",
        children: adminChaptersRoutes,
      },
    ],
  },
];
