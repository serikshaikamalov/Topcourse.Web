import { listConfig as config } from "tableColumns/comment-column";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import ListPage from "components/ListPage/ListPage";
import { commentsService } from "services/commentsService";
import { useLoadAll } from "hooks/useLoadAll";
import AppTable from "components/AppTable/AppTable";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { Link } from "react-router-dom";

const List = ({
  data: { comments },
  loadData,
  router: {
    params: { id: courseId, lessonId },
  },
}) => {
  const modifiedConfig = mapFieldWithOptions(config, {
    answer: {
      render: () => (
        <Link to={`/courses/${courseId}/lessons/${lessonId}/theory`}>
          Жауап бер
        </Link>
      ),
    },
  });
  return (
    <ListPage pageTitle={"Комментарий"}>
      <AppTable columnConfig={modifiedConfig} data={comments}></AppTable>
    </ListPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(List, (router) => {
    return useLoadAll({
      comments: () => commentsService.getLessonComments(router.params.lessonId),
    });
  })
);
