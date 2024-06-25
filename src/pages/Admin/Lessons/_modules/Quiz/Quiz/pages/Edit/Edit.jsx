import QuizService from "services/quizService";
import withRouter from "hoc/withRouter";
import { formFields } from "../../helpers/form-fields";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import CrudPage from "components/CrudPage/CrudPage";
import AppForm from "components/AppForm/AppForm";
import quizAdminService from "services/admin/quizAdminService";

const AdminLessonQuizEditPage = ({
  router: {
    navigate,
    params: { quizId },
  },
  data,
}) => {
  // Refactor
  const onSubmit = (formData) => {
    quizAdminService.put(quizId, formData)
    .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редактирование теста">
      <AppForm onSubmit={onSubmit} fields={formFields} data={data}></AppForm>
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminLessonQuizEditPage, (router) => {
    return useRemoteResource(QuizService.get, router.params.quizId);
  })
);
