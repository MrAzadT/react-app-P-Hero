import "./SideBar.css";
import laptop from "../img/laptop.jpg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={laptop} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          minima, sapiente in eum dolorum aut ,
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-facebook-square"></i>
          <i className=" sidebarIcon fab fa-twitter"></i>
          <i className=" sidebarIcon fab fa-linkedin"></i>
          <i className=" sidebarIcon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
