import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import HomeworkService from "services/homeworkService";

const HomeworkPage = ({ data, loadData }) => {
  const [firstHomeWork] = data;

  return (
    <div>
      <h1>{firstHomeWork.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: firstHomeWork?.text,
        }}
      />
    </div>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(HomeworkPage, (router) =>
    useRemoteResource(HomeworkService.getAllByLessonId, router.params.lessonId)
  )
);
