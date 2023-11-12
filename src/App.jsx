import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col md:justify-center items-center md:h-[100vh] bg-Cream font-DMsans">
      <div className="flex justify-between items-center bg-Softred rounded-lg p-6 w-[22rem]">
        <div>
          <p className="text-Cream">My balance</p>
          <p className="text-white font-bold text-[1.5rem]">$921.48</p>
        </div>
        <div className="relative flex justify-center">
          <BsCircle className="text-white h-[2.7rem] w-[2.7rem] absolute right-6"/>
          <BsFillCircleFill className="h-[2.7rem] w-[2.7rem]"/>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 w-[22rem] mt-4 py-6">
        <h1 className="text-Darkbrown font-bold text-[1.5rem]">Spending - Last 7 days</h1>
        <div className="flex justify-evenly gap-[0.7rem]">
          <div className="bg-Softred hover:bg-Verypaleorange w-[2.3rem] h-4"></div>
          <div className="bg-Softred w-[2.3rem]"></div>
          <div className="bg-Cyan w-[2.3rem]"></div>
          <div className="bg-Softred w-[2.3rem]"></div>
          <div className="bg-Softred w-[2.3rem]"></div>
          <div className="bg-Softred w-[2.3rem]"></div>
          <div className="bg-Softred w-[2.3rem]"></div>
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
