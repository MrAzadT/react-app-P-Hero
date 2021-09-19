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
          src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="img"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
