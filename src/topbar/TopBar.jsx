import "./TopBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <div className="topLeft">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github-square"></i>
      </div>
      <div className="topCenter">C</div>
      <div className="topRight">R</div>
    </div>
  );
}

export default TopBar;
