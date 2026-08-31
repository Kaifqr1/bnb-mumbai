import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./burger-motion.css";
import "./premium-motion.css";
import "./three-d-motion.css";

function MotionShell() {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      const hero = Math.max(-130, scrollY * -0.16);
      const burger = Math.max(-90, scrollY * -0.08);
      const mobileBurger = Math.max(-42, scrollY * -0.028);
      const rotate = Math.max(-18, Math.min(18, scrollY * 0.045));
      doc.style.setProperty("--scroll-y", `${scrollY}px`);
      doc.style.setProperty("--scroll-progress", `${progress}`);
      doc.style.setProperty("--hero-shift", `${hero}px`);
      doc.style.setProperty("--burger-shift", `${burger}px`);
      doc.style.setProperty("--burger-mobile-shift", `${mobileBurger}px`);
      doc.style.setProperty("--burger-rotation", `${rotate}deg`);
      doc.style.setProperty("--three-d-depth", `${Math.min(1, scrollY / Math.max(1, window.innerHeight * 2))}`);
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
      <div className="bnb-3d-stage" aria-hidden="true">
        <div className="three-d-shadow" />
        <div className="three-d-burger">
          <div className="burger-layer bun-top"><i className="sesame s1"/><i className="sesame s2"/><i className="sesame s3"/><i className="sesame s4"/><i className="sesame s5"/></div>
          <div className="burger-layer lettuce" />
          <div className="burger-layer cheese"><span /></div>
          <div className="burger-layer patty" />
          <div className="burger-layer cheese cheese-lower"><span /></div>
          <div className="burger-layer lettuce lettuce-lower" />
          <div className="burger-layer bun-bottom" />
        </div>
        <span className="three-d-orbit orbit-a" />
        <span className="three-d-orbit orbit-b" />
        <span className="three-d-dot dot-a" />
        <span className="three-d-dot dot-b" />
        <span className="three-d-dot dot-c" />
      </div>
      <div className="bnb-floating-burger" aria-hidden="true"><span className="burger-orbit orbit-one" /><span className="burger-orbit orbit-two" /><span className="burger-glow" /><span className="burger-emoji">🍔</span></div>
      <div className="bnb-scroll-progress" aria-hidden="true" />
      <App />
    </>
  );
}

createRoot(document.getElementById("root")!).render(<StrictMode><MotionShell /></StrictMode>);
