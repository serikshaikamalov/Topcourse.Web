import { call, put, takeEvery } from "redux-saga/effects";
import { LessonActions } from "redux/actions/lessonActions";
import LessonsService from "services/lessonsService";

function* fetchLesson(action) {
  try {
    const lesson = yield call(LessonsService.get, action.payload);
    yield put({ type: LessonActions.LOAD_DATA_SUCCESS, payload: lesson });
  } catch (error) {
    yield put({
      type: LessonActions.LOAD_DATA_FAILURE,
      payload: "something wrong",
    });
  }
}

function* lessonSaga() {
  yield takeEvery(LessonActions.LOAD_DATA, fetchLesson);
}

export default lessonSaga;
