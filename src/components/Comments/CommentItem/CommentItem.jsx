import { Avatar } from "components/Avatar/Avatar";
import { fromNow } from "helpers/dateHelper";
import styled from "styled-components";

const CommentItem = ({ comment, className, user, onDelete }) => {
  console.log(user);

  return (
    <div className={className}>
      <div className="comment flex-row m-b-32">
        <div className="left m-r-8">
          <Avatar width="48px" />
        </div>
        <div className="right">
          <div className="comment__author">{comment?.author?.name}</div>
          <div className="comment__date">{fromNow(comment?.createdAt)}</div>
          <div className="comment__text">{comment?.text}</div>
          {user && user.id === comment.authorId && (
            <div
              className="comment__operations cursor m-t-8 color-gray"
              onClick={() => onDelete(comment.id)}
            >
              <div className="fs-12 c">Комментті өшіру</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const StyledCommentItem = styled(CommentItem)`
  .comment {
  }

  .comment__author {
    color: rgb(67, 110, 189) !important;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .comment__date {
    font-size: 12px;
    margin-bottom: 12px;
  }
  .comment__text {    
    line-height: 21px;
  }
`;
