import React from "react";
import { Project } from "./assets/Project";
import { Form } from "./assets/Form"; 
import { Upgrade } from "./assets/Upgrade";


function App() {
  return (
      <div className="relative">
        <button className="absolute top-0 right-0 hover:text-Softred">try out my updated version</button>
        <Project/>
        <Form/>
        <Upgrade/>
      </div>
      );
}

export default App;
