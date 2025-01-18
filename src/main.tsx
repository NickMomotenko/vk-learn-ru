import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter
    basename={
      window.location.pathname.split("/").slice(1, 2).join("/")
        ? `/${window.location.pathname.split("/").slice(1, 2).join("/")}`
        : ""
    }
  >
    <App />
  </BrowserRouter>
);
