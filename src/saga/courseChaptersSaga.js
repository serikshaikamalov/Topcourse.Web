import { call, put, takeEvery } from "redux-saga/effects";
import { CoursesActions } from "redux/actions/coursesActions";
import chaptersStudentService from "services/chaptersStudentService";

function* fetchCourseChapters(action) {
  try {
    const { courseId, queryParams } = action.payload;
    const { data } = yield call(
      chaptersStudentService.getAllByCourseId,
      courseId,
      queryParams
    );

    yield put({
      type: CoursesActions.LOAD_CHAPTERS_SUCCESS,
      payload: {
        courseId,
        data,
      },
    });
  } catch (error) {
    yield put({
      type: CoursesActions.LOAD_CHAPTERS_FAILURE,
      payload: "something wrong",
    });
  }
}

function* courseChaptersSaga() {
  yield takeEvery(CoursesActions.LOAD_CHAPTERS, fetchCourseChapters);
}

export default courseChaptersSaga;
