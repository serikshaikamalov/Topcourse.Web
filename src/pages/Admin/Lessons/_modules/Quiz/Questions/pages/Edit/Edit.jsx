import withRouter from "hoc/withRouter";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import CrudPage from "components/CrudPage/CrudPage";
import AppForm from "components/AppForm/AppForm";
import QestionService from "services/questionService";
import { questionColumnFormEditConfig as config } from "tableColumns/question-columns";
import questionAdminService from "services/admin/questionAdminService";

const AdminLessonQuizQuestionEditPage = ({
  router: {
    navigate,
    params: { questionId },
  },
  data,
}) => {
  // Refactor
  const onSubmit = (formData) => {
    questionAdminService.put(questionId, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редактирование вопроса">
      <AppForm onSubmit={onSubmit} fields={config} data={data}></AppForm>
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminLessonQuizQuestionEditPage, (router) => {
    return useRemoteResource(QestionService.get, router.params.questionId);
  })
);
