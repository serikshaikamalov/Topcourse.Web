export const CoursesActions = {
  LOAD_DATA: "[Courses] load data",
  LOAD_DATA_SUCCESS: "[Courses] load data success",
  LOAD_DATA_FAILURE: "[Courses] load data failure",

  LOAD_LESSONS: "[Courses] load lessons",
  LOAD_LESSONS_SUCCESS: "[Courses] load lessons success",
  LOAD_LESSSON_FAILURE: "[Courses] load lessons failure",

  LOAD_CHAPTERS: "[Courses] load chapters",
  LOAD_CHAPTERS_SUCCESS: "[Courses] load chapters success",
  LOAD_CHAPTERS_FAILURE: "[Courses] load chapters failure",
};

export const loadCoursesAction = () => {
  return {
    type: CoursesActions.LOAD_DATA,
  };
};
export const loadCoursesSuccessAction = (payload) => {
  return {
    type: CoursesActions.LOAD_DATA_SUCCESS,
    payload,
  };
};
export const loadCoursesFailureAction = (payload) => {
  return {
    type: CoursesActions.LOAD_DATA_FAILURE,
    payload,
  };
};

export const loadCourseLessonsAction = (courseId, queryParams) => {
  return {
    type: CoursesActions.LOAD_LESSONS,
    payload: {
      courseId,
      queryParams,
    },
  };
};
export const loadCourseLessonsSuccessAction = (payload) => {
  return {
    type: CoursesActions.LOAD_LESSONS_SUCCESS,
    payload,
  };
};
export const loadCourseLessonsFailureAction = (payload) => {
  return {
    type: CoursesActions.LOAD_LESSSON_FAILURE,
    payload,
  };
};

export const loadCourseChaptersAction = (courseId, queryParams) => {
  return {
    type: CoursesActions.LOAD_CHAPTERS,
    payload: {
      courseId,
      queryParams,
    },
  };
};
export const loadCourseChaptersSuccessAction = (payload) => {
  return {
    type: CoursesActions.LOAD_CHAPTERS_SUCCESS,
    payload,
  };
};
export const loadCourseChaptersFailureAction = (payload) => {
  return {
    type: CoursesActions.LOAD_CHAPTERS_FAILURE,
    payload,
  };
};
