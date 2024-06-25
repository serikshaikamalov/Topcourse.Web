import { Outlet } from "react-router-dom";
import Add from "./pages/Add/Add";
import Edit from "./pages/Edit/Edit";
import List from "./pages/List/List";

export const adminFlowsRoutes = [
  {
    path: "flows",
    element: Outlet,
    children: [
      {
        path: "",
        element: List,
      },
      {
        path: "add",
        element: Add,
      },
      {
        path: "edit/:id",
        element: Edit,
      },
    ],
  },
];
