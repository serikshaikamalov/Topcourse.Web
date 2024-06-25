import { call, put, takeEvery } from "redux-saga/effects";
import { AuthActions } from "redux/actions/authActions";
import usersService from "services/usersService";
import { AuthService } from "services/authService";

function* login({ payload }) {
  try {
    const response = yield call(AuthService.login, payload);
    yield put({ type: AuthActions.LOGIN_SUCCESS, payload: response.data });
    const userName = response?.data?.user?.name;
    userName && alert("Добро пожаловать, " + userName);
  } catch (ex) {
    yield put({
      type: AuthActions.LOGIN_FAILURE,
      payload: ex.message,
    });
  }
}

function* getUserMe() {
  try {
    const response = yield call(usersService.me);
    yield put({ type: AuthActions.ME_SUCCESS, payload: response });
  } catch (error) {
    yield put({
      type: AuthActions.ME_FAILURE,
      payload: error.message,
    });
  }
}

function* authSaga() {
  yield takeEvery(AuthActions.LOGIN, login);
  yield takeEvery(AuthActions.ME, getUserMe);
}

export default authSaga;
