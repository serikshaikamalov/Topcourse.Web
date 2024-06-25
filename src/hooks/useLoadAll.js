import { useEffect, useState } from "react";

export const useLoadAll = (loadRequsts) => {
  const [data, setData] = useState(null);

  const loadData = () => {
    const keys = Object.keys(loadRequsts);
    const values = Object.values(loadRequsts);
    const promises = values.map((x) => x());

    Promise.all(promises).then((res) => {
      const result = keys.reduce((prev, key, index) => {
        return {
          ...prev,
          [key]: res[index].data,
        };
      }, {});

      setData(result);
    });
  };

  useEffect(loadData, []);

  return [data, loadData];
};
