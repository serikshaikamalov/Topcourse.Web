/**
 * Задача этой функций обернуть компонент добавляя спиннер и получить данные с сервера и вернуть дочерному компоненту.
 * Чтобы сделать запрос нужен роутер
 * @param {} Component
 * @param {*} loadHook
 * @returns
 */
export const withRemoteDataAndSpinner = (
  Component,
  useLoadFormOptionsWrapper
) => {
  return ({ router, ...rest }) => {
    const [data, loadData] = useLoadFormOptionsWrapper(router, rest);

    if (data === null || data === undefined)
      return <div className="text-center">Loading...</div>;
    return (
      <Component
        data={data}
        loadData={loadData}
        router={router}
        {...rest}
      ></Component>
    );
  };
};
