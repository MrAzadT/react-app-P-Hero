import { Link } from "react-router-dom";
import "./TopBar.css";

function TopBar() {
  const user = true;
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
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            CONTACT{" "}
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://res.cloudinary.com/abidazad/image/upload/v1632753929/Abid_1_fbusav.jpg"
            alt="img"
          />
        ) : (
          <>
            <Link className="link" to="/">
              LOGIN
            </Link>
            <Link className="link" to="/">
              REGISTER
            </Link>
          </>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
