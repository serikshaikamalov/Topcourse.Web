import withRouter from "hoc/withRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import {
  removeLastItemInAdminMenuAction,
  setAdminMenuAction,
} from "redux/actions/adminMenuActions";
import buildMenu from "./menu";
import "./lesson-layout.css";

const LessonLayout = ({ router: { params } }) => {
  const dispatch = useDispatch();
  const menu = buildMenu(params);

  useEffect(() => {
    dispatch(setAdminMenuAction(menu));

    return () => {
      dispatch(removeLastItemInAdminMenuAction());
    };
  }, []);
  return (
    <div>
      <nav className="lesson-nav">
        {menu.map((item, inx) => {
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
      <Outlet />
    </div>
  );
};

export default withRouter(LessonLayout);
