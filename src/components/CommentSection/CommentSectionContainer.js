// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const comments = []

  props.comments.forEach( (comment, i) => {
    comments.push(
      <Comment comment={comment} key={i}/> 
    )
  });
  return (
    <div>
      { comments }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
