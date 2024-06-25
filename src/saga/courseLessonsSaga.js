import { call, put, takeEvery } from "redux-saga/effects";
import { CoursesActions } from "redux/actions/coursesActions";
import CoursesService from "services/coursesService";
import LessonsService from "services/lessonsService";

function* fetchCourseLessons(action) {
  try {
    const { courseId, queryParams } = action.payload;
    const { data } = yield call(LessonsService.getAll, courseId, queryParams);

    yield put({
      type: CoursesActions.LOAD_LESSONS_SUCCESS,
      payload: {
        courseId,
        data,
      },
    });
  } catch (error) {
    yield put({
      type: CoursesService.LOAD_DATA_FAILURE,
      payload: "something wrong",
    });
  }
}

function* courseLessonsSaga() {
  yield takeEvery(CoursesActions.LOAD_LESSONS, fetchCourseLessons);
}

export default courseLessonsSaga;
