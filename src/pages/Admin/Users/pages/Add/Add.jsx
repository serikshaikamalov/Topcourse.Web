import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { addConfig as config } from "tableColumns/users-columns";
import { rolesAdminService } from "services/admin/rolesService";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import groupsService from "services/admin/groupsAdminService";
import usersService from "services/admin/usersService";

const AddPage = ({ router: { navigate }, data }) => {
  const fieldsWithData = mapFieldWithOptions(config, {
    roles: { options: data.roles },
    groups: { options: data.groups },
  });

  const onSubmit = (formData) => {
    // clear spaces
    formData.email = String(formData.email).trim();
    formData.password = String(formData.password).trim();
    formData.name = String(formData.name).trim();
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
      roles: rolesAdminService.getAll,
      groups: groupsService.getAll,
    });
  })
);
