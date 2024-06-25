import { call, put, takeEvery } from "redux-saga/effects";
import { CoursesActions } from "redux/actions/coursesActions";
import CoursesService from "services/coursesService";

function* fetchCourses(action) {
  try {
    const { data } = yield call(CoursesService.getAll, action.payload);
    yield put({ type: CoursesActions.LOAD_DATA_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: CoursesService.LOAD_DATA_FAILURE,
      payload: "something wrong",
    });
  }
}

function* coursesSaga() {
  yield takeEvery(CoursesActions.LOAD_DATA, fetchCourses);
}

export default coursesSaga;
