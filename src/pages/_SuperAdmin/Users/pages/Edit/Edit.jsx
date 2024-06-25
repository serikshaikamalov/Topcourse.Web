import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import { rolesSAService } from "services/superadmin/rolesSAService";
import usersService from "services/superadmin/usersService";
import { editConfig as config } from "tableColumns/employee-columns";
import organizationsSAService from "services/superadmin/organizationsSAService";

const EditPage = ({
  router: {
    navigate,
    params: { id },
  },
  data,
}) => {
  const fieldsWithData = mapFieldWithOptions(config, {
    roles: { options: data.roles },
    organization: { options: data.organizations },
  });

  const onSubmit = (formData) => {
    console.log("FormData: ", formData);
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
      user: () => usersService.get(router.params.id),
      roles: rolesSAService.getAll,
      organizations: organizationsSAService.getAll,
    });
  })
);
