import "./AirConditioner.css";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import React, { useEffect, useState } from "react";
import { changeDeviceStatusAPI } from "../../redux/deviceAPI";
import { useDispatch } from "react-redux";
function AirConditioner({pan}) {
   const [topic, setTopic] = useState(pan.topic);
  const [isStatus, isSetStatus] = useState(pan.status);

  const dispatch = useDispatch();
  useEffect(() => {
    isSetStatus(pan.status);
  }, [pan.status]);
  
  const ChangePanStatus = async (id,newSatus) => {
    // e.preventDefault();
    const data = {
      topic: topic,
      status: newSatus,
    };
    console.log("data" + data.status);
    changeDeviceStatusAPI(dispatch, id, data);
  };

  const togglePanButton = async (statusChange) => {
    const newSatus = statusChange === "ON" ? "OFF" : "ON";
    isSetStatus(newSatus);
    ChangePanStatus(pan.id,newSatus);
  };
  return ( 
    <div className="p-4 rounded-xl shadow-lg max-w-sm frame-body">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium text-white">Điều khiển nhiệt</h2>
        <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => togglePanButton(isStatus)}
              checked={isStatus === "ON" ? true : false}
            />
            <span className={`slider round ${isStatus ? "active" : ""}`}></span>
          </label>
      </div>
      <div className="mt-4 flex justify-around">
        <div>
          <img src={Image1} className="w-12" />
          <p className="text-white text-lg ">24%</p>
        </div>
        <div>
          <img src={Image2} className="w-12" />
          <p className="text-white text-sm">24°C</p>
        </div>

        <div>
          <img src={Image3} className="w-12" />
          <p className="text-white text-sm">1023%</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-white text-sm mb-2 ">
          <p>Chế độ</p>
          <p>24%</p>
        </div>
        <div className="flex justify-between text-white text-sm mb-2">
          <p>Bật tự động</p>
          <p>24°C</p>
        </div>

        <div className="flex justify-between text-white text-sm">
          <p>Tắt tự động</p>
          <p>1023%</p>
        </div>
      </div>
    </div>
  );
}

export default AirConditioner;
