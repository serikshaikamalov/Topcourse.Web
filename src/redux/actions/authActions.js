export const AuthActions = {
  LOGIN: "[Auth] Login",
  LOGIN_SUCCESS: "[Auth] login success",
  LOGIN_FAILURE: "[Auth] login failure",

  LOGIN_GOOGLE: "[Auth] Login with Google",
  LOGIN_GOOGLE_SUCCESS: "[Auth] login with Google success",
  LOGIN_GOOGLE_FAILURE: "[Auth] login with Google failure",
  LOGOUT: "[Auth] Logout",

  ME: "[Auth] me",
  ME_SUCCESS: "[Auth] me success",
  ME_FAILURE: "[Auth] me failure",
};

export const loginAction = (payload) => {
  return {
    type: AuthActions.LOGIN,
    payload,
  };
};
export const loginWithGoogleAction = (payload) => {
  return {
    type: AuthActions.LOGIN_GOOGLE,
    payload,
  };
};
export const loginSuccessAction = (payload) => {
  return {
    type: AuthActions.LOGIN_SUCCESS,
    payload,
  };
};
export const loginFailureAction = (payload) => {
  return {
    type: AuthActions.LOGIN_FAILURE,
    payload,
  };
};
export const logoutAction = () => {
  return {
    type: AuthActions.LOGOUT,
  };
};

export const getMeAction = (payload) => {
  return {
    type: AuthActions.ME,
    payload,
  };
};

export const getMeSuccessAction = (payload) => {
  return {
    type: AuthActions.ME_SUCCESS,
    payload,
  };
};
export const getMeFailureAction = (payload) => {
  return {
    type: AuthActions.ME_FAILURE,
    payload,
  };
};
