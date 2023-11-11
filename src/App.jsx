import { BsCircle } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col items-center">
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
        <div className="flex">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">4</div>
          <div className="">5</div>
          <div className="">6</div>
          <div className="">7</div>
        </div>
      </div>
    </div>
  );
}

export default App;
