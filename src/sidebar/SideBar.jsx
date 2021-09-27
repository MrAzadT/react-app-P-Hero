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
        <span className=""> </span>
      </div>
    </div>
  );
}

export default SideBar;
