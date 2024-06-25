import { BreadcrumbActions } from "redux/actions/breadcrumbActions";

const initialState = {
  data: [],
};

const breadcrumbReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BreadcrumbActions.SET_DATA:
      return {
        ...state,
        data: [...state.data, payload],
      };

    case BreadcrumbActions.REMOVE_BY_INDEX:
      return {
        ...state,
        data: state.data.filter((i) => i.name !== payload.name),
      };
    default:
      return initialState;
  }
};

export default breadcrumbReducer;
