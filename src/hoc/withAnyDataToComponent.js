export const withAnyDataToComponent = (Component, ...rest) => {
  const WrappedComponent = () => {
    return <Component {...rest} />;
  };
  return WrappedComponent;
};
