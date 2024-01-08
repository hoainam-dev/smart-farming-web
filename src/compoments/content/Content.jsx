import { useEffect } from "react";
import AirConditioner from "../air-conditioner/AirConditioner";
import Manual from "../manual/Manual";
import Pump from "../pump/Pump";
import Template from "../temperature-prediction/Template";
import { deviceAPI } from "../../redux/deviceAPI";
import { useDispatch, useSelector } from "react-redux";

function Content() {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.device.device.device?.devices);

  // const pump = devices.filter(device => device.topic === "PUMP").includes

  useEffect(() => {
    const fetchData = async () => {
      await deviceAPI(dispatch);
    };

    fetchData();
    // Optionally, you can use a timer to periodically fetch data
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="grid gap-4 pt-40 xl:grid-cols-3 sm:grid-cols-2">
      {/* <Manual /> */}
      {devices
        ?.filter((item) => ["PUMP"].includes(item.topic))
        .map((device) => (
          <div>
            <Pump pump={device} status={device.status} />
          </div>
        ))}
      {devices
        ?.filter((item) => ["Pan"].includes(item.topic))
        .map((device) => (
          <div>
            <AirConditioner pan={device} />
          </div>
        ))}
      <Template />
    </div>
  );
}

export default Content;
