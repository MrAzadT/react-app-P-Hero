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
        <h1 className="singlePostTitle">
          ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className=" singlePostIcon far fa-edit"></i>
            <i className=" singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <b>Azad</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
