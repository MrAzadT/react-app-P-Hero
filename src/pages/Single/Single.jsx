import React from "react";
import "./Single.css";
import SideBar from "../../sidebar/SideBar";
import SinglePost from "../../SinglePost/SinglePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default Single;
