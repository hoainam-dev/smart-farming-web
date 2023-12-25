import "./ManualPump.css";

function ManualPump({ title, image }) {
  return (
    <div className="box-container">
      <div className="top">
        <div className="header">
          <p>{title}</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="center">
        <div className="toggle-light">
          <span>Light Status</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div className="bottom">
        <div className="toggle-ceiling">
          <span>Ceiling lights</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ManualPump;
