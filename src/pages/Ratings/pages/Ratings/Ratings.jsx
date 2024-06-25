import React from "react";
import usersService from "services/admin/usersService";
import AppTable from "../../../../components/AppTable/AppTable";
import { useRemoteResource } from "../../../../hooks/useRemoteResource";
import { columnConfig } from "../../helpers/tableColumns";

const RatingsPage = () => {
  const [data] = useRemoteResource(usersService.getAll);

  return (
    <div>
      <h2>Рейтинг</h2>
      {data && <AppTable columnConfig={columnConfig} data={data}></AppTable>}
    </div>
  );
};

export default RatingsPage;
