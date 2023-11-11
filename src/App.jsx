import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <div>
        <div className="flex">
          <p>My balance</p>
          <h1>$921.48</h1>
        </div>
        <div>
          <BsCircle />
          <BsFillCircleFill />
        </div>
      </div>
    </div>
  );
}

export default App;
