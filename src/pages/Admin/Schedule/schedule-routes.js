import { Outlet } from "react-router-dom";
import AdminCertificateListPage from "./pages/List/List";
import AddPage from "../Schedule/pages/Add/Add";
import ScheduleLessons from "./pages/ScheduleLessons/ScheduleLessons";

export const adminScheduleRoutes = [
  {
    path: "schedules",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminCertificateListPage,
      },
      {
        path: "add",
        element: AddPage,
      },
      {
        path: ":scheduleId/lessons",
        element: ScheduleLessons,
      },
    ],
  },
];
