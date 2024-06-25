import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "redux/selectors/getUser";

/**
 * If user logged in navigate to profile page
 */
const useNavigateToProfile = () => {
  const authUser = useSelector(getAuthUser);

  const naviate = useNavigate();
  useEffect(() => {
    if (authUser) {
      naviate("/profile/main");
    }
  }, []);
};

export default useNavigateToProfile;
