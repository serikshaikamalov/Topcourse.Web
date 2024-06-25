import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { operationsColumns } from "helpers/operationsColumns";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import questionAdminService from "services/admin/questionAdminService";
import QuizService from "services/quizService";
import { questionColumnListConfig as config } from "tableColumns/question-columns";

function AdminLessonQuizQuestionListPage({ data, loadData }) {
  // @TODO: Refactor
  const columnConfigWithOperations = [
    ...config,
    ...operationsColumns(questionAdminService.delete, loadData),
  ];

  return (
    <ListPage pageTitle="Список вопросов">
      <AppTable columnConfig={columnConfigWithOperations} data={data} />
    </ListPage>
  );
}

export default withRouter(
  withRemoteDataAndSpinner(AdminLessonQuizQuestionListPage, (router) => {
    return useRemoteResource(
      QuizService.getQuizQuestions,
      router.params.quizId
    );
  })
);
