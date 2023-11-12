import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-Cream">
      <div className="flex items-center bg-Softred">
        <div>
          <p className="text-">My balance</p>
          <p className="text-white">$921.48</p>
        </div>
        <div className="relative flex justify-center">
          <BsCircle className="text-white h-[1.8rem] w-[2rem]"/>
          <BsFillCircleFill className="h-[1.8rem] w-[2rem]"/>
        </div>
      </div>
      <div className="bg-white">
        <h1 className="text-Darkbrown">Spending - Last 7 days</h1>
        <div className="flex justify-evenly">
          <div className="bg-Softred hover:bg-Verypaleorange">mon</div>
          <div className="bg-Softred">tue</div>
          <div className="bg-Cyan">wed</div>
          <div className="bg-Softred">thu</div>
          <div className="bg-Softred">fri</div>
          <div className="">sat</div>
          <div className="bg-Softred">sun</div>
        </div>
        <div className="flex justify-evenly"><p className="text-Mediumbrown">mon</p> <p className="text-Mediumbrown">tue</p> <p className="text-Mediumbrown">thu</p> <p className="text-Mediumbrown">fri</p> <p className="text-Mediumbrown">sat</p> <p className="text-Mediumbrown">sun</p></div>
        <hr className="border-none h-[0.04rem] bg-Cream"/>
        <p className="text-Mediumbrown">Total this month</p>
        <div>
          <p className="text-Darkbrown">$478.33</p> <div><p className="text-Darkbrown">+2.4%</p><p className="text-Mediumbrown">from last month</p></div></div>
      </div>
    </div>
  );
}

export default App;
