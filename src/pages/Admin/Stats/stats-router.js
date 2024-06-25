import { Outlet } from "react-router-dom";
import MainStatsPage from "./pages/Main/Main";

export const adminStatsRoutes = [
  {
    path: "stats",
    element: Outlet,
    children: [
      {
        path: "",
        element: MainStatsPage,
      },
    ],
  },
];
