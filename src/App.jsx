import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col justify-center items-center md:h-[100vh]">
      <div className="flex items-center bg-Softred">
        <div>
          <p className="">My balance</p>
          <p className="">$921.48</p>
        </div>
        <div className="relative flex justify-center">
          <BsCircle className="text-white h-[1.8rem] w-[2rem]"/>
          <BsFillCircleFill className="h-[1.8rem] w-[2rem]"/>
        </div>
      </div>
      <div>
        <h1>Spending - Last 7 days</h1>
        <div className="flex justify-evenly">
          <div className="">mon</div>
          <div className="">tue</div>
          <div className="">wed</div>
          <div className="">thu</div>
          <div className="">fri</div>
          <div className="">sat</div>
          <div className="">sun</div>
        </div>
        <div className="flex justify-evenly"><p>mon</p> <p>tue</p> <p>thu</p> <p>fri</p> <p>sat</p> <p>sun</p></div>
        <hr className="border-none h-[0.04rem] bg-Cream"/>
      </div>
    </div>
  );
}

export default App;
