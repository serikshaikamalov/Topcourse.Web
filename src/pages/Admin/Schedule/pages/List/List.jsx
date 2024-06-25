import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/schedule-columns";
import scheduleAdminService from "services/admin/scheduleAdminService";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";

const AdminScheduleListPage = ({ data, loadData }) => {
  const onDelete = ({ id }) => {
    scheduleAdminService.delete(id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Расписание курсов">
      <AppAdminTable
        columnConfig={listConfig}
        data={data}
        allowEditing={false}
        onDelete={onDelete}
      ></AppAdminTable>
    </ListPage>
  );
};
export default withRemoteDataAndSpinner(AdminScheduleListPage, () => {
  return useRemoteResource(scheduleAdminService.getAll);
});
