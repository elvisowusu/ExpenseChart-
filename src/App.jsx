import React from "react";
import { Project } from "./assets/Project";
import { Form } from "./assets/Form";
import { Upgrade } from "./assets/Upgrade";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Upgrade" element={<Upgrade />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
