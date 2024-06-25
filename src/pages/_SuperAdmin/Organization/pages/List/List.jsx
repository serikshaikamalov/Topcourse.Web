import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/organizations-columns";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import service from "services/superadmin/organizationsSAService";
import ListPage from "components/ListPage/ListPage";

const List = ({ data, loadData }) => {
  const onDelete = ({ id }) => {
    service.delete(id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Список организации">
      <AppAdminTable
        columnConfig={listConfig}
        data={data}
        onDelete={onDelete}
      />
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(List, () => {
  return useRemoteResource(service.getAll);
});
