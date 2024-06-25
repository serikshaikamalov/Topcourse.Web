import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import usersService from "services/admin/usersService";
import GroupsService from "services/admin/groupsAdminService";
import { rolesAdminService } from "services/admin/rolesService";
import { editConfig as config } from "tableColumns/users-columns";

const EditPage = ({
  router: {
    navigate,
    params: { id },
  },
  data,
}) => {
  const fieldsWithData = mapFieldWithOptions(config, {
    roles: { options: data.roles },
    groups: { options: data.groups },
  });

  const onSubmit = (formData) => {
    formData.email = String(formData.email).toLowerCase().trim();
    formData.name = String(formData.name).trim();

    usersService.put(id, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редактирование пользователя">
      <AppForm
        onSubmit={onSubmit}
        data={data.user}
        fields={fieldsWithData}
      ></AppForm>
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(EditPage, (router) => {
    return useLoadAll({
      roles: rolesAdminService.getAll,
      user: () => usersService.get(router.params.id),
      groups: GroupsService.getAll,
    });
  })
);
