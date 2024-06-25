import ListPage from "components/ListPage/ListPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/groups-columns";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import groupsAdminService from "services/admin/groupsAdminService";

const AdminGroupsPage = ({ data, loadData }) => {
  const onDelete = (item) => {
    groupsAdminService.delete(item.id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Список груп">
      <AppAdminTable
        columnConfig={listConfig}
        data={data}
        onDelete={onDelete}
      />
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(AdminGroupsPage, () => {
  return useRemoteResource(groupsAdminService.getAll);
});
