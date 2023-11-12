import React,{useReducer} from "react";
import { Project } from "./assets/Project";
import { Form } from "./assets/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/Form"  element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
