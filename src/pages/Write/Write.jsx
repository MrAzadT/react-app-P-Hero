import "./Write.css";

function Write() {
  return (
    <div className="Write">
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="fas fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writeInput" />
        </div>
      </form>
    </div>
  );
}

export default Write;
