import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { operationsColumns } from "helpers/operationsColumns";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import React from "react";
import answerAdminService from "services/admin/answerAdminService";
import AnswerService from "services/answerService";
import { answerColumnListConfig as config } from "tableColumns/answer-columns";

function AdminLessonQuizAnswerPage({ data, loadData }) {
  const columnConfigWithOperations = [
    ...config,
    ...operationsColumns(answerAdminService.delete, loadData),
  ];

  return (
    <ListPage pageTitle="Список ответов">
      <AppTable columnConfig={columnConfigWithOperations} data={data} />
    </ListPage>
  );
}

export default withRouter(
  withRemoteDataAndSpinner(AdminLessonQuizAnswerPage, (router) => {
    return useRemoteResource(
      AnswerService.getQuestionAnswers,
      router.params.questionId
    );
  })
);
