import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useLoadAll } from "hooks/useLoadAll";
import { IPost } from "interfaces/entities/post.interface";
import postsService from "services/postsService";
import { BlogPreview } from "../../components/BlogPreview/BlogPreview";

interface BlogProps {
  data: { posts: IPost[] };
}
export const Blog: React.FC<BlogProps> = ({ data: { posts } }) => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto mt-10">
      {posts
        .filter((x) => x.status === "active")
        .map((post) => (
          <BlogPreview post={post} key={post.id} />
        ))}
    </div>
  );
};

export default withRemoteDataAndSpinner(Blog, () => {
  return useLoadAll({
    posts: postsService.getAll,
  });
});
