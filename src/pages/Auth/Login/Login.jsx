import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, loginWithGoogleAction } from "redux/actions/authActions";
import { getAuthUser } from "redux/selectors/getUser";
import "./login.scss";
import { auth } from "firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { AuthService } from "services/authService";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/profile/main");
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    let { username, password } = data;

    if (!username || !password) {
      alert("Пожалуйста введите логин и пароль");
      return;
    }

    username = String(username).toLowerCase().trim();
    password = password.trim();

    dispatch(loginAction({ username, password }));
  };

  const signWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const firebaseAuthResponse = await signInWithPopup(auth, provider);
      console.log("firebaseAuthResponse:", firebaseAuthResponse);

      const firebaseUser = firebaseAuthResponse.user;

      const user = {
        email: firebaseUser.email,
      };

      const { data: responseUser } = await AuthService.signInWithGoogle(
        user,
        firebaseUser.accessToken
      );
      console.log("signWithGoogle: ", responseUser);

      dispatch(
        loginWithGoogleAction({
          user: responseUser.user,
          token: responseUser.token,
        })
      );
    } catch (ex) {
      console.error("signWithGoogle ex: ", ex);
    }
  };

  return (
    <>
      <Helmet>
        <title>Frontends | Сайтқа тіркелу</title>
        <meta
          name="description"
          content="Школа программирования в Казахстане"
        />
      </Helmet>
      <div className="login container login-form-wrapper content">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ marginBottom: "20px" }}>
            <TextField
              label="Введите телефон или почту"
              fullWidth
              {...register("username", { required: true })}
            />
            {errors.name && (
              <p className="text-danger">Введите правильный email</p>
            )}
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <TextField
              label="Ваш пароль"
              type="password"
              fullWidth
              {...register("password")}
            />
            {errors.phone && <p className="text-danger">Пароль обязательный</p>}
          </Box>
          <Button
            className="email-sigin-button"
            type="submit"
            variant="contained"
          >
            Войти
          </Button>
        </form>
        <div className="firebase-sign-in">
          <button type="button" onClick={signWithGoogle}>
            <FcGoogle size={20} />
            Войти через Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
