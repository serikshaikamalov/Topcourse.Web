import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import SubmissionsService from "services/submissionsService";
import { submissionResultColumnListConfig as config } from "tableColumns/submission-result-columns";

const AdminSubmissionDetailPage = ({ data }) => {
  return (
    <ListPage pageTitle="Детали тестирования">
      <AppTable data={data} columnConfig={config}></AppTable>
    </ListPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminSubmissionDetailPage, (router) => {
    return useRemoteResource(
      SubmissionsService.getSubmissionResult,
      router.params.submissionId
    );
  })
);
