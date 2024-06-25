import AppTable from "components/AppTable/AppTable";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import SubmissionsService from "services/submissionsService";
import tableConfig from "./config";

const SubmissionResult = ({ data }) => {
  return (
    <div>
      <h2>Тест нәтижесі: </h2>
      <AppTable columnConfig={tableConfig} data={data}></AppTable>
    </div>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(SubmissionResult, (router) =>
    useRemoteResource(
      SubmissionsService.getSubmissionResult,
      router.params.submissionId
    )
  )
);
