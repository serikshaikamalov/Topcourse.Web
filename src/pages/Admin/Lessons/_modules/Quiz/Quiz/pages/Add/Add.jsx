import CrudPage from "components/CrudPage/CrudPage";
import { formFields } from "../../helpers/form-fields";
import AppForm from "components/AppForm/AppForm";
import withRouter from "hoc/withRouter";
import quizAdminService from "services/admin/quizAdminService";
import QuizService from "services/quizService";

const AdminLessonQuizAddPage = ({
  router: {
    navigate,
    params: { lessonId },
  },
}) => {
  const onSubmit = (formData) => {
    quizAdminService
      .post(formData)
      .then((quiz) => quiz.data)
      .then((quiz) => {
        return QuizService.addQuizToLesson({
          quizId: quiz.id,
          lessonId,
        });
      })
      .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание теста">
      <AppForm onSubmit={onSubmit} fields={formFields} />
    </CrudPage>
  );
};
export default withRouter(AdminLessonQuizAddPage);
