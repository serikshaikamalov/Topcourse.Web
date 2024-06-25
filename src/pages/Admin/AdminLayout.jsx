import { useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./admin.scss";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import useCheckAuth from "hooks/check-auth";
import { roleEnum } from "enums/roleEnum";
import { withUser } from "hoc/withUser";
import UserMenu from "components/UserMenu/UserMenu";
import { getAuthUser } from "redux/selectors/getUser";
import Logo from "components/Logo/Logo";
import {
  MdOutlinePlayLesson,
  MdSupervisorAccount,
  MdOutlineGroups,
  MdCalendarToday,
  MdLockOutline,
  MdOutlineQuiz,
  MdOutlineModeComment,
  MdOutlineGrade,
  MdOutlineList,
  MdLogout,
} from "react-icons/md";
import { useEffect, useRef } from "react";
import { IconButton } from "@mui/material";
import { FaBars, FaHamburger } from "react-icons/fa";

const AdminLayout = () => {
  useCheckAuth([roleEnum.author]);
  const authUser = useSelector(getAuthUser);
  const sidebar = useRef(null);
  const burger = useRef(null);
  const location = useLocation();

  const adminMenu = [
    {
      icon: MdOutlinePlayLesson,
      path: "stats",
      label: "Отчеты",
    },
    {
      icon: MdOutlinePlayLesson,
      path: "courses",
      label: "Курсы",
    },
    {
      icon: MdSupervisorAccount,
      path: "users",
      label: "Пользователи",
    },
    {
      icon: MdOutlineGroups,
      path: "groups",
      label: "Группа",
    },
    {
      icon: MdOutlineList,
      path: "flows",
      label: "Поток",
    },
    {
      icon: MdLockOutline,
      path: "subscriptions",
      label: "Управление доступом",
    },
    {
      icon: MdOutlineQuiz,
      path: "submissions",
      label: "Результаты теста",
    },
    {
      icon: MdOutlineModeComment,
      path: "comments",
      label: "Обратная связь",
    },
    {
      icon: MdOutlineGrade,
      path: "certificates",
      label: "Сертификаты",
    },
    {
      icon: MdCalendarToday,
      path: "schedules",
      label: "Расписание курсов",
    },
    {
      icon: MdLogout,
      path: "/auth/logout",
      label: "Выйти",
    },
  ];


  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!sidebar.current.contains(event.target) && !burger.current.contains(event.target)) {
        sidebar.current.classList.remove("active")
      }
    })
  }, [])

  useEffect(() => {
    sidebar.current.classList.remove("active")
  }, [location])

  return (
    <div className="page-wrapper" id="main-wrapper">
      <aside className="left-sidebar admin-nav" ref={sidebar}>
        <div className="admin-logo flex items-center">
          <Logo />
        </div>

        <nav className="sidebar-nav">
          {adminMenu.map((item, inx) => {
            return (
              <NavLink
                key={inx}
                to={item.path}
                relative={true}
                className="sidebar-link"
              >
                {item.icon && <item.icon />}
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>
      <section className="admin-content">
        <div className="ml-auto w-max flex">
          <UserMenu user={authUser} setMobileOpen={() => {
            sidebar.current.classList.toggle('active')
          }} />
          <IconButton
            ref={burger}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => {
              sidebar.current.classList.toggle('active')
            }}
            sx={{ display: { sm: "none" } }}
          >
            <FaBars></FaBars>
          </IconButton>
        </div>
        <Breadcrumb />
        <Outlet />
      </section>
    </div>
  );
};

export default withUser(AdminLayout);
