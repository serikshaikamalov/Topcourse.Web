import useBreadcrumb from "hooks/useBreadcrumb";

const withBreadcrumb = (Component, item) => () => {
  useBreadcrumb(item);

  return <Component />;
};

export default withBreadcrumb;
