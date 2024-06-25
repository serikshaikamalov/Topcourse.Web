export const LessonsActions = {
  LOAD_DATA: "[Lessons] load data",
  LOAD_DATA_SUCCESS: "[Lessons] load data success",
  LOAD_DATA_FAILURE: "[Lessons] load data failure",
};

export const loadLessonsAction = (courseId) => {
  return {
    type: LessonsActions.LOAD_DATA,
    payload: courseId,
  };
};
export const loadLessonSuccessAction = (payload) => {
  return {
    type: LessonsActions.LOAD_DATA_SUCCESS,
    payload,
  };
};
export const loadLessonFailureAction = (payload) => {
  return {
    type: LessonsActions.LOAD_DATA_FAILURE,
    payload,
  };
};
