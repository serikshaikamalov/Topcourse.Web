import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "redux/selectors/getUser";

const useCheckAuth = (requiredRoles) => {
  const navigate = useNavigate();
  const authUser = useSelector(getAuthUser);

  useEffect(() => {
    const isAllowed = requiredRoles.some((role) =>
      authUser.roles.map((x) => x.systemName).includes(role)
    );

    if (!isAllowed) navigate("/auth/login");
  }, [authUser]);
};

export default useCheckAuth;
