// import "./Template.css";
import img  from "../../assets/images/image4.png";

function Template() {
  return (
    <div className=" rounded-lg  p-4 cursor-pointer ">
      <div className="h-3/5 frame-body p-4 rounded-xl shadow-lg max-w-sm">
        <p className="text-xl font-bold">Dự đoán nhiệt độ</p>
      </div>
      <div className="mt-4 frame-body p-4 rounded-xl shadow-lg max-w-sm">
        <div className="flex items-center">
          <img src={img} className="w-auto" alt="..." />

            <div className="ml-6 flex flex-col gap-1 text-white">
            <span className="text-lg font-bold">Nutrient Level</span>
            <span>5 Greams left</span>
            <span>Refill in 2 days</span>
            
            <div className="inline-flex px-6 py-1 rounded-full bg-white/20 text-base font-bold">
              12/12/2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Template;
