import { useNavigate } from "react-router-dom";
import AppForm from "../../../../../components/AppForm/AppForm";
import { mapFieldWithOptions } from "../../../../../helpers/mapFieldWithOptions";
import { formFields } from "../../helpers/form-fields";
import CrudPage from "../../../../../components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "../../../../../hoc/withRemoteDataAndSpinner";
import { certificatesService } from "services/certificatesService";
import { useLoadAll } from "hooks/useLoadAll";
import withRouter from "hoc/withRouter";
import usersAdminService from "services/admin/usersService";
import coursesAdminService from "services/admin/coursesAdminService";

const AdminCertificateAddPage = ({ data: { students, courses } }) => {
  // Переписать
  const fieldsWithOptions = mapFieldWithOptions(formFields, {
    courseId: { options: courses },
    studentId: { options: students },
  });
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    certificatesService.post(formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание сертификата">
      <AppForm onSubmit={onSubmit} fields={fieldsWithOptions} />
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminCertificateAddPage, () => {
    return useLoadAll({
      courses: coursesAdminService.getAll,
      students: usersAdminService.getAll,
    });
  })
);
