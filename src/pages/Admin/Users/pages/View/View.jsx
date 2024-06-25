import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import React from "react";
import usersService from "services/admin/usersService";

const View = ({ data }) => {
  return <div>{<pre>{JSON.stringify(data)}</pre>}</div>;
};

export default withRouter(
  withRemoteDataAndSpinner(View, (router) => {
    return useLoadAll({
      user: () => usersService.get(router.params.id),
    });
  })
);
