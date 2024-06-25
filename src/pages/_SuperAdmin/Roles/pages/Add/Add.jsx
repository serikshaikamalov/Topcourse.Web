import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import withRouter from "hoc/withRouter";
import { rolesSAService } from "services/superadmin/rolesSAService";
import { addConfig as config } from "tableColumns/roles-columns";

const AdminRolesAddPage = ({ router: { navigate } }) => {
  const onSubmit = (formData) => {
    rolesSAService.post(formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание ролей">
      <AppForm onSubmit={onSubmit} fields={config} />
    </CrudPage>
  );
};
export default withRouter(AdminRolesAddPage);
