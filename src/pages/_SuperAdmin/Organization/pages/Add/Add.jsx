import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import withRouter from "hoc/withRouter";
import service from "services/superadmin/organizationsSAService";
import { addConfig as config } from "tableColumns/organizations-columns";

const AddPage = ({ router: { navigate } }) => {
  const onSubmit = (formData) => {
    service.post(formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание организации">
      <AppForm onSubmit={onSubmit} fields={config} />
    </CrudPage>
  );
};
export default withRouter(AddPage);
