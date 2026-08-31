import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "917039081439";
const logo = "/brand/bnb-logo.jpg";

const images = {
  lambBurger: "/menu/lamb-burger.jpg",
  fishPopcorn: "/menu/fish-popcorn-plated.jpg",
  chickenPopcorn: "/menu/popcorn-chicken.jpg",
  pizza: "/menu/pizza.jpg",
};

const dishImages: Record<string, string> = {
  "classic-veg": "/menu/classic-veg-burger.jpg",
  "crunchy-surprise": "/menu/crunchy-surprise-burger.jpg",
  "peri-peri-twist": "/menu/peri-peri-twist-burger.jpg",
  "cheesy-delight": "/menu/cheesy-delight-burger.jpg",
  "spicy-paneer": "/menu/spicy-paneer-burger.jpg",
  "cheese-burst": "/menu/cheese-burst-veggie-burger.jpg",
  "classic-chicken": "/menu/classic-chicken-burger.jpg",
  "peri-peri-chicken": "/menu/peri-peri-chicken-burger.jpg",
  "original-zinger": "/menu/original-zinger-burger.jpg",
  "spicy-zinger": "/menu/spicy-zinger-burger.jpg",
  "cheesy-mustard": "/menu/cheesy-mustard-chicken-burger.jpg",
  "bbq-jumbo": "/menu/bbq-jumbo-chicken-burger.jpg",
  "lamb-burger": "/menu/lamb-burger.jpg",
  "fish-popcorn": "/menu/fish-popcorn-plated.jpg",
  "popcorn-chicken": "/menu/popcorn-chicken.jpg",
  "chicken-strips": "/menu/chicken-strips.jpg",
  "chicken-wings": "/menu/chicken-wings.jpg",
  "fried-chicken": "/menu/fried-chicken.jpg",
  "family-bucket": "/menu/family-bucket.jpg",
  "french-fries": "/menu/french-fries.jpg",
  "peri-fries": "/menu/peri-peri-fries.jpg",
  "cheesy-fries": "/menu/cheesy-fries.jpg",
  "loaded-chicken-fries": "/menu/loaded-chicken-fries.jpg",
  "cheesy-mexican-nachos": "/menu/cheesy-mexican-nachos-unique.jpg",
  "corn-cheese-sandwich": "/menu/corn-cheese-sandwich.jpg",
  "paneer-tikka": "/menu/paneer-tikka-wrap.jpg",
  "bbq-paneer": "/menu/bbq-paneer-sandwich.jpg",
  "chicken-salad": "/menu/chicken-salad-sandwich.jpg",
  "crispy-chicken-sandwich": "/menu/crispy-chicken-wrap.jpg",
  "bbq-chicken": "/menu/bbq-chicken-wrap.jpg",
  "cheesy-chicken": "/menu/cheesy-chicken-wrap.jpg",
  "malai-tikka": "/menu/malai-tikka-wrap.jpg",
  "italian-mustard": "/menu/italian-mustard-chicken-wrap.jpg",
  "corn-pizza": "/menu/corn-cheese-pizza.jpg",
  "jalapeno-pizza": "/menu/corn-jalapeno-pizza.jpg",
  "cheesy-mushroom": "/menu/cheesy-mushroom-pizza.jpg",
  "exotic-veg": "/menu/exotic-veg-pizza.jpg",
  "spicy-paneer-pizza": "/menu/spicy-paneer-pizza.jpg",
  "bbq-paneer-pizza": "/menu/bbq-paneer-pizza.jpg",
  "cheesy-chicken-pizza": "/menu/cheesy-chicken-pizza.jpg",
  "jalapeno-chicken-pizza": "/menu/jalapeno-chicken-pizza.jpg",
  "peri-chicken-pizza": "/menu/peri-peri-chicken-pizza.jpg",
  "smokey-bbq-chicken": "/menu/smokey-bbq-chicken-pizza.jpg",
  "mushroom-pepper": "/menu/mushroom-pepper-chicken-pizza.jpg",
  "chicken-tikka-pizza": "/menu/chicken-tikka-pizza.jpg",
  "mint-mojito": "/menu/mint-mojito.jpg",
  "strawberry-mango": "/menu/strawberry-mango.jpg",
  "blueberry-mojito": "/menu/blueberry-mojito.jpg",
  "cold-coffee": "/menu/cold-coffee.jpg",
  "oreo-shake": "/menu/oreo-choco-shake.jpg",
  "lotus-shake": "/menu/lotus-biscoff-shake.jpg",
  "nutella-shake": "/menu/nutella-chocolate-shake.jpg",
  "brownie": "/menu/nutella-choco-brownie.jpg",
  "biscoff-brownie": "/menu/lotus-biscoff-brownie.jpg",
  "pistachio-brownie": "/menu/dubai-pistachio-brownie.jpg",
};

type MenuItem = {
  id: string;
  name: string;
  price: number | null;
  description: string;
  category: string;
  image?: string;
  veg?: boolean;
  spicy?: boolean;
};

const menu: MenuItem[] = [
  { id: "classic-veg", name: "Classic Veg Burger", price: 99, description: "Crisp vegetable patty with fresh lettuce and house sauce.", category: "B&B Veg Burger", veg: true },
  { id: "crunchy-surprise", name: "Crunchy Surprise", price: 139, description: "A crunchy, golden veg stack with a creamy finish.", category: "B&B Veg Burger", veg: true },
  { id: "peri-peri-twist", name: "Peri Peri Twist", price: 149, description: "A lively peri-peri kick with a crisp, seasoned patty.", category: "B&B Veg Burger", veg: true, spicy: true },
  { id: "cheesy-delight", name: "Cheesy Delight", price: 189, description: "Melted cheese, seasoned veg patty, and toasted brioche.", category: "B&B Veg Burger", veg: true },
  { id: "spicy-paneer", name: "Spicy Paneer Burger", price: 229, description: "Spiced paneer, crunchy salad, and a smoky house spread.", category: "B&B Veg Burger", veg: true, spicy: true },
  { id: "cheese-burst", name: "Cheese Burst Veg Burger", price: 249, description: "A generous cheese-filled vegetarian burger with a rich finish.", category: "B&B Veg Burger", veg: true },
  { id: "classic-chicken", name: "Classic Chicken Burger", price: 99, description: "Tender chicken patty with lettuce, pickles, and burger sauce.", category: "B&B Chicken Burger" },
  { id: "peri-peri-chicken", name: "Peri Peri Chicken", price: 139, description: "Juicy chicken with a bright, smoky peri-peri glaze.", category: "B&B Chicken Burger", spicy: true },
  { id: "original-zinger", name: "Original Zinger", price: 189, description: "Crispy chicken, cooling mayo, and fresh crunch.", category: "B&B Chicken Burger" },
  { id: "spicy-zinger", name: "Spicy Chicken Zinger", price: 219, description: "Crispy chicken with a fiery sauce and crunchy slaw.", category: "B&B Chicken Burger", spicy: true },
  { id: "cheesy-mustard", name: "Cheesy Mustard Chicken", price: 219, description: "Chicken, molten cheese, and a sharp mustard finish.", category: "B&B Chicken Burger" },
  { id: "bbq-jumbo", name: "BBQ Jumbo Chicken", price: 219, description: "A bigger chicken burger with smoky barbecue flavour.", category: "B&B Chicken Burger" },
  { id: "lamb-burger", name: "Signature Lamb Burger", price: null, description: "A rich lamb patty layered with fresh crunch and house sauce.", category: "Signature picks", image: images.lambBurger },
  { id: "fish-popcorn", name: "Fish Popcorn", price: null, description: "Crispy bite-sized fish with lemon and a creamy dip.", category: "Chicken & fish", image: images.fishPopcorn },
  { id: "popcorn-chicken", name: "Popcorn Chicken", price: 129, description: "Golden chicken bites made for sharing.", category: "Chicken & fish", image: images.chickenPopcorn },
  { id: "chicken-strips", name: "Chicken Strips", price: 139, description: "Crispy chicken strips with a dip of your choice.", category: "Chicken & fish" },
  { id: "chicken-wings", name: "Chicken Wings", price: 139, description: "Crisp wings tossed in your choice of seasoning.", category: "Chicken & fish" },
  { id: "fried-chicken", name: "Fried Chicken", price: 349, description: "A generous crispy fried chicken serving.", category: "Chicken & fish" },
  { id: "family-bucket", name: "Family Bucket", price: 649, description: "A sharing bucket for the whole table.", category: "Chicken & fish" },
  { id: "french-fries", name: "French Fries", price: 99, description: "Golden, crisp fries with a light seasoning.", category: "Yummy fries", veg: true },
  { id: "peri-fries", name: "Peri Peri Fries", price: 119, description: "Crisp fries with a bold peri-peri dusting.", category: "Yummy fries", veg: true, spicy: true },
  { id: "cheesy-fries", name: "Cheesy Fries", price: 179, description: "Fries finished with a blanket of melted cheese.", category: "Yummy fries", veg: true },
  { id: "loaded-chicken-fries", name: "Loaded Fries with Chicken", price: 189, description: "Fries topped with chicken, sauce, and cheese.", category: "Yummy fries" },
  { id: "cheesy-mexican-nachos", name: "Cheesy Mexican Nachos", price: 189, description: "Crisp nachos, cheese, salsa, and a smoky finish.", category: "Yummy fries", veg: true, spicy: true },
  { id: "corn-cheese-sandwich", name: "Corn & Cheese Sandwich / Wrap", price: 129, description: "Creamy corn and cheese in a toasted sandwich or wrap.", category: "Italian panini sandwiches", veg: true },
  { id: "paneer-tikka", name: "Paneer Tikka Sandwich / Wrap", price: 139, description: "Paneer tikka, peppers, and a soft toasted wrap.", category: "Italian panini sandwiches", veg: true },
  { id: "bbq-paneer", name: "BBQ Paneer Sandwich / Wrap", price: 139, description: "Barbecue paneer with fresh crunch and tangy sauce.", category: "Italian panini sandwiches", veg: true },
  { id: "chicken-salad", name: "Chicken Salad Sandwich / Wrap", price: 139, description: "Seasoned chicken, fresh salad, and a light dressing.", category: "Italian panini sandwiches" },
  { id: "crispy-chicken-sandwich", name: "Crispy Chicken Sandwich / Wrap", price: 139, description: "Crispy chicken with salad and creamy sauce.", category: "Italian panini sandwiches" },
  { id: "bbq-chicken", name: "BBQ Chicken Sandwich / Wrap", price: 139, description: "Smoky BBQ chicken with melted cheese and crunch.", category: "Italian panini sandwiches" },
  { id: "cheesy-chicken", name: "Cheesy Chicken Sandwich / Wrap", price: 149, description: "Tender chicken, cheese, and toasted bread or wrap.", category: "Italian panini sandwiches" },
  { id: "malai-tikka", name: "Malai Tikka Sandwich / Wrap", price: 149, description: "Creamy malai tikka with herbs and fresh vegetables.", category: "Italian panini sandwiches" },
  { id: "italian-mustard", name: "Italian Mustard Chicken Sandwich / Wrap", price: 149, description: "Chicken with Italian herbs and a mustard finish.", category: "Italian panini sandwiches" },
  { id: "corn-pizza", name: "Corn & Cheese Pizza", price: 349, description: "Cheesy pizza with sweet corn and herbs.", category: "Pizza" , veg: true },
  { id: "jalapeno-pizza", name: "Corn & Jalapeno Pizza", price: 349, description: "Corn, jalapeno, mozzarella, and a lively kick.", category: "Pizza", veg: true, spicy: true },
  { id: "cheesy-mushroom", name: "Cheesy Mushroom Pizza", price: 379, description: "Creamy cheese and mushrooms over a crisp base.", category: "Pizza", veg: true },
  { id: "exotic-veg", name: "Exotic Veg Pizza", price: 399, description: "A colourful mix of vegetables with bubbling cheese.", category: "Pizza", veg: true },
  { id: "spicy-paneer-pizza", name: "Spicy Paneer Pizza", price: 399, description: "Paneer, peppers, and a spicy masala finish.", category: "Pizza", veg: true, spicy: true },
  { id: "bbq-paneer-pizza", name: "BBQ Paneer Pizza", price: 399, description: "Smoky barbecue paneer and melted cheese.", category: "Pizza", veg: true },
  { id: "cheesy-chicken-pizza", name: "Cheesy Chicken Pizza", price: 379, description: "Tender chicken and melted cheese on a crisp base.", category: "Pizza" },
  { id: "jalapeno-chicken-pizza", name: "Cheesy Jalapeno Chicken Pizza", price: 399, description: "Chicken, cheese, and jalapeno heat.", category: "Pizza", spicy: true },
  { id: "peri-chicken-pizza", name: "Peri Peri Chicken Pizza", price: 399, description: "Peri-peri chicken with peppers and mozzarella.", category: "Pizza", spicy: true },
  { id: "smokey-bbq-chicken", name: "Smokey BBQ Chicken Pizza", price: 449, description: "Smoky barbecue chicken and cheese.", category: "Pizza" },
  { id: "mushroom-pepper", name: "Mushroom Pepper Chicken Pizza", price: 469, description: "Mushroom, pepper, chicken, and cheese.", category: "Pizza" },
  { id: "chicken-tikka-pizza", name: "Chicken Tikka Pizza", price: 469, description: "Tandoori-style chicken tikka over a cheesy base.", category: "Pizza" },
  { id: "mint-mojito", name: "Mint Mojito", price: 89, description: "Bright mint, lime, and chilled fizz.", category: "Mocktail, cold coffee, milk shake", veg: true },
  { id: "strawberry-mango", name: "Strawberry, Mango", price: 89, description: "A fruity chilled blend with a creamy finish.", category: "Mocktail, cold coffee, milk shake", veg: true },
  { id: "blueberry-mojito", name: "Blueberry Mojito", price: 89, description: "Blueberry, lime, mint, and sparkle.", category: "Mocktail, cold coffee, milk shake", veg: true },
  { id: "cold-coffee", name: "Cold Coffee", price: 79, description: "Chilled coffee with a smooth, creamy texture.", category: "Mocktail, cold coffee, milk shake", veg: true },
  { id: "oreo-shake", name: "Oreo Choco Shake", price: 149, description: "Thick chocolate shake blended with Oreo.", category: "Mocktail, cold coffee, milk shake", veg: true },
  { id: "lotus-shake", name: "Lotus Biscoff Cream Shake", price: 149, description: "Creamy caramelised biscuit shake.", category: "Mocktail, cold coffee, milk shake", veg: true },
  { id: "nutella-shake", name: "Nutella Chocolate Shake", price: 149, description: "A decadent chocolate and hazelnut shake.", category: "Mocktail, cold coffee, milk shake", veg: true },
  { id: "brownie", name: "Nutella Choco Brownie", price: 179, description: "Warm chocolate brownie with Nutella richness.", category: "Signature desserts", veg: true },
  { id: "biscoff-brownie", name: "Lotus Biscoff Cream Brownie", price: 189, description: "Chocolate brownie with a Biscoff cream finish.", category: "Signature desserts", veg: true },
  { id: "pistachio-brownie", name: "Dubai Pistachio Brownie", price: 199, description: "A rich brownie with pistachio cream and crunch.", category: "Signature desserts", veg: true },
];

const formatPrice = (price: number | null) => (price === null ? "Ask us" : `₹${price}`);

function menuImage(item: MenuItem) {
  return dishImages[item.id] ?? item.image ?? images.lambBurger;
}

function buildOrderMessage(items: MenuItem[], quantities: Record<string, number>) {
  const selected = items.filter((item) => quantities[item.id] > 0);
  const lines = selected.map((item) => {
    const count = quantities[item.id];
    return `${count} × ${item.name}${item.price === null ? " (price to confirm)" : ` — ₹${item.price * count}`}`;
  });
  return `Hello B&B Burger and Beyond! I would like to place an order:\n\n${lines.join("\n")}\n\nPlease confirm availability, total, and delivery details.`;
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const categories = useMemo(() => ["All", ...Array.from(new Set(menu.map((item) => item.category)))], []);
  const filteredMenu = useMemo(() => menu.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const haystack = `${item.name} ${item.description} ${item.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [activeCategory, query]);
  const selectedItems = menu.filter((item) => quantities[item.id] > 0);
  const totalItems = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
  const total = selectedItems.reduce((sum, item) => sum + (item.price ?? 0) * quantities[item.id], 0);

  const changeQuantity = (item: MenuItem, delta: number) => {
    setQuantities((current) => {
      const next = Math.max(0, (current[item.id] ?? 0) + delta);
      const copy = { ...current };
      if (next === 0) delete copy[item.id];
      else copy[item.id] = next;
      return copy;
    });
  };

  const openWhatsApp = () => {
    const message = buildOrderMessage(menu, quantities);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="B&B Burger and Beyond home">
          <img src={logo} alt="B&B Burger and Beyond" />
          <span>BURGER<br /><b>& BEYOND</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit us</a>
        </nav>
        <button className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Open order, ${totalItems} items`}>
          <ShoppingBag size={17} /> <span>Your order</span>{totalItems > 0 && <b>{totalItems}</b>}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={14} /> Fresh. Loaded. Delivered.</p>
          <h1>Good food,<br /><em>big mood.</em></h1>
          <p className="hero-intro">Burgers, pizzas, crispy bites, shakes, and comfort food made for the hungry moments that matter.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">Explore the menu <ArrowRight size={17} /></a>
            <a className="text-link" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello B&B Burger and Beyond! I would like to know today's special offers.")}`} target="_blank" rel="noreferrer">Order on WhatsApp</a>
          </div>
          <div className="hero-details"><span><Clock3 size={15} /> Free home delivery</span><span><MapPin size={15} /> Mumbai</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image hero-image-main"><img src={images.lambBurger} alt="Signature lamb burger with fries" loading="eager" fetchPriority="high" decoding="async" /></div>
          <div className="hero-image hero-image-side"><img src={images.fishPopcorn} alt="Crispy fish popcorn with dip" loading="eager" decoding="async" /></div>
          <div className="hero-sticker">B&B<br /><small>BURGER<br />AND BEYOND</small></div>
          <div className="hero-note">Signature<br /><strong>lamb burger</strong></div>
        </div>
      </section>

      <section className="ticker" aria-label="B&B highlights"><span>BURGERS</span><i>✦</i><span>PIZZAS</span><i>✦</i><span>CRISPY BITES</span><i>✦</i><span>SHAKES</span><i>✦</i><span>FREE DELIVERY</span></section>

      <section className="featured" id="story">
        <div className="section-heading"><p className="eyebrow">The good stuff</p><h2>Made for sharing.<br /><em>Hard to share.</em></h2><p>From a proper lamb burger to golden fish popcorn, B&B is built around comfort food with a little extra energy.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-card-dark"><img src={images.fishPopcorn} alt="Crispy fish popcorn" loading="lazy" decoding="async" /><div><span>01 / crispy bites</span><h3>Fish popcorn,<br />done right.</h3></div></article>
          <article className="feature-card feature-card-yellow"><img src="/menu/cheesy-chicken-pizza.jpg" alt="Loaded cheesy chicken pizza" loading="lazy" decoding="async" /><div><span>02 / loaded pizza</span><h3>More cheese.<br />More reasons.</h3></div></article>
          <article className="feature-card feature-card-red"><img src={images.chickenPopcorn} alt="Crispy chicken popcorn" loading="lazy" decoding="async" /><div><span>03 / crowd favourite</span><h3>Popcorn chicken<br />for the table.</h3></div></article>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-head"><div><p className="eyebrow">Order what you love</p><h2>The menu</h2></div><p>Everything on the B&B menu, from quick bites to proper meal moments.</p></div>
        <div className="menu-toolbar"><div className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search burgers, pizza, shakes..." aria-label="Search menu" /></div><div className="category-scroll" role="tablist" aria-label="Menu categories">{categories.map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div></div>
        <div className="menu-grid">{filteredMenu.map((item) => <article className="menu-card" key={item.id}><img src={menuImage(item)} alt={item.name} loading="lazy" decoding="async" /><div className="menu-card-body"><div className="menu-card-top"><h3>{item.name}</h3><strong>{formatPrice(item.price)}</strong></div><p>{item.description}</p><div className="menu-card-bottom"><div className="badges">{item.veg && <span className="badge veg"><i /> Veg</span>}{!item.veg && <span className="badge nonveg"><i /> Non-veg</span>}{item.spicy && <span className="badge spicy">Spicy</span>}</div>{quantities[item.id] ? <div className="stepper"><button onClick={() => changeQuantity(item, -1)} aria-label={`Remove one ${item.name}`}><Minus size={14} /></button><b>{quantities[item.id]}</b><button onClick={() => changeQuantity(item, 1)} aria-label={`Add one ${item.name}`}><Plus size={14} /></button></div> : <button className="add-button" onClick={() => changeQuantity(item, 1)}>Add <Plus size={15} /></button>}</div></div></article>)}</div>
        {filteredMenu.length === 0 && <div className="empty-state">No dishes found. Try another search or category.</div>}
      </section>

      <section className="visit-section" id="visit"><div className="visit-card"><div><p className="eyebrow">Find your next favourite</p><h2>Good food is<br /><em>on the way.</em></h2><p>Free home delivery across our Mumbai neighbourhoods. For availability, offers, or a custom order, message the B&B team.</p><a className="button button-yellow" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello B&B Burger and Beyond! I would like to place an order.")}`} target="_blank" rel="noreferrer">Start an order <ArrowRight size={17} /></a></div><div className="visit-mark"><span>B&B</span><small>BURGER<br />AND<br />BEYOND</small></div></div></section>

      <footer><img src={logo} alt="B&B Burger and Beyond logo" /><p>Fresh food. Big mood. Mumbai.</p><span>© 2026 B&B Burger and Beyond</span></footer>

      {cartOpen && <div className="cart-overlay" role="presentation" onClick={() => setCartOpen(false)}><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Your order" onClick={(event) => event.stopPropagation()}><div className="drawer-head"><div><p className="eyebrow">B&B order</p><h2>Your order</h2></div><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close order"><X size={20} /></button></div>{selectedItems.length === 0 ? <div className="cart-empty"><ShoppingBag size={28} /><p>Your order list is empty.</p><span>Add something delicious from the menu.</span></div> : <><div className="cart-lines">{selectedItems.map((item) => <div className="cart-line" key={item.id}><div><b>{item.name}</b><span>{item.price === null ? "Price to confirm" : `₹${item.price * quantities[item.id]}`}</span></div><div className="stepper"><button onClick={() => changeQuantity(item, -1)} aria-label={`Remove one ${item.name}`}><Minus size={14} /></button><b>{quantities[item.id]}</b><button onClick={() => changeQuantity(item, 1)} aria-label={`Add one ${item.name}`}><Plus size={14} /></button></div></div>)}</div><div className="cart-total"><span>Estimated total</span><strong>{total ? `₹${total}` : "Confirm on WhatsApp"}</strong></div><button className="button button-dark full" onClick={openWhatsApp}>Send order on WhatsApp <ArrowRight size={17} /></button><p className="cart-note">Your message will open in WhatsApp for confirmation. No payment is taken on this website.</p></>}</aside></div>}
    </main>
  );
}

export { buildOrderMessage, menu, menuImage };
export default App;
