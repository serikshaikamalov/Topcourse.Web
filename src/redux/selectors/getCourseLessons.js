import { createSelector } from "@reduxjs/toolkit";

export const getCourseLessonsSelector = createSelector(
  (store) => store.courses.data,
  (_, id) => id,
  (courses, courseId) => {
    let lessons = courses.find((x) => x.id === courseId)?.lessons?.data;
    if (!lessons) {
      return [];
    }

    const groupped = groupThem(lessons);
    const result = Object.entries(groupped).reduce((dict, [k, v]) => {
      return [...dict, ...v];
    }, []);

    return result;
  }
);

const groupThem = (arr) => {
  return arr.reduce((dic, l) => {
    const lessonNumber = Number(l.name.split(" ")[0]);

    const groupID = lessonNumber > 0 ? parseInt(lessonNumber) : "none";

    // also update lesson order here
    l.index = Number(l.name.split(" ")[0].split(".")[1]) || undefined;
    const list = [...(dic[groupID] || []), l];
    const sortedLessons = list.sort((a, b) => a.index - b.index);

    return {
      ...dic,
      [groupID]: sortedLessons,
    };
  }, {});
};
