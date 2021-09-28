import React from "react";
import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://res.cloudinary.com/abidazad/image/upload/v1632756323/kids_fu67en.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">ipsum dolor sit amet.</h1>
        <div className="singlePostEdit">
          <i class="far fa-edit"></i>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
