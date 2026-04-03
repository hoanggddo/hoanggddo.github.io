// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// Use /wii-portfolio-main only in production (GitHub Pages)
const basename = import.meta.env.PROD ? "/wii-portfolio-main" : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
);