import Comments from "components/Comments/Comments";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import React from "react";
import { commentsService } from "services/commentsService";

const CommentsWrapper = ({ data: { comments }, loadData, lessonId }) => {
  const addComment = (formValue) => {
    commentsService.postLessonComment(lessonId, formValue).then(() => {
      loadData();
    });
  };

  const onDelete = (commentId) => {
    commentsService.delete(commentId).then(() => {
      loadData();
    });
  };

  return (
    <Comments comments={comments} addComment={addComment} onDelete={onDelete} />
  );
};

export default withRouter(
  withRemoteDataAndSpinner(CommentsWrapper, (router) =>
    useLoadAll({
      comments: () => commentsService.getLessonComments(router.params.lessonId),
    })
  )
);
