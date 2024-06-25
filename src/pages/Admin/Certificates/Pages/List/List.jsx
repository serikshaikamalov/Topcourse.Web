import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { useRemoteResource } from "hooks/useRemoteResource";
import { certificatesService } from "services/certificatesService";
import { getColumnConfig } from "../../helpers/tableColumns";

const AdminCertificateListPage = () => {
  const [data, loadData] = useRemoteResource(certificatesService.getAll);
  const columnConfig = getColumnConfig(certificatesService.delete, loadData);

  return (
    <ListPage pageTitle="Список подписок на курс">
      {data && <AppTable columnConfig={columnConfig} data={data} />}
    </ListPage>
  );
};
export default AdminCertificateListPage;
