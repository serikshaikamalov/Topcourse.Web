import { createSelector } from "@reduxjs/toolkit";

export const getCoursesSelector = createSelector(
  (store) => store.courses,
  (courses) => courses
);
