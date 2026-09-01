import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./burger-motion.css";
import "./premium-motion.css";

const imageFallback = (alt: string) => {
  const text = alt.toLowerCase();
  if (text.includes("pizza")) return "/menu/pizza.jpg";
  if (text.includes("fries") || text.includes("nachos")) return text.includes("nachos") ? "/menu/nachos.jpg" : "/menu/fries.jpg";
  if (text.includes("sandwich") || text.includes("wrap") || text.includes("panini")) return "/menu/sandwich.jpg";
  if (text.includes("shake") || text.includes("coffee") || text.includes("mojito") || text.includes("mango") || text.includes("mocktail")) return text.includes("shake") ? "/menu/shake.jpg" : "/menu/mocktail.jpg";
  if (text.includes("brownie") || text.includes("dessert")) return "/menu/brownie.jpg";
  if (text.includes("fish")) return "/menu/fish-popcorn.jpg";
  if (text.includes("chicken")) return "/menu/crispy-chicken.jpg";
  if (text.includes("burger") || text.includes("paneer")) return text.includes("chicken") ? "/menu/chicken-burger.jpg" : "/menu/veg-burger.jpg";
  return "/menu/veg-burger.jpg";
};

function MotionShell() {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      doc.style.setProperty("--scroll-y", `${scrollY}px`);
      doc.style.setProperty("--scroll-progress", `${progress}`);
      doc.style.setProperty("--hero-shift", `${Math.max(-90, scrollY * -0.12)}px`);
      doc.style.setProperty("--burger-shift", `${Math.max(-42, scrollY * -0.035)}px`);
      doc.style.setProperty("--burger-rotation", `${Math.max(-14, Math.min(14, scrollY * 0.035))}deg`);
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

  useEffect(() => {
    const onImageError = (event: Event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement)) return;
      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = imageFallback(image.alt);
    };

    window.addEventListener("error", onImageError, true);
    return () => window.removeEventListener("error", onImageError, true);
  }, []);

  return <><div className="bnb-floating-burger" aria-hidden="true"><span className="burger-orbit orbit-one" /><span className="burger-orbit orbit-two" /><span className="burger-glow" /><span className="burger-emoji">🍔</span></div><div className="bnb-scroll-progress" aria-hidden="true" /><App /></>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><MotionShell /></StrictMode>);
