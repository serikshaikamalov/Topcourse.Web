import { CoursesActions } from "redux/actions/coursesActions";
import { map } from "rxjs";

const initialState = {
  data: [],
  error: null,
  isLoading: true,
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CoursesActions.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case CoursesActions.LOAD_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CoursesActions.LOAD_LESSONS_SUCCESS:
      const { courseId, data } = action.payload;
      return {
        ...state,
        data: state.data.map((c) => {
          if (c.id === courseId) {
            return {
              ...c,
              lessons: {
                ...c.lessons,
                data,
              },
            };
          }
          return c;
        }),
      };
    case CoursesActions.LOAD_CHAPTERS_SUCCESS: {
      const { courseId, data } = action.payload;
      return {
        ...state,
        data: state.data.map((c) => {
          if (c.id === courseId) {
            return {
              ...c,
              chapters: {
                ...c.chapters,
                data,
              },
            };
          }
          return c;
        }),
      };
    }
    default:
      return state;
  }
};

export default coursesReducer;
