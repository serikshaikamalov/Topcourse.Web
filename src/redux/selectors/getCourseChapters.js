import { createSelector } from "@reduxjs/toolkit";

export const getCourseChaptersSelector = createSelector(
  (store) => store.courses.data,
  (_, id) => id,
  (courses, courseId) => {
    return courses.find((x) => x.id === courseId)?.chapters?.data;
  }
);
