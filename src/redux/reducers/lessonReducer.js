import { LessonActions } from "redux/actions/lessonActions";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LessonActions.LOAD_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case LessonActions.LOAD_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return initialState;
  }
};

export default lessonReducer;
