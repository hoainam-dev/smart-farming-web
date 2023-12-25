import "./AirConditioner.css";
import Image1 from "../../../../../assets/images/image1.png";
import Image2 from "../../../../../assets/images/image2.png";
import Image3 from "../../../../../assets/images/image3.png";

function AirConditioner() {
  return (
    <div className="air-container">
      <div className="header">
        <p>Điều khiển nhiệt</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="data">
        <div className="data-content">
          <img src={Image1} alt="" />
          <span>24%</span>
        </div>
        <div className="data-content">
          <img src={Image2} alt="" />
          <span>24C</span>
        </div>
        <div className="data-content">
          <img src={Image3} alt="" />
          <span>1023%</span>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <span>Chế độ</span>
          <span>24%</span>
        </div>
        <div className="footer-content">
          <span>Bật tự động</span>
          <span>24C</span>
        </div>
        <div className="footer-content">
          <span>Tắt tự động</span>
          <span>1023%</span>
        </div>
      </div>
    </div>
  );
}

export default AirConditioner;
