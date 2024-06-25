import { Outlet } from "react-router-dom";
import "./admin.scss";
import AdminMenu from "../../components/Menu/Menu";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import useCheckAuth from "hooks/check-auth";
import { roleEnum } from "enums/roleEnum";
import { withUser } from "hoc/withUser";

const SuperAdminLayout = () => {
  useCheckAuth([roleEnum.superadmin]);

  const menu = [
    {
      label: "Организации",
      path: "organizations",
    },
    {
      label: "Роли",
      path: "roles",
    },
    {
      label: "Сотрудники",
      path: "users",
    },
  ];

  return (
    <div className="admin-layout container content">
      <main>
        <div className="admin-nav">
          <AdminMenu menu={menu} />
        </div>
        <section className="admin-content">
          <Breadcrumb />
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default withUser(SuperAdminLayout);
