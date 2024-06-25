import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  removeBreadcrumbAction,
  setBreadcrumbAction,
} from "redux/actions/breadcrumbActions";

const useBreadcrumb = (item) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(item);
    dispatch(setBreadcrumbAction(item));

    return () => {
      dispatch(removeBreadcrumbAction(item));
    };
  }, []);
};

export default useBreadcrumb;
