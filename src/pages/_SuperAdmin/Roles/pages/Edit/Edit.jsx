import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import { rolesSAService } from "services/superadmin/rolesSAService";
import { editConfig } from "tableColumns/roles-columns";

const AdminRolesEditPage = ({
  router: {
    navigate,
    params: { id },
  },
  data,
}) => {
  const onSubmit = (formData) => {
    rolesSAService.put(id, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редактирование роля">
      <AppForm onSubmit={onSubmit} data={data} fields={editConfig}></AppForm>
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(AdminRolesEditPage, (router) => {
    return useRemoteResource(rolesSAService.get, router.params.id);
  })
);
