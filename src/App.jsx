import React,{useReducer} from "react";
import { Project } from "./assets/Project";
import { Form } from "./assets/Form";
import { Upgrade } from "./assets/Upgrade";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const reducer =(state,action)=>{
    switch(action.type){
        case 'update':
          return {...state,[action.day]:action.value};
        default:
            return state
    }
}

function App() {
  const [state,dispatch]=useReducer(reducer,{mon:"$0.00",tue:"$0.00",wed:"$0.00",thu:"$0.00",fri:"$0.00",sat:"$0.00",sun:"$0.00"});
  const update=(day,value)=>{
    dispatch({type:"update",day,value});
  }
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/Form"  element={<Form updateContent={update}/>} />
          <Route path="/Upgrade" 
            element={<Upgrade mon={state.mon} tue={state.tue} wed={state.wed} thu={state.thu} fri={state.fri} sat={state.sat} sun={state.sun}/>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
