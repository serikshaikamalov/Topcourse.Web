import CrudPage from "components/CrudPage/CrudPage";
import AppForm from "components/AppForm/AppForm";
import withRouter from "hoc/withRouter";
import { answerColumnFormAddConfig as config } from "tableColumns/answer-columns";
import answerAdminService from "services/admin/answerAdminService";

const AdminLessonQuizAnswerAddPage = ({
  router: {
    navigate,
    params: { questionId },
  },
}) => {
  const onSubmit = (formData) => {
    answerAdminService
      .post({ ...formData, questionId })
      .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание ответа">
      <AppForm onSubmit={onSubmit} fields={config} />
    </CrudPage>
  );
};
export default withRouter(AdminLessonQuizAnswerAddPage);
