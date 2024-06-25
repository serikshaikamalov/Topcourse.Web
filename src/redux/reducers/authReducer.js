import { AuthActions } from "redux/actions/authActions";

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case AuthActions.LOGIN_GOOGLE:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
      };
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
      };
    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case AuthActions.LOGOUT:
      return initialState;

    case AuthActions.ME_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
