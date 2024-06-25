import { useEffect, useState } from "react";
import LessonsService from "../../../../services/lessonsService";

export const useCourseLessons = (courseId) => {
  const [data, setData] = useState();

  useEffect(() => {
    LessonsService.getAll(courseId)
      .then((d) => d.data)
      .then((res) => {
        setData(res);
      });
  }, []);

  return data;
};
