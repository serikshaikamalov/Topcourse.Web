import React from "react";
import { NavLink } from "react-router-dom";
import { Button as MButton, IconButton } from "@mui/material";

import { useSelector } from "react-redux";
import {
  isCourseAuthorSelector,
  isSuperAdminSelector,
} from "redux/selectors/getUserRoles";
import { FaMoon } from "react-icons/fa";
import themeState from "states/themeEventTarget";


export default function UserMenu({ setMobileOpen, user }) {
  const isSuperAdmin = useSelector(isSuperAdminSelector);
  const isCourseAuthor = useSelector(isCourseAuthorSelector);

  const publicMenu = [
    // {
    //   path: "/roadmap",
    //   label: "Даму картасы",
    //   component: MButton,
    // },
    // {
    //   path: "/blog",
    //   label: "Блог",
    //   component: MButton,
    // },
  ];

  let menu = [];

  if (user) {
    menu = [
      ...publicMenu,
      {
        path: "/profile/main",
        label: "Профиль",
        component: MButton,
      },
    ];
  } else {
    menu = [
      ...publicMenu,
      {
        path: "/auth/login",
        label: "Войти",
        component: MButton,
      },
    ];
  }

  function toggleDarkMode() {
    themeState.toggle()
  }

  return (
    <>
      <div className={"user-menu sm:block xs:hidden mr-2 text-right flex flex-center"}>
        <span className="no-mobile">{user?.email && <span>{user.email}</span>}</span>
        {menu.map((item) => (
          <NavLink to={item.path} key={item.path}>
            <item.component>
              <i
                className="fad fa-brain fa-swap-opacity"
                style={{ marginRight: 10 }}
              ></i>
              {item.label}
            </item.component>
          </NavLink>
        ))}

        {isCourseAuthor && (
          <NavLink to="/admin/courses" className="m-8">
            <MButton>Admin</MButton>
          </NavLink>
        )}

        {isSuperAdmin && (
          <NavLink to="/superadmin" className="m-8">
            <MButton>Super Admin</MButton>
          </NavLink>
        )}
        <IconButton size="small" onClick={toggleDarkMode}>
          <FaMoon></FaMoon>
        </IconButton>
      </div>
    </>
  );
}
