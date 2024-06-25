import ListPage from "components/ListPage/ListPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/flow-columns";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import flowsService from "services/flowsService";

const AdminFlowsPage = ({ data, loadData }) => {
  const onDelete = (item) => {
    flowsService.delete(item.id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Список потоков">
      <AppAdminTable
        columnConfig={listConfig}
        data={data}
        onDelete={onDelete}
      />
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(AdminFlowsPage, () => {
  return useRemoteResource(flowsService.getAll);
});
