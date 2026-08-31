import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";
import "./styles.css";
import "./burger-motion.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: "ease-out-cubic"
});

function MotionShell() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => root.style.setProperty("--scroll-y", `${window.scrollY}px`);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bnb-floating-burger" aria-hidden="true">
        <span className="burger-glow" />
        <span className="burger-emoji">🍔</span>
      </div>
      <div className="bnb-scroll-progress" aria-hidden="true" />
      <App />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionShell />
  </StrictMode>,
);
