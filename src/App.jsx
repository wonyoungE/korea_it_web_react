import "./App.css";
import BasicJsx from "./components/BasicJsx/BasicJsx";
import BasicReact from "./components/BasicReact/BasicReact";
import BasicProps from "./components/BasicProps/BasicProps";
import CountState from "./components/BasicState/CountState/CountState";
import Calculator from "./components/Caculator/Calculator";
import InputState1 from "./components/BasicState/InputState1/InputState1";
import InputState2 from "./components/BasicState/InputState2/InputState2";
import InputState3 from "./components/BasicState/InputState3/InputState3";
import InputState4 from "./components/BasicState/InputState4/InputState4";
import DomRef from "./components/DomRef/DomRef";
import Render from "./components/LifeCycle/Render";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import LifeCycleApp from "./components/LifeCycle/LifeCycleApp";

// 함수
// App()은 main.jsx가 root div에 넣어줬움
function App() {
  return (
    <>
      {/* <BasicReact /> */}
      {/* <BasicJsx /> */}
      {/* <BasicProps /> */}
      {/* <CountState/> */}
      {/* <Calculator></Calculator> */}
      {/* <InputState1></InputState1> */}
      {/* <InputState2></InputState2> */}
      {/* <InputState3 /> */}
      {/* <InputState4></InputState4> */}
      {/* <DomRef /> */}
      {/* <Render /> */}
      <LifeCycleApp />
    </>
  );
}

export default App;
