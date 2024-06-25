import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "redux/selectors/getUser";

export const withUser = (Component, isRequired = true) => {
  const WithUser = (rest) => {
    const authUser = useSelector(getAuthUser);
    const navigate = useNavigate();

    useEffect(() => {
      if (!authUser && isRequired) {
        navigate("/auth/login");
      }
    }, []);

    return <Component user={authUser} {...rest} />;
  };

  return WithUser;
};
