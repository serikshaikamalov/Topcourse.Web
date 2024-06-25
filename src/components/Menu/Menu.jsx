import { NavLink } from "react-router-dom";

const Menu = ({ menu, user, dispatch }) => {
  return (
    <nav>
      {menu.map((i, index) => (
        <NavLink key={index} to={i.path} relative={true}>
          {i.icon && <i.icon/>}
          {i.label}
        </NavLink>
      ))}
      {/* <div className="cursor" onClick={() => dispatch(logoutAction())}>
        Выйти
      </div> */}
      {user && (
        <div className="m-t-12 p-t-12 fs-12">
          <div>
            Пользователь: <br /> ({user.name})
          </div>
          <div>Роли: {user.roles?.map((x) => x.name).join(", ")}</div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
