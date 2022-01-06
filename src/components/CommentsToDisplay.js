import React from "react";
import { CommentItem , CommentTitle, CommentEmail, CommentContent } from "./CommentsToDisplay.styles";

//declare a variable for the main color
const theme = {
  colorGrey: "#7d7d7d"
};

// Rendering the current posts season passed by according to the button press in the Comments.js file
const CommentsToDisplay = ({ theDisplayedPosts }) => {
  return (
    <>
      {theDisplayedPosts.map((comment) => (
        <CommentItem key={comment.id}>
          <CommentTitle >{comment.name}</CommentTitle>
          <CommentEmail theme={theme}>{comment.email}</CommentEmail>
          <CommentContent theme={theme} key={comment.id}>{comment.body}</CommentContent>
        </CommentItem>
      ))}
    </>
  );
};

export default CommentsToDisplay;
