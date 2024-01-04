import AirConditioner from "../air-conditioner/AirConditioner";
import Manual from "../manual/Manual";
import Pump from "../pump/Pump";
import Template from "../temperature-prediction/Template";

function Content() {
  return (
    <div className="grid xl:grid-cols-4 gap-4 pt-40 sm:grid-cols-2">
      <AirConditioner />
      <Manual />
      <Pump />
      <Template />
    </div>
  );
}

export default Content;
