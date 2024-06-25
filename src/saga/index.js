import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import coursesSaga from "./coursesSaga";
import lessonSaga from "./lessonSaga";
import courseChaptersSaga from "./courseChaptersSaga";

export default function* rootSaga() {
  yield all([
    fork(lessonSaga),
    fork(coursesSaga),
    fork(authSaga),
    fork(courseChaptersSaga),
  ]);
}
