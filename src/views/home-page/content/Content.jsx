import "./Content.css";
import AirConditioner from "./component/air-conditioner/AirConditioner";
import Manual from "./component/manual/Manual";
import Pump from "./component/pump/Pump";
import Template from "./component/temperature-prediction/Template";

function Content() {
  return (
    <div className="body-container">
      <AirConditioner className="air-conditioner" />
      <Manual className="manual" />
      <Pump className="pump" />
      <Template className="teamplete" />
    </div>
  );
}

export default Content;
