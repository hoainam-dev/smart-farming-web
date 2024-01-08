import Image from "../../assets/images/manual.png";

function Manual() {

  return (
    <div className="box-container ">
      <div className="top frame-body p-4 rounded-xl shadow-lg max-w-sm h-3/5 ">
        <div className=" flex justify-between items-center ">
          <p className="text-base font-bold">Chế độ tự động</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <img src={Image} alt="" className="w-[10px] h-[130px] mx-auto my-2" />
      </div>
      <div className="center p-4 rounded-xl shadow-lg max-w-sm  frame-body mt-4">
        <div className="toggle-light flex justify-between items-center">
          <span className="text-base text-white">Light Status</span>

          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div className="bottom p-4 rounded-xl shadow-lg max-w-sm mt-4 frame-body">
        <div className="toggle-ceiling flex justify-between items-center">
          <span className="text-base text-white">Ceiling lights</span>

          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Manual;
