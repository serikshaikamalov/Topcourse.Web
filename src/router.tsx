import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import RoadmapPage from "./pages/Roadmap/Roadmap";
import HomeFromZero from "./pages/Home/Home";
import { adminRoutes } from "pages/Admin/admin-routes";
import { profileRoutes } from "pages/Profile/profile-routes";
import { courseModuleRoutes } from "pages/Courses/course-routes";
import { authRoutes } from "pages/Auth/auth-routes";
import { superAdminRoutes } from "pages/_SuperAdmin/superadmin-routes";
import StudentCertificate from "pages/Certificate/Certificate";
import Blog from "pages/Blog/pages/List/Blog";
import Post from "pages/Blog/pages/Get/Post";
import AppLayout from "pages/AppLayout";

const buildRoute = (route: any, ...rest: any[]) => (
  <Route
    key={route.path}
    path={route.path}
    element={
      route.redirect ? <Navigate to={route.redirect} /> : <route.element />
    }
    {...rest}
  >
    {route?.children && route?.children?.map(buildRoute)}
  </Route>
);

const publicRoutes = [
  {
    path: "",
    element: AppLayout,
    // redirect: "/auth/login",
    children: [
      {
        path: "",
        element: AppLayout,
        redirect: "/auth/login",
      },
      {
        path: "home",
        element: HomeFromZero,
        redirect: "/auth/login",
      },
      {
        path: "roadmap",
        element: RoadmapPage,
      },
      {
        path: "certificates/:id",
        element: StudentCertificate,
      },
      {
        path: "blog",
        element: Outlet,
        children: [
          {
            path: "",
            element: Blog,
          },
          {
            path: ":id",
            element: Post,
          },
        ],
      },
      ...authRoutes,
      ...profileRoutes,
      ...courseModuleRoutes,
      ...superAdminRoutes,
    ],
  },
];
// const protectedRoutes = [];
export const routes = [...publicRoutes, ...adminRoutes];

const AppRouter = () => {
  return <Routes>{routes.map(buildRoute)}</Routes>;
};

export default AppRouter;
