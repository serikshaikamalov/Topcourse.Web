import AdminHomeworkList from "./List/List";
import AdminCourseAdd from "./Add/Add";
import AdminCoursesEditPage from "./Edit/Edit";
import { Outlet } from "react-router-dom";

export const adminHomeworkRoutes = [
  {
    path: "homeworks",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminHomeworkList,
      },
      {
        path: "add",
        element: AdminCourseAdd,
      },
      {
        path: "edit/:homeworkId",
        element: AdminCoursesEditPage,
      },
    ],
  },
];
