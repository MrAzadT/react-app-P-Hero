import "./Write.css";

function Write() {
  return (
    <div className="Write">
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <input type="file" id="fileInput" />
          <input type="text" placeholder="Title" />
        </div>
      </form>
    </div>
  );
}

export default Write;
