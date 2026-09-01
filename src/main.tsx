import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./AppPro";
import "./styles.css";
import "./burger-motion.css";
import "./premium-motion.css";
import "./professional.css";
import "./responsive-fix.css";
import "./bnb-storefront.css";
import "./home-motion.css";
import "./cart-premium.css";
import "./category-pills.css";
import "./hero-background.css";

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
    const onImageError = (event: Event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = imageFallback(image.alt);
    };
    window.addEventListener("error", onImageError, true);
    return () => window.removeEventListener("error", onImageError, true);
  }, []);
  return <><div className="bnb-floating-burger" aria-hidden="true"><span className="burger-orbit orbit-one" /><span className="burger-orbit orbit-two" /><span className="burger-glow" /><span className="burger-emoji">🍔</span></div><div className="bnb-scroll-progress" aria-hidden="true" /><App /></>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><MotionShell /></StrictMode>);
