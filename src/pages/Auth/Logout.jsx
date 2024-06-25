import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "redux/actions/authActions";
import { signOut } from "firebase/auth";
import { auth } from "firebaseConfig";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutAction());
    signOut(auth)
      .then(() => {
        console.log("Firebase logout successful");
      })
      .catch((ex) => {
        console.log("Firebase logout ex", ex);
      });
    navigate("/auth/login");
  }, [dispatch, navigate]);

  return <></>;
};

export default Logout;
