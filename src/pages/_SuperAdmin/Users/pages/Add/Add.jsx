import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import usersService from "services/superadmin/usersService";
import { addConfig as config } from "tableColumns/employee-columns";
import { rolesSAService } from "services/superadmin/rolesSAService";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import organizationsSAService from "services/superadmin/organizationsSAService";

const AddPage = ({ router: { navigate }, data }) => {
  const fieldsWithData = mapFieldWithOptions(config, {
    roles: { options: data.roles },
    organization: { options: data.organizations },
  });

  const onSubmit = (formData) => {
    usersService.post(formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание пользователя">
      <AppForm onSubmit={onSubmit} fields={fieldsWithData} />
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(AddPage, () => {
    return useLoadAll({
      roles: rolesSAService.getAll,
      organizations: organizationsSAService.getAll,
    });
  })
);
