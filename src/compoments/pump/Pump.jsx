import Image from "../../assets/images/pump.png";

import React, { useEffect, useState } from "react";
import { changeDeviceStatusAPI } from "../../redux/deviceAPI";
import { useDispatch } from "react-redux";

function Pump({ pump, status }) {
  const [topic, setTopic] = useState(pump.topic);
  const [isStatus, isSetStatus] = useState(status);

  const dispatch = useDispatch();

  const ChangePumpStatus = async (id,newSatus) => {
    // e.preventDefault();
    const data = {
      topic: topic,
      status: newSatus,
    };
    console.log("data" + data.status);
    changeDeviceStatusAPI(dispatch, id, data);
  };

  const togglePumpButton = async (statusChange) => {
    const newSatus = statusChange === "ON" ? "OFF" : "ON";
    isSetStatus(newSatus);
    ChangePumpStatus(pump.id,newSatus);
  };

  return (
    <div className="box-container ">
      <div className="top frame-body p-4 rounded-xl shadow-lg max-w-sm">
        <div className=" flex justify-between items-center ">
          <p className="text-base font-bold">Máy bơm</p>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => togglePumpButton(isStatus)}
              checked={isStatus === "ON" ? true : false}
            />
            <span className={`slider round ${isStatus ? "active" : ""}`}></span>
          </label>
        </div>
        <img src={Image} alt="" className="w-[120px] h-[120px] mx-auto my-5" />
      </div>
      <div className="bottom frame-body p-4 mt-4 rounded-xl shadow-lg max-w-sm">
        <div className=" flex justify-between items-center ">
          <p className="text-base font-bold">Chế độ tự động</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <img src={Image} alt="" className="w-[170px] h-[130px] mx-auto my-2" />
      </div>
    </div>
  );
}

export default Pump;
