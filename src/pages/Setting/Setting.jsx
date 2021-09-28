import "./Setting.css";
import Sidebar from "../../sidebar/SideBar";
function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Acount</span>
          <span className="settingsDeleteTitle">Delete Acount</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://res.cloudinary.com/abidazad/image/upload/v1632834436/bg_xikpkv.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="mr.azad@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
