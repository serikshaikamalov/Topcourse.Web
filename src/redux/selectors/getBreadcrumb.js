import { createSelector } from "@reduxjs/toolkit";

export const getBreadcrumb = createSelector(
  (store) => store.breadcrumb,
  (breadcrumb) => breadcrumb.data
);
