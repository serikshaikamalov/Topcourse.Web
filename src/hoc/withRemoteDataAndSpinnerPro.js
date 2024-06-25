import { mapToObject } from "helpers/mapToObject";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Задача этой функций обернуть компонент добавляя спиннер и получить данные с сервера и вернуть дочерному компоненту.
 * Чтобы сделать запрос нужен роутер
 * @param {} Component
 * @param {*} loadHook
 * @returns
 */
export const withRemoteDataAndSpinnerPro = (Component, buildEndpoint) => {
  const WithRemoteDataAndSpinnerPro = ({ router, ...rest }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const endPoint = buildEndpoint(router);
    const [searchParams] = useSearchParams();
    let searchParamsObject = mapToObject(searchParams);

    console.log("WithRemoteDataAndSpinnerPro", {
      data,
      loading,
      endPoint,
      searchParamsObject,
    });

    const loadData = () => {
      setLoading(true);
      
      endPoint
        .api(endPoint.params, searchParamsObject)
        .then((r) => r.data)
        .then((data) => {
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    useEffect(loadData, [searchParams]);

    if (loading) return <div>Loading...</div>;

    return (
      <Component
        data={data}
        loadData={loadData}
        router={router}
        setLoading={setLoading}
        loading={loading}
        {...rest}
      ></Component>
    );
  };
  return WithRemoteDataAndSpinnerPro;
};
