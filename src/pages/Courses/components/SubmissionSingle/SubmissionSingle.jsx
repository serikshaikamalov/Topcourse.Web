import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import SubmissionsService from "services/submissionsService";

const SubmissionSingle = ({ data }) => {
  return (
    <div>
      <h2 className="m-b-16">{data.quiz?.title}</h2>
      <p className="color-blue">Сіздің жинаған бал тестен: {data.score}%</p>
    </div>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(SubmissionSingle, (router) =>
    useRemoteResource(
      SubmissionsService.getSubmissionById,
      router.params.submissionId
    )
  )
);
