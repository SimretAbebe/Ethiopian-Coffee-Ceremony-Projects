import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Missing in your code
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
