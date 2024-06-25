import { useCallback, useEffect, useState } from "react";
import appAxios from "services/axios";

export const useScheduleLessonsByUserFlow = (courseId) => {
  const [data, setData] = useState(null);

  const loadData = useCallback(async () => {
    try {
      const response = await appAxios.get(
        `/schedules/courses/${courseId}/lessons`
      );
      setData(response);
    } catch (ex) {
      setData([]);
    }
  }, [courseId]);

  useEffect(loadData, [loadData]);

  return [data, loadData];
};
