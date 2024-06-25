import ListPage from "components/ListPage/ListPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/employee-columns";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import usersService from "services/superadmin/usersService";

const List = ({ data, loadData }) => {
  const onDelete = (item) => {
    usersService.delete(item.id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Список пользователей">
      <AppAdminTable
        columnConfig={listConfig}
        data={data}
        onDelete={onDelete}
      />
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(List, () => {
  return useRemoteResource(usersService.getAll);
});
