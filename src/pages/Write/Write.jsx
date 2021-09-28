import "./Write.css";

function Write() {
  return (
    <div className="Write">
      <img
        className="writeImg"
        src="https://res.cloudinary.com/abidazad/image/upload/v1632834436/bg_xikpkv.jpg"
        alt=""
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="write your Story...."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
