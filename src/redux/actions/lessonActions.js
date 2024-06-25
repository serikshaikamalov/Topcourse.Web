export const LessonActions = {
  LOAD_DATA: "[Lesson] load data",
  LOAD_DATA_SUCCESS: "[Lesson] load data success",
  LOAD_DATA_FAILURE: "[Lesson] load data failure",
};

export const loadLessonAction = (id) => {
  return {
    type: LessonActions.LOAD_DATA,
    payload: id,
  };
};
export const loadLessonSuccessAction = (payload) => {
  return {
    type: LessonActions.LOAD_DATA,
    payload,
  };
};
export const loadLessonFailureAction = (payload) => {
  return {
    type: LessonActions.LOAD_DATA,
    payload,
  };
};
