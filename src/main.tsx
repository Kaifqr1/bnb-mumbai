import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";
import "./styles.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: "ease-out-cubic"
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
