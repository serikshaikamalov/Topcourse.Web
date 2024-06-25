import { combineReducers, configureStore } from "@reduxjs/toolkit";
import lessonReducer from "./reducers/lessonReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "saga";
import adminMenuReducer from "./reducers/adminMenuReducer";
import breadcrumbReducer from "./reducers/breadcrumbReducer";
import coursesReducer from "./reducers/coursesReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authReducer from "./reducers/authReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [""],
};

export const rootReducers = combineReducers({
  auth: authReducer,
  courses: coursesReducer,
  lesson: lessonReducer,
  adminMenu: adminMenuReducer,
  breadcrumb: breadcrumbReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
