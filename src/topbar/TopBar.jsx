import "./TopBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <div className="topLeft">
        <i className=" topIcon fab fa-facebook-square"></i>
        <i className=" topIcon fab fa-twitter"></i>
        <i className=" topIcon fab fa-linkedin"></i>
        <i className=" topIcon fab fa-github-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://res.cloudinary.com/abidazad/image/upload/v1632753929/Abid_1_fbusav.jpg"
          alt="img"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
