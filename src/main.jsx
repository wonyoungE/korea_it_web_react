import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // 콘솔에 두번 찍히는 이유 -> StrictMode
  // 없애도 됨
  // <StrictMode>
    <App />
  // </StrictMode>
);
