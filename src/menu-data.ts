export type MenuItem = {
  id: string;
  name: string;
  price: number | null;
  description: string;
  category: string;
  image: string;
  veg?: boolean;
  spicy?: boolean;
};

const img = (name: string) => `/menu/${name}.jpg`;

export const categories = [
  { slug: "burgers", label: "Burgers", eyebrow: "Stacked & loaded", description: "Proper B&B burgers, from classic veg favourites to juicy chicken and our signature lamb burger." },
  { slug: "chicken-fish", label: "Chicken & Fish", eyebrow: "Crispy favourites", description: "Golden sharing bites, wings, strips, fried chicken and fish popcorn made for the table." },
  { slug: "fries", label: "Fries & Sides", eyebrow: "Crunch time", description: "Crispy fries, loaded fries and cheesy sides to make every order better." },
  { slug: "wraps", label: "Wraps & Sandwiches", eyebrow: "Wrapped right", description: "Toasted sandwiches and wraps packed with paneer, chicken, cheese and fresh crunch." },
  { slug: "pizza", label: "Pizza", eyebrow: "More cheese", description: "Cheesy, loaded pizzas with bold veg and chicken combinations." },
  { slug: "drinks", label: "Drinks", eyebrow: "Cold & refreshing", description: "Mocktails, cold coffee and thick shakes for the perfect finish." },
  { slug: "desserts", label: "Desserts", eyebrow: "Sweet ending", description: "Rich brownies with Nutella, Biscoff and pistachio-inspired toppings." },
];

export const menu: MenuItem[] = [
  { id:"classic-veg",name:"Classic Veg Burger",price:99,description:"Crisp vegetable patty with fresh lettuce and house sauce.",category:"burgers",image:img("classic-veg-burger"),veg:true },
  { id:"crunchy-surprise",name:"Crunchy Surprise",price:139,description:"A crunchy golden veg stack with a creamy finish.",category:"burgers",image:img("crunchy-surprise-burger"),veg:true },
  { id:"peri-peri-twist",name:"Peri Peri Twist",price:149,description:"A lively peri-peri kick with a crisp seasoned patty.",category:"burgers",image:img("peri-peri-twist-burger"),veg:true,spicy:true },
  { id:"cheesy-delight",name:"Cheesy Delight",price:189,description:"Melted cheese, seasoned veg patty and toasted brioche.",category:"burgers",image:img("cheesy-delight-burger"),veg:true },
  { id:"spicy-paneer",name:"Spicy Paneer Burger",price:229,description:"Spiced paneer, crunchy salad and smoky house spread.",category:"burgers",image:img("spicy-paneer-burger"),veg:true,spicy:true },
  { id:"cheese-burst",name:"Cheese Burst Veg Burger",price:249,description:"A generous cheese-filled vegetarian burger with a rich finish.",category:"burgers",image:img("cheese-burst-veggie-burger"),veg:true },
  { id:"classic-chicken",name:"Classic Chicken Burger",price:99,description:"Tender chicken patty with lettuce, pickles and burger sauce.",category:"burgers",image:img("classic-chicken-burger") },
  { id:"peri-peri-chicken",name:"Peri Peri Chicken",price:139,description:"Juicy chicken with a bright smoky peri-peri glaze.",category:"burgers",image:img("peri-peri-chicken-burger"),spicy:true },
  { id:"original-zinger",name:"Original Zinger",price:189,description:"Crispy chicken, cooling mayo and fresh crunch.",category:"burgers",image:img("original-zinger-burger") },
  { id:"spicy-zinger",name:"Spicy Chicken Zinger",price:219,description:"Crispy chicken with fiery sauce and crunchy slaw.",category:"burgers",image:img("spicy-zinger-burger"),spicy:true },
  { id:"cheesy-mustard",name:"Cheesy Mustard Chicken",price:219,description:"Chicken, molten cheese and a sharp mustard finish.",category:"burgers",image:img("cheesy-mustard-chicken-burger") },
  { id:"bbq-jumbo",name:"BBQ Jumbo Chicken",price:219,description:"A bigger chicken burger with smoky barbecue flavour.",category:"burgers",image:img("bbq-jumbo-chicken-burger") },
  { id:"lamb-burger",name:"Signature Lamb Burger",price:null,description:"Rich lamb patty layered with fresh crunch and house sauce.",category:"burgers",image:img("lamb-burger") },
  { id:"fish-popcorn",name:"Fish Popcorn",price:null,description:"Crispy bite-sized fish with lemon and a creamy dip.",category:"chicken-fish",image:img("fish-popcorn-plated") },
  { id:"popcorn-chicken",name:"Popcorn Chicken",price:129,description:"Golden chicken bites made for sharing.",category:"chicken-fish",image:img("popcorn-chicken") },
  { id:"chicken-strips",name:"Chicken Strips",price:139,description:"Crispy chicken strips with a dip of your choice.",category:"chicken-fish",image:img("chicken-strips") },
  { id:"chicken-wings",name:"Chicken Wings",price:139,description:"Crisp wings tossed in your choice of seasoning.",category:"chicken-fish",image:img("chicken-wings") },
  { id:"fried-chicken",name:"Fried Chicken",price:349,description:"A generous crispy fried chicken serving.",category:"chicken-fish",image:img("fried-chicken") },
  { id:"family-bucket",name:"Family Bucket",price:649,description:"A sharing bucket for the whole table.",category:"chicken-fish",image:img("family-bucket") },
  { id:"french-fries",name:"French Fries",price:99,description:"Golden crisp fries with light seasoning.",category:"fries",image:img("french-fries"),veg:true },
  { id:"peri-fries",name:"Peri Peri Fries",price:119,description:"Crisp fries with bold peri-peri dusting.",category:"fries",image:img("peri-peri-fries"),veg:true,spicy:true },
  { id:"cheesy-fries",name:"Cheesy Fries",price:179,description:"Fries finished with a blanket of melted cheese.",category:"fries",image:img("cheesy-fries"),veg:true },
  { id:"loaded-chicken-fries",name:"Loaded Fries with Chicken",price:189,description:"Fries topped with chicken, sauce and cheese.",category:"fries",image:img("loaded-chicken-fries") },
  { id:"cheesy-mexican-nachos",name:"Cheesy Mexican Nachos",price:189,description:"Crisp nachos, cheese, salsa and smoky finish.",category:"fries",image:img("cheesy-mexican-nachos-unique"),veg:true,spicy:true },
  { id:"corn-cheese-sandwich",name:"Corn & Cheese Sandwich / Wrap",price:129,description:"Creamy corn and cheese in a toasted sandwich or wrap.",category:"wraps",image:img("corn-cheese-sandwich"),veg:true },
  { id:"paneer-tikka",name:"Paneer Tikka Sandwich / Wrap",price:139,description:"Paneer tikka, peppers and a soft toasted wrap.",category:"wraps",image:img("paneer-tikka-wrap"),veg:true },
  { id:"bbq-paneer",name:"BBQ Paneer Sandwich / Wrap",price:139,description:"Barbecue paneer with fresh crunch and tangy sauce.",category:"wraps",image:img("bbq-paneer-sandwich"),veg:true },
  { id:"chicken-salad",name:"Chicken Salad Sandwich / Wrap",price:139,description:"Seasoned chicken, fresh salad and light dressing.",category:"wraps",image:img("chicken-salad-sandwich") },
  { id:"crispy-chicken-sandwich",name:"Crispy Chicken Sandwich / Wrap",price:139,description:"Crispy chicken with salad and creamy sauce.",category:"wraps",image:img("crispy-chicken-wrap") },
  { id:"bbq-chicken",name:"BBQ Chicken Sandwich / Wrap",price:139,description:"Smoky BBQ chicken with melted cheese and crunch.",category:"wraps",image:img("bbq-chicken-wrap") },
  { id:"cheesy-chicken",name:"Cheesy Chicken Sandwich / Wrap",price:149,description:"Tender chicken, cheese and toasted bread or wrap.",category:"wraps",image:img("cheesy-chicken-wrap") },
  { id:"malai-tikka",name:"Malai Tikka Sandwich / Wrap",price:149,description:"Creamy malai tikka with herbs and fresh vegetables.",category:"wraps",image:img("malai-tikka-wrap") },
  { id:"italian-mustard",name:"Italian Mustard Chicken Sandwich / Wrap",price:149,description:"Chicken with Italian herbs and a mustard finish.",category:"wraps",image:img("italian-mustard-chicken-wrap") },
  { id:"corn-pizza",name:"Corn & Cheese Pizza",price:349,description:"Cheesy pizza with sweet corn and herbs.",category:"pizza",image:img("corn-cheese-pizza"),veg:true },
  { id:"jalapeno-pizza",name:"Corn & Jalapeno Pizza",price:349,description:"Corn, jalapeno, mozzarella and a lively kick.",category:"pizza",image:img("corn-jalapeno-pizza"),veg:true,spicy:true },
  { id:"cheesy-mushroom",name:"Cheesy Mushroom Pizza",price:379,description:"Creamy cheese and mushrooms over a crisp base.",category:"pizza",image:img("cheesy-mushroom-pizza"),veg:true },
  { id:"exotic-veg",name:"Exotic Veg Pizza",price:399,description:"A colourful mix of vegetables with bubbling cheese.",category:"pizza",image:img("exotic-veg-pizza"),veg:true },
  { id:"spicy-paneer-pizza",name:"Spicy Paneer Pizza",price:399,description:"Paneer, peppers and spicy masala finish.",category:"pizza",image:img("spicy-paneer-pizza"),veg:true,spicy:true },
  { id:"bbq-paneer-pizza",name:"BBQ Paneer Pizza",price:399,description:"Smoky barbecue paneer and melted cheese.",category:"pizza",image:img("bbq-paneer-pizza"),veg:true },
  { id:"cheesy-chicken-pizza",name:"Cheesy Chicken Pizza",price:379,description:"Tender chicken and melted cheese on a crisp base.",category:"pizza",image:img("cheesy-chicken-pizza") },
  { id:"jalapeno-chicken-pizza",name:"Cheesy Jalapeno Chicken Pizza",price:399,description:"Chicken, cheese and jalapeno heat.",category:"pizza",image:img("jalapeno-chicken-pizza"),spicy:true },
  { id:"peri-chicken-pizza",name:"Peri Peri Chicken Pizza",price:399,description:"Peri-peri chicken with peppers and mozzarella.",category:"pizza",image:img("peri-peri-chicken-pizza"),spicy:true },
  { id:"smokey-bbq-chicken",name:"Smokey BBQ Chicken Pizza",price:449,description:"Smoky barbecue chicken and cheese.",category:"pizza",image:img("smokey-bbq-chicken-pizza") },
  { id:"mushroom-pepper",name:"Mushroom Pepper Chicken Pizza",price:469,description:"Mushroom, pepper, chicken and cheese.",category:"pizza",image:img("mushroom-pepper-chicken-pizza") },
  { id:"chicken-tikka-pizza",name:"Chicken Tikka Pizza",price:469,description:"Tandoori-style chicken tikka over a cheesy base.",category:"pizza",image:img("chicken-tikka-pizza") },
  { id:"mint-mojito",name:"Mint Mojito",price:89,description:"Bright mint, lime and chilled fizz.",category:"drinks",image:img("mint-mojito"),veg:true },
  { id:"strawberry-mango",name:"Strawberry, Mango",price:89,description:"A fruity chilled blend with a creamy finish.",category:"drinks",image:img("strawberry-mango"),veg:true },
  { id:"blueberry-mojito",name:"Blueberry Mojito",price:89,description:"Blueberry, lime, mint and sparkle.",category:"drinks",image:img("blueberry-mojito"),veg:true },
  { id:"cold-coffee",name:"Cold Coffee",price:79,description:"Chilled coffee with a smooth creamy texture.",category:"drinks",image:img("cold-coffee"),veg:true },
  { id:"oreo-shake",name:"Oreo Choco Shake",price:149,description:"Thick chocolate shake blended with Oreo.",category:"drinks",image:img("oreo-choco-shake"),veg:true },
  { id:"lotus-shake",name:"Lotus Biscoff Cream Shake",price:149,description:"Creamy caramelised biscuit shake.",category:"drinks",image:img("lotus-biscoff-shake"),veg:true },
  { id:"nutella-shake",name:"Nutella Chocolate Shake",price:149,description:"Decadent chocolate and hazelnut shake.",category:"drinks",image:img("nutella-chocolate-shake"),veg:true },
  { id:"brownie",name:"Nutella Choco Brownie",price:179,description:"Warm chocolate brownie with Nutella richness.",category:"desserts",image:img("nutella-choco-brownie"),veg:true },
  { id:"biscoff-brownie",name:"Lotus Biscoff Cream Brownie",price:189,description:"Chocolate brownie with Biscoff cream finish.",category:"desserts",image:img("lotus-biscoff-brownie"),veg:true },
  { id:"pistachio-brownie",name:"Dubai Pistachio Brownie",price:199,description:"Rich brownie with pistachio cream and crunch.",category:"desserts",image:img("dubai-pistachio-brownie"),veg:true },
];
