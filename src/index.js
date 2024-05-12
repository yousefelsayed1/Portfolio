import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import ActiveContextProvider from "./context/ActiveContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveContextProvider>
      <App />
    </ActiveContextProvider>
  </React.StrictMode>
);
