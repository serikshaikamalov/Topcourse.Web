import { useEffect, useState } from "react";
import { matchRoutes, NavLink, useLocation } from "react-router-dom";
import { routes } from "router";
import "./breadcrumb.scss";

const Breadcrumb = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const matches = matchRoutes(routes, location);

    const filtered = matches
      .filter((x) => !!x.route.path && x.route.name)
      .map((x) => ({
        path: x.pathname,
        name: x.route.name,
      }));

    filtered && setData(filtered);
  }, [location]);

  return (
    <ul className="breadcrumb">
      {data?.map((i, index) => (
        <NavLink to={i.path} key={index}>
          {i.name}
        </NavLink>
      ))}
    </ul>
  );
};
export default Breadcrumb;
