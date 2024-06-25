import CrudPage from "components/CrudPage/CrudPage";
import AppForm from "components/AppForm/AppForm";
import withRouter from "hoc/withRouter";
import QestionService from "services/questionService";
import { questionColumnFormAddConfig as config } from "tableColumns/question-columns";
import questionAdminService from "services/admin/questionAdminService";

const AdminLessonQuizQuestionAddPage = ({
  router: {
    navigate,
    params: { quizId },
  },
}) => {
  const onSubmit = (formData) => {
    questionAdminService
      .post(formData)
      .then((response) => response.data)
      .then(
        (question) => {
          return QestionService.addQuestionToQuiz({
            quizId,
            questionId: question.id,
          });
        },
        (error) => alert("Something wrong: ", error)
      )
      .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание вопроса">
      <AppForm onSubmit={onSubmit} fields={config} />
    </CrudPage>
  );
};
export default withRouter(AdminLessonQuizQuestionAddPage);
