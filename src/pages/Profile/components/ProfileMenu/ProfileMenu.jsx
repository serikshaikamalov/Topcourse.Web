import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineBarChart, AiOutlineSafetyCertificate } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logoutAction } from "redux/actions/authActions";
import { signOut } from "firebase/auth";
import { auth } from "firebaseConfig";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pofileMenu = [
    {
      id: 1,
      name: "Главная",
      route: "profile/main",
      icon: <HiOutlineHome />,
    },
    {
      id: 2,
      name: "Профиль",
      route: "profile/me",
      icon: <FiUser />,
    },
    {
      id: 3,
      name: "Рейтинг",
      route: "profile/ratings",
      icon: <AiOutlineBarChart />,
    },
    {
      id: 4,
      name: "Сертификаттар",
      route: "profile/certificates",
      icon: <AiOutlineSafetyCertificate />,
    },
  ];

  const logout = () => {
    dispatch(logoutAction());
    signOut(auth)
      .then(() => {
        console.log("Firebase logout successful");
      })
      .catch((ex) => {
        console.log("Firebase logout ex", ex);
      });
    navigate("/auth/login");
  };

  return (
    <div className="flex lg:flex-col lg:flex justify-between w-full profile-menu">
      {pofileMenu.map((menu, inx) => (
        <div key={inx}>
          <NavLink activeclassname="active" to={"/" + menu.route}>
            <span className="flex h-10 mr-2">
              <span className="hidden lg:block mr-3">{menu.icon}</span>
              {menu.name}
            </span>
          </NavLink>
        </div>
      ))}
      <div key="logout" className="cursor-pointer" onClick={logout}>
        Выйти
      </div>
    </div>
  );
};

export default ProfileMenu;
