import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const LessonNav = ({ navigate, menu }) => {
  return (
    <nav className="lesson__navigation border-start">
      <div className="lesson__navigation__menu border-bottom p-b-8">
        <ul>
          {menu &&
            menu.map((x, index) => (
              <li className="fw-500" key={index}>
                <NavLink to={x.path}>{x.name}</NavLink>
              </li>
            ))}
        </ul>
      </div>

      <div className="p-t-8">
        <Button variant="text" onClick={() => navigate("..")}>
          Назад
        </Button>
      </div>
    </nav>
  );
};
export default LessonNav;
