import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import service from "services/superadmin/organizationsSAService";
import { editConfig } from "tableColumns/organizations-columns";

const EditPage = ({
  router: {
    navigate,
    params: { id },
  },
  data,
}) => {
  const onSubmit = (formData) => {
    service.put(id, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редактирование организации">
      <AppForm onSubmit={onSubmit} data={data} fields={editConfig} />
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(EditPage, (router) => {
    return useRemoteResource(service.get, router.params.id);
  })
);
