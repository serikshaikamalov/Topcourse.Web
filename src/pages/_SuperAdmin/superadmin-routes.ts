import SuperAdminLayout from "./SuperAdminLayout";
import { adminRolesRoutes } from "./Roles/roles-routes";
import { usersRoutes } from "./Users/routes";
import { adminPostsRoutes } from "./Blog/blog-routes";
import { IRoute } from "interfaces/ui/path.interface";
import { superadminOrganizationsRoutes } from "./Organization/organizations-routes";

export const superAdminRoutes: IRoute[] = [
  {
    path: "superadmin",
    element: SuperAdminLayout,
    children: [
      {
        path: "",
        redirect: "organizations",
      },
      ...adminRolesRoutes,
      ...usersRoutes,
      ...adminPostsRoutes,
      ...superadminOrganizationsRoutes,
    ],
  },
];
