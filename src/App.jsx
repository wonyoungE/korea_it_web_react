// import한 각 컴포넌트에 css가 import되어있으면 걔가 적용됨..
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
import "./App.css";
import Effect1 from "./components/Effect/Effect1/Effect1";
import Effect2 from "./components/Effect/Effect2/Effect2";
import FruitsFilter from "./components/Practice/FruitsFilter/FruitsFilter";
import UserProfile from "./components/Practice/UserProfile/UserProfile";
import SignUpForm from "./components/Practice/SignupForm/SignupForm";
import Emotion1 from "./components/Emotion/Emotion1/Emotion1";
// import Emotion2 from "./components/Emotion/Emotion2/Emotion2";
// import Index from "./components/TodoList/pages";

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
      {/* <LifeCycleApp /> */}
      {/* <Effect1 /> */}
      {/* <Effect2 /> */}
      {/* <FruitsFilter /> */}
      {/* <UserProfile /> */}
      {/* <SignUpForm /> */}
      <Emotion1 />
      {/* <Emotion2 /> */}
      {/* <Index /> */}
    </>
  );
}

export default App;
