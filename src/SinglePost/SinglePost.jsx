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
          ipsum dolor sit amet azad tamal.
          <div className="singlePostEdit">
            <i className=" singlePostIcon far fa-edit"></i>
            <i className=" singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <b>Azad</b>
          </span>
          <span className="singlePostAuDate"> 2 hour ago</span>
        </div>
        <p className="singlePostDis">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, nam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa
          quis odio. Temporibus est iure recusandae sed. Quis at magnam libero
          esse sed, optio dicta in repellendus exercitationem, ullam atque nobis
          dolor possimus quo. Modi eum aspernatur quae accusantium deserunt,
          ipsam unde ex velit nobis odit, nulla maiores error voluptatum? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa quis
          odio. Temporibus est iure recusandae sed. Quis at magnam libero esse
          sed, optio dicta in repellendus exercitationem, ullam atque nobis
          dolor possimus quo. Modi eum aspernatur quae accusantium deserunt,
          ipsam unde ex velit nobis odit, nulla maiores error voluptatum?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
