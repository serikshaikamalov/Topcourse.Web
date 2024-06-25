import { createSelector } from "@reduxjs/toolkit";

export const getAuthUser = createSelector(
  (store) => store.auth.user,
  (user) => user
);
