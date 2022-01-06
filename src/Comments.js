import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentsToDisplay from "./components/CommentsToDisplay";
import { LoadMoreBtn } from "./Comments.styles";


const commentsAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/comments",
});

//Page display settings
let postsPerPage = 20;
let commentCount = -20;
let isDone = true;

const CommentsData = (props) => {
  const [comments, setComments] = useState([]); //holding the comments
  const [currentPage, setCurrentPage] = useState(1); //holding the current season 


  //API Call , fetching the all comments
  useEffect(() => {
    async function getComments() {
      const response = await commentsAPI.get();
      setComments(response.data);
    }
    getComments();
  }, []);


  // Calculating the current season of displayed posts
  let lastLoadIndex = postsPerPage * currentPage;
  commentCount += postsPerPage;
  if(commentCount === comments.length) isDone = false;
  let theDisplayedPosts = comments.slice(0, lastLoadIndex)
  

//Return the current posts season and notify the user if reach the end
  return (
      <>
        {<CommentsToDisplay theDisplayedPosts={theDisplayedPosts} />}
        {!isDone && <h3>Hi, Comments has over :) 👋</h3>}
        {isDone && <LoadMoreBtn onClick={()=> setCurrentPage(currentPage+1)}>Load More</LoadMoreBtn>}
      </>
  )
};

export default CommentsData;
