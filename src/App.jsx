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
        <div className="flex justify-evenly gap-[0.7rem] items-baseline">
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.3rem] h-[4rem] rounded-md"></p><p className="text-Mediumbrown">mon</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.3rem] h-[8rem] rounded-md"></p><p className="text-Mediumbrown">tue</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Cyan hover:bg- w-[2.3rem] h-[13rem] rounded-md"></p><p className="text-Mediumbrown">wed</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.3rem] h-[7rem] rounded-md"></p><p className="text-Mediumbrown">thu</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.3rem] h-[5.3rem] rounded-md"></p><p className="text-Mediumbrown">fri</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.3rem] h-[10rem] rounded-md"></p><p className="text-Mediumbrown">sat</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.3rem] h-[6rem] rounded-md"></p><p className="text-Mediumbrown">sun</p>
          </div>
        </div>
        <hr className="border-none h-[0.04rem] bg-Cream"/>
        <p className="text-Mediumbrown">Total this month</p>
        <div>
          <p className="text-Darkbrown">$478.33</p> <div><p className="text-Darkbrown">+2.4%</p><p className="text-Mediumbrown">from last month</p></div></div>
      </div>
    </div>
  );
}

export default App;
