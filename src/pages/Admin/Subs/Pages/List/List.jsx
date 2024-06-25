import AppTable from "../../../../../components/AppTable/AppTable";
import ListPage from "../../../../../components/ListPage/ListPage";
import { useRemoteResource } from "../../../../../hooks/useRemoteResource";
import SubscriptionService from "../../../../../services/subscriptionService";
import { getColumnConfig } from "../../helpers/tableColumns";

const AdminSubsListPage = () => {
  const [data, loadData] = useRemoteResource(SubscriptionService.getAll);
  const columnConfig = getColumnConfig(SubscriptionService.delete, loadData);

  return (
    <ListPage pageTitle="Список подписок на курс">
      {data && <AppTable columnConfig={columnConfig} data={data}></AppTable>}
    </ListPage>
  );
};
export default AdminSubsListPage;
