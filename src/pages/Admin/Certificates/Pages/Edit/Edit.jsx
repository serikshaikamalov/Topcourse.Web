import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import { certificatesService } from "services/certificatesService";
import { formFields } from "../../helpers/form-fields";
import usersAdminService from "services/admin/usersService";
import coursesAdminService from "services/admin/coursesAdminService";

const AdminCertificateUpdatePage = ({
  router: { navigate },
  data: { students, courses, certificate },
}) => {
  const fieldsWithData = mapFieldWithOptions(formFields, {
    courseId: { options: courses },
    studentId: { options: students },
  });

  const onSubmit = (formData) => {
    certificatesService.put(certificate.id, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Обновление сертификата">
      <AppForm onSubmit={onSubmit} data={certificate} fields={fieldsWithData} />
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(AdminCertificateUpdatePage, (router) => {
    return useLoadAll({
      students: usersAdminService.getAll,
      courses: coursesAdminService.getAll,
      certificate: () => certificatesService.get(router.params.id),
    });
  })
);
