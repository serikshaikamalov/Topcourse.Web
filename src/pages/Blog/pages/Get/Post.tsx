import { HtmlView } from "components/HtmlView/HtmlView";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import { IPost } from "interfaces/entities/post.interface";

import postsService from "services/postsService";
import CommentsWrapper from "../../components/CommentsWrapper/CommentsWrapper";

interface Props {
  data: IPost;
  router: any;
}
const Post = ({
  data,
  router: {
    params: { id: postId },
  },
}: Props) => {
  return (
    <>
      <div className="container mt-4 mx-auto">
        <div>
          <HtmlView>{data.mainImage}</HtmlView>
        </div>
        <h1>{data.name}</h1>
        {data.mainImage && (
          <div>
            <img src={data.mainImage} alt="" />
          </div>
        )}
        <HtmlView>{data.text}</HtmlView>
      </div>

      <CommentsWrapper postId={postId} />
    </>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(Post, (router: any) => {
    return useRemoteResource(postsService.get, router.params.id);
  })
);
