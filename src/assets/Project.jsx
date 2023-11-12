import React from "react"
import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'


export const Project =()=>{
    const navigate = useNavigate();
    

    return(
        <div className="flex flex-col justify-center items-center h-[110vh] md:h-[100vh] bg-Cream font-DMsans relative">
            <button onClick={()=>{navigate("/Form")}} className="absolute top-4 right-4 hover:text-Softred">try out my updated version</button>
      <div className="flex justify-between items-center bg-Softred rounded-lg p-6 lg:h-[5.5rem] lg:rounded-xl w-[23rem] lg:w-[30rem]">
        <div>
          <p className="text-Cream text-sm">My balance</p>
          <p className="text-white font-bold text-[1.5rem]">$921.48</p>
        </div>
        <div className="relative flex justify-center">
          <BsCircle className="text-white h-[2.7rem] w-[2.7rem] absolute right-6"/>
          <BsFillCircleFill className="h-[2.7rem] w-[2.7rem]"/>
        </div>
      </div>
      <div className="rounded-lg lg:rounded-xl bg-white p-6 w-[23rem] lg:w-[30rem] mt-4 py-6">
        <h1 className="text-Darkbrown font-bold text-[1.5rem] lg:text-[1.9rem]">Spending - Last 7 days</h1>
        <div className="flex justify-evenly gap-[0.9rem] items-baseline mt-[3.9rem] lg:mt-[3.5rem]">
          <div className="flex flex-col items-center gap-2">
            <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[3.6rem] rounded-sm cursor-pointer"></p><p className="text-Mediumbrown text-sm">mon</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[7.6rem] rounded-sm cursor-pointer"></p><p className="text-Mediumbrown text-sm" >tue</p>
          </div>
          <div className="flex flex-col items-center gap-2 relative">
            <p className="peer/wed bg-Cyan hover:bg-cyan-200  w-[2.1rem] lg:w-[2.7rem] h-[13rem] rounded-sm cursor-pointer"></p><p className="text-Mediumbrown text-sm" >wed</p>
            <p className="bg-Darkbrown invisible peer-hover/wed:visible text-sm text-white p-[0.4rem] lg:p-[0.5rem] rounded-md absolute bottom-[15.3rem]">$52.36</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="peer/thu bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[6.6rem] rounded-sm cursor-pointer"></p><p className="text-Mediumbrown text-sm" >thu</p>
            <p className="peer-hover/thu:visible invisible bg-Darkbrown text-sm text-white p-[0.4rem] lg:p-[0.5rem] rounded-md absolute bottom-[22.9rem]">$31.07</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[4.9rem] rounded-sm cursor-pointer"></p><p className="text-Mediumbrown text-sm" >fri</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[9.6rem] rounded-sm cursor-pointer"></p><p className="text-Mediumbrown text-sm" >sat</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[5.6rem] rounded-sm cursor-pointer"></p><p className="text-Mediumbrown text-sm" >sun</p>
          </div>
        </div>
        <hr className="border-none h-[0.1rem] bg-Cream my-[1.6rem]"/>
          <p className="text-Mediumbrown text-sm">Total this month</p>
        <div className="flex justify-between items-center">
          <p className="text-Darkbrown font-bold text-[1.95rem]">$478.33</p> <div className="flex flex-col items-end"><p className="text-Darkbrown font-bold">+2.4%</p><p className="text-Mediumbrown text-sm">from last month</p></div></div>
      </div>
    </div>

    )
}