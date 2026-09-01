import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App, { menu } from "./App";
import "./styles.css";
import "./burger-motion.css";
import "./premium-motion.css";

const restaurantId = "https://bnb-mumbai.vercel.app/#restaurant";
const siteUrl = "https://bnb-mumbai.vercel.app/";

const structuredMenu = {
  "@type": "Menu",
  "@id": `${siteUrl}#menu`,
  name: "B&B Burger and Beyond Menu",
  url: siteUrl,
  inLanguage: "en-IN",
  hasMenuSection: Array.from(new Set(menu.map((item) => item.category))).map((category) => ({
    "@type": "MenuSection",
    name: category,
    hasMenuItem: menu
      .filter((item) => item.category === category)
      .map((item) => ({
        "@type": "MenuItem",
        "@id": `${siteUrl}#menu-${item.id}`,
        name: item.name,
        description: item.description,
        ...(item.image ? { image: `${siteUrl}${item.image}` } : {}),
        ...(item.price !== null
          ? {
              offers: {
                "@type": "Offer",
                price: item.price.toFixed(2),
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: siteUrl,
              },
            }
          : {}),
      })),
  })),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": restaurantId,
  name: "B&B Burger and Beyond",
  url: siteUrl,
  description:
    "B&B Burger and Beyond serves burgers, pizza, chicken, wraps, fries, shakes, desserts and other fast food in Mumbai.",
  servesCuisine: ["Burgers", "Fast Food", "Pizza", "Sandwiches", "Wraps"],
  priceRange: "₹₹",
  telephone: "+91-7021633034",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No A74, BB Associate with Lazeez Tadka Restaurant, Janta Timber Market, Shivaji Nagar Signal",
    addressLocality: "Govandi West, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400043",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Mumbai" },
  hasMenu: structuredMenu,
};

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

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

  return <><StructuredData /><div className="bnb-floating-burger" aria-hidden="true"><span className="burger-orbit orbit-one" /><span className="burger-orbit orbit-two" /><span className="burger-glow" /><span className="burger-emoji">🍔</span></div><div className="bnb-scroll-progress" aria-hidden="true" /><App /></>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><MotionShell /></StrictMode>);
