//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data.js'

const PostsPage = () => {
  // set up state for your data
  const posts = [];

  dummyData.forEach( (post, i) => {
      posts.push(
        <Post post={post} key={i} />
      )
  });

  return (
    <div className="posts-container-wrapper">
      {posts}
    </div>
  );
};

export default PostsPage;
