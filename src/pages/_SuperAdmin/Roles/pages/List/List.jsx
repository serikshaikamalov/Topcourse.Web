import ListPage from "components/ListPage/ListPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/roles-columns";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import { rolesSAService } from "services/superadmin/rolesSAService";

const AdminRolesPage = ({ data, loadData }) => {
  const onDelete = (item) => {
    rolesSAService.delete(item.id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Список ролей">
      <AppAdminTable
        columnConfig={listConfig}
        data={data}
        onDelete={onDelete}
      />
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(AdminRolesPage, () => {
  return useRemoteResource(rolesSAService.getAll);
});
