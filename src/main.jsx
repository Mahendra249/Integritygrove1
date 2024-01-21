import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//========= order is important ===========//
import "./styles/HomePage/HomePage.css";
// ======== providers and hooks =========//
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
