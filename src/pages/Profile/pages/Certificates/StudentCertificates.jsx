import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { useRemoteResource } from "hooks/useRemoteResource";
import { certificatesService } from "services/certificatesService";
import { columnConfig } from "./tableColumns";

const StudentCertificateListPage = () => {
  const [data] = useRemoteResource(certificatesService.getStudentCertificates);

  return (
    <ListPage pageTitle="Сертификаттар">
      {data && <AppTable columnConfig={columnConfig} data={data} />}
    </ListPage>
  );
};
export default StudentCertificateListPage;
