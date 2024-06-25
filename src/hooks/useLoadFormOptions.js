import { useEffect, useState } from "react";

/**
 * Используется чтобы загручить все options(список элементов) для полей формы
 * @param {*} httpRemoteRequests  - array of requests
 * @returns
 * @example remoteOptionsToLoad = {
    userId: UsersService.getAll,
    courseId: CoursesService.getAll,
  }
 */
export const useLoadFormOptions = (remoteOptionsToLoad) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const optionsToLoad = Object.values(remoteOptionsToLoad);
    const optionKeys = Object.keys(remoteOptionsToLoad);

    const promises = optionsToLoad.map((x) => x());

    Promise.all(promises).then((res) => {
      const result = optionKeys.reduce((prev, key, index) => {
        return {
          ...prev,
          [key]: {
            options: res[index].data,
          },
        };
      }, {});

      setOptions(result);
    });
  }, []);

  return [options, setOptions];
};
