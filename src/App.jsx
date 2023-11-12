import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-[110vh] md:h-[100vh] bg-Cream font-DMsans">
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
        <div className="flex justify-evenly gap-[0.7rem] items-baseline mt-[3.9rem]">
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg- w-[2.1rem] h-[3.6rem] rounded-sm"></p><p className="text-Mediumbrown text-sm">mon</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.1rem] h-[7.6rem] rounded-sm"></p><p className="text-Mediumbrown text-sm" >tue</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Cyan hover:bg- w-[2.1rem] h-[13rem] rounded-sm"></p><p className="text-Mediumbrown text-sm" >wed</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.1rem] h-[6.6rem] rounded-sm"></p><p className="text-Mediumbrown text-sm" >thu</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.1rem] h-[4.9rem] rounded-sm"></p><p className="text-Mediumbrown text-sm" >fri</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.1rem] h-[9.6rem] rounded-sm"></p><p className="text-Mediumbrown text-sm" >sat</p>
          </div>
          <div className="flex flex-col items-center gap-2">
          <p className="bg-Softred hover:bg-Verypaleorange w-[2.1rem] h-[5.6rem] rounded-sm"></p><p className="text-Mediumbrown text-sm" >sun</p>
          </div>
        </div>
        <hr className="border-none h-[0.1rem] bg-Cream my-[1.6rem]"/>
        <p className="text-Mediumbrown">Total this month</p>
        <div className="flex justify-between items-center">
          <p className="text-Darkbrown font-bold text-[1.95rem]">$478.33</p> <div className="flex flex-col items-end"><p className="text-Darkbrown font-bold">+2.4%</p><p className="text-Mediumbrown">from last month</p></div></div>
      </div>
    </div>
  );
}

export default App;
