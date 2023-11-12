import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.day]: action.value };
    default:
      return state;
  }
};

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, {
    mon: "$0.00",
    tue: "$0.00",
    wed: "$0.00",
    thu: "$0.00",
    fri: "$0.00",
    sat: "$0.00",
    sun: "$0.00",
  });
  const update = (day, value) => {
    dispatch({ type: "update", day, value });
  };

  const schema = yup.object().shape({
    monday: yup.number().required(),
    tuesday: yup.number().required(),
    wednessday: yup.number().required(),
    thursday: yup.number().required(),
    friday: yup.number().required(),
    saturday: yup.number().required(),
    sunday: yup.number().required(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    update("mon", data.monday);
    update("tue", data.tuesday);
    update("wed", data.wednessday);
    update("thu", data.thursday);
    update("fri", data.friday);
    update("sat", data.saturday);
    update("sun", data.sunday);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">
            Monday
          </label>
          <input
            className={`border border-Lightgrayishviolet outline-none focus-border-Darkgrayishviolet ${
              errors.monday ? "border-inputerrors focus-border-inputerrors" : ""
            } h-[2rem] md:h-[3rem] w-[6.1rem] rounded-md text-[1.6rem] md:text-[1.4rem] placeholder:text-[1.6rem] md:placeholder:text-[1.5rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] md:px-0 md:pl-2 md:pb-2  md:w-[5rem]`}
            type="number"
            {...register("name")}
          />
        </div>
        <div>
          <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">
            Tuesday
          </label>
          <input type="number" {...register("name")} />
        </div>
        <div>
          <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">
            Wednessday
          </label>
          <input type="number" {...register("name")} />
        </div>
        <div>
          <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">
            Thursday
          </label>
          <input type="number" {...register("name")} />
        </div>
        <div>
          <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">
            Friday
          </label>
          <input type="number" {...register("name")} />
        </div>
        <div>
          <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">
            Saturday
          </label>
          <input type="number" {...register("name")} />
        </div>
        <div>
          <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">
            Sunday
          </label>
          <input type="number" {...register("name")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Update mon={state.mon} tue={state.tue} wed={state.wed} thu={state.thu} fri={state.fri} sat={state.sat} sun={state.sun}/>
    </div>
  );
};


export const Update =({mon,tue,wed,thu,fri,sat,sun})=>{
    return(
        <div className="flex flex-col justify-center items-center h-[110vh] md:h-[100vh] bg-Cream font-DMsans relative">
        <div className="flex justify-between items-center bg-Softred rounded-lg p-6 lg:h-[5.5rem] lg:rounded-xl w-[23rem] lg:w-[30rem]">
          <div>
            <p className="text-Cream text-sm">My balance</p>
            <p className="text-white font-bold text-[1.5rem]">$921.48</p>
          </div>
          <div className="relative flex justify-center">
            <BsCircle className="text-white h-[2.7rem] w-[2.7rem] absolute right-6" />
            <BsFillCircleFill className="h-[2.7rem] w-[2.7rem]" />
          </div>
        </div>
        <div className="rounded-lg lg:rounded-xl bg-white p-6 w-[23rem] lg:w-[30rem] mt-4 py-6">
          <h1 className="text-Darkbrown font-bold text-[1.5rem] lg:text-[1.9rem]">
            Spending - Last 7 days
          </h1>
          <div className="flex justify-evenly gap-[0.9rem] items-baseline mt-[3.9rem] lg:mt-[3.5rem]">
            <div className="flex flex-col items-center gap-2">
              <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[3.6rem] rounded-sm cursor-pointer"></p>
              <p className="text-Mediumbrown text-sm">mon</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[7.6rem] rounded-sm cursor-pointer"></p>
              <p className="text-Mediumbrown text-sm">tue</p>
            </div>
            <div className="flex flex-col items-center gap-2 relative">
              <p className="peer/wed bg-Cyan hover:bg-cyan-200  w-[2.1rem] lg:w-[2.7rem] h-[13rem] rounded-sm cursor-pointer"></p>
              <p className="text-Mediumbrown text-sm">wed</p>
              <p className="bg-Darkbrown invisible peer-hover/wed:visible text-sm text-white p-[0.4rem] lg:p-[0.5rem] rounded-md absolute bottom-[15.3rem]">
                $52.36
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="peer/thu bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[6.6rem] rounded-sm cursor-pointer"></p>
              <p className="text-Mediumbrown text-sm">thu</p>
              <p className="peer-hover/thu:visible invisible bg-Darkbrown text-sm text-white p-[0.4rem] lg:p-[0.5rem] rounded-md absolute bottom-[25rem]">
                $31.07
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[4.9rem] rounded-sm cursor-pointer"></p>
              <p className="text-Mediumbrown text-sm">fri</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[9.6rem] rounded-sm cursor-pointer"></p>
              <p className="text-Mediumbrown text-sm">sat</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="bg-Softred hover:bg-red-300 w-[2.1rem] lg:w-[2.7rem] h-[5.6rem] rounded-sm cursor-pointer"></p>
              <p className="text-Mediumbrown text-sm">sun</p>
            </div>
          </div>
          <hr className="border-none h-[0.1rem] bg-Cream my-[1.6rem]" />
          <p className="text-Mediumbrown text-sm">Total this month</p>
          <div className="flex justify-between items-center">
            <p className="text-Darkbrown font-bold text-[1.95rem]">$478.33</p>{" "}
            <div className="flex flex-col items-end">
              <p className="text-Darkbrown font-bold">+2.4%</p>
              <p className="text-Mediumbrown text-sm">from last month</p>
            </div>
          </div>
        </div>
      </div>
    )
}