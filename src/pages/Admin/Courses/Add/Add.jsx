import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { toFormData } from "helpers/formUtils";
import withRouter from "hoc/withRouter";
import coursesAdminService from "services/admin/coursesAdminService";
import { courseColumnFormAddConfig as config } from "tableColumns/course-columns";

const AdminCourseAdd = ({ router: { navigate } }) => {
  const onSubmit = async (data) => {
    const formData = toFormData(data);
    await coursesAdminService.post(formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Добавление курса">
      <AppForm
        fields={config}
        onSubmit={onSubmit}
        formProps={{ encType: "multipart/form-data" }}
      ></AppForm>
    </CrudPage>
  );
};

export default withRouter(AdminCourseAdd);
