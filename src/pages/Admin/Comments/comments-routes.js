import List from "./List/List";
import { Outlet } from "react-router-dom";

export const adminCommentsRoutes = [
  {
    path: "comments",
    element: Outlet,
    children: [
      {
        path: "",
        element: List,
      },
    ],
  },
];
