import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import coursesAdminService from "services/admin/coursesAdminService";
import { courseColumnFormEditConfig as config } from "tableColumns/course-columns";
import { useRemoteResource } from "hooks/useRemoteResource";
import AppForm from "components/AppForm/AppForm";
import { toFormData } from "helpers/formUtils";

const AdminCoursesEditPage = ({
  router: {
    navigate,
    params: { id },
  },
  data,
}) => {
  const onSubmit = (data) => {
    const formData = toFormData(data);
    coursesAdminService.put(id, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редатирование курса">
      <AppForm onSubmit={onSubmit} data={data} fields={config}></AppForm>
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(AdminCoursesEditPage, (router) => {
    return useRemoteResource(coursesAdminService.get, router.params.id);
  })
);
