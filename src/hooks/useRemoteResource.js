import { useEffect, useState } from "react";

export const useRemoteResource = (fetchData, ...params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = (queryParams) => {
    setLoading(true);

    try {
      fetchData(...params, queryParams)
        .then((r) => r.data)
        .then((data) => {
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (ex) {
      console.log("useRemoteResource: ex ", ex);
      setLoading(false);
    }
  };

  useEffect(loadData, params);

  return [data, loadData, loading, setData];
};
