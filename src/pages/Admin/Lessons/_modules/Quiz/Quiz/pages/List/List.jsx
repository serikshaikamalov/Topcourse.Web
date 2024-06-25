import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import AppTable from "../../../../../../../../components/AppTable/AppTable";
import ListPage from "../../../../../../../../components/ListPage/ListPage";
import { operationsColumns } from "../../../../../../../../helpers/operationsColumns";
import { useRemoteResource } from "../../../../../../../../hooks/useRemoteResource";
import { columnConfig } from "./config";
import QuizAdminService from "services/admin/quizAdminService";
import QuizService from "services/quizService";

function AdminLessonQuizListPage({ data, loadData }) {
  // @TODO: Refactor
  const columnConfigWithOperations = [
    ...columnConfig,
    ...operationsColumns(QuizAdminService.delete, loadData),
  ];

  return (
    <ListPage pageTitle="Список тестов">
      <AppTable columnConfig={columnConfigWithOperations} data={data} />
    </ListPage>
  );
}

export default withRouter(
  withRemoteDataAndSpinner(AdminLessonQuizListPage, (router) => {
    return useRemoteResource(
      QuizService.getLessonQuizes,
      router.params.lessonId
    );
  })
);
