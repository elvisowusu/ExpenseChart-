import React,{useReducer} from "react";
import { Project } from "./assets/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
