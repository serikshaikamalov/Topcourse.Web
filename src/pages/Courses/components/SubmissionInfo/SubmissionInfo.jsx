import AppTable from "components/AppTable/AppTable";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import SubmissionsService from "services/submissionsService";
import { tableConfig } from "./config";

const SubmissionInfo = ({ data }) => {
  return (
    <div>
      <h3>Тесті тапсыру нәтижесі</h3>
      <AppTable columnConfig={tableConfig} data={data}></AppTable>
    </div>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(SubmissionInfo, (router) =>
    useRemoteResource(
      SubmissionsService.getUserSubmissionsByQuiz,
      router.params.lessonId
    )
  )
);
