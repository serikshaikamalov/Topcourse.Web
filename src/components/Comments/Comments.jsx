import { withUser } from "hoc/withUser";
import React from "react";
import { CommentForm } from "./CommentForm/CommentForm";
import { StyledCommentItem } from "./CommentItem/CommentItem";

const Comments = ({ comments, addComment, onDelete, user }) => {
  return (
    <>
      <section className="comments m-t-60 container mx-auto">
        <h2 className="m-b-20 m-t-32">Комментариялар:</h2>

        <div className="commentForm m-b-32">
          <CommentForm onSubmit={addComment} user={user} />
        </div>
        {comments.map((c) => {
          return (
            <StyledCommentItem
              comment={c}
              key={c.id}
              user={user}
              onDelete={onDelete}
            ></StyledCommentItem>
          );
        })}
      </section>
    </>
  );
};

export default withUser(Comments, false);
