import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const withRemoteDataRedux = (Component, selector, action) => {
  const WithRemoteDataRedux = (rest) => {
    const courses = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(action());
    }, []);

    if (courses.isLoading) return <div>Loading...</div>;
    if (courses.error) return <div>{courses.error}</div>;

    return courses.data?.length && <Component data={courses.data} {...rest} />;
  };

  return WithRemoteDataRedux;
};
