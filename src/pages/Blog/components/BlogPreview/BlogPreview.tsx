import { HtmlView } from "components/HtmlView/HtmlView";
import { toFullDateName } from "helpers/dateHelper";
import { IPost } from "interfaces/entities/post.interface";
import { Link } from "react-router-dom";

interface Props {
  post: IPost;
}
export const BlogPreview: React.FC<Props> = ({ post }) => {
  const { id, name, mainImage, author, createdAt, text } = post;

  return (
    <Link className="mb-10 w-full max-w-md mx-auto cursor-pointer" to={`${id}`}>
      <div className="mb-2 hover:opacity-90 transition duration-300 ease-in-out">
        <HtmlView>{mainImage}</HtmlView>
      </div>
      <div className="post-preview">
        <div className="flex">
          <span className="text-sm mr-3 text-slate-400">
            {" "}
            {toFullDateName(createdAt)}
          </span>
          <p className="text-xs px-[5px] py-[1px] rounded-md bg-slate-100">
            Java Script
          </p>
        </div>
        <div className="post__content">
          <div className="m-b-8">
            <span className="text-base font-semibold text-gray-800">
              {name}
            </span>
            <p
              className={`${name.length > 48 ? "2xl:line-clamp-3" : "2xl:line-clamp-4"
                } line-clamp-3 mt-2 mb-4  text-sm`}
            >
              {text}
            </p>
          </div>

          <div className="post__meta flex-row flex-between flex-center">
            <div className="flex-row">
              <div className="m-r-16 flex">
                <img
                  src="./avatar.jpeg"
                  alt="avatar"
                  className="w-10 rounded-full mr-3"
                />
                <div>
                  <span className="text-sm">{author.name}</span> <br />
                  <span className="text-xs">Director of product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
