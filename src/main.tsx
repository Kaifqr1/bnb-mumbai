import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";
import "./styles.css";
import "./burger-motion.css";

AOS.init({ duration: 900, once: true, offset: 80, easing: "ease-out-cubic" });

function MotionShell() {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      doc.style.setProperty("--scroll-y", `${window.scrollY}px`);
      doc.style.setProperty("--scroll-progress", `${progress}`);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="bnb-floating-burger" aria-hidden="true">
        <span className="burger-orbit orbit-one" />
        <span className="burger-orbit orbit-two" />
        <span className="burger-glow" />
        <span className="burger-emoji">🍔</span>
      </div>
      <div className="bnb-scroll-progress" aria-hidden="true" />
      <App />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode><MotionShell /></StrictMode>,
);
