import { Outlet } from "react-router-dom";
import { AddPage, ListPage, EditPage } from "./Pages";
import adminLessonsRoutes from "../Lessons/lessons-routes";

export const adminChaptersRoutes = [
  {
    path: "chapters",
    element: Outlet,
    children: [
      {
        path: "",
        element: ListPage,
      },
      {
        path: "add",
        element: AddPage,
      },
      {
        path: "edit/:id",
        element: EditPage,
      },
      {
        path: ":chapterId",
        element: Outlet,
        children: adminLessonsRoutes,
      },
    ],
  },
];
