import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="PostImg"
        src="https://res.cloudinary.com/abidazad/image/upload/v1632756323/kids_fu67en.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 h ago</span>
      </div>
    </div>
  );
}
