import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col ">
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
      <div>
        <h1>Spending - Last 7 days</h1>
        <div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default App;
