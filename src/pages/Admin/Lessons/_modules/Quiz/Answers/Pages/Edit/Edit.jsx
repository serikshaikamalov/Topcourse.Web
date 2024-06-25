import withRouter from "hoc/withRouter";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import CrudPage from "components/CrudPage/CrudPage";
import AppForm from "components/AppForm/AppForm";
import { answerColumnFormEditConfig as config } from "tableColumns/answer-columns";
import AnswerService from "services/answerService";
import answerAdminService from "services/admin/answerAdminService";

const AdminLessonAnswerEditPage = ({
  router: {
    navigate,
    params: { answerId },
  },
  data,
}) => {
  // Refactor
  const onSubmit = (formData) => {
    answerAdminService.put(answerId, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редактирование ответа">
      <AppForm onSubmit={onSubmit} fields={config} data={data}></AppForm>
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminLessonAnswerEditPage, (router) => {
    return useRemoteResource(AnswerService.get, router.params.answerId);
  })
);
