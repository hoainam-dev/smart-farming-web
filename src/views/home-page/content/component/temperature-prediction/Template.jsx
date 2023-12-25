import "./Template.css";
import Image from "../../../../../assets/images/image4.png";
function Template() {
  return (
    <div className="template">
      <div className="top">
        <div className="header">
          <p>Dự đoán nhiệt độ</p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-content">
          <div className="left-content">
            <img src={Image} alt="" />
          </div>
          <div className="right-content">
            <span className="level">Nutrient Level</span>
            <span className="quantity">5 Greams left</span>
            <span className="refill">Refill in 2 days</span>
            <div className="time">
              12/12/2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
