import { describe, expect, it } from "vitest";
import { buildOrderMessage, menu, menuImage } from "./App";

describe("BNB Mumbai menu", () => {
  it("includes the requested signature dishes and menu sections", () => {
    const names = menu.map((item) => item.name);
    expect(names).toContain("Signature Lamb Burger");
    expect(names).toContain("Fish Popcorn");
    expect(names).toContain("Popcorn Chicken");
    expect(names).toContain("Dubai Pistachio Brownie");
    expect(new Set(menu.map((item) => item.category))).toEqual(
      new Set([
        "B&B Veg Burger",
        "B&B Chicken Burger",
        "Signature picks",
        "Chicken & fish",
        "Yummy fries",
        "Italian panini sandwiches",
        "Pizza",
        "Mocktail, cold coffee, milk shake",
        "Signature desserts",
      ]),
    );
  });

  it("encodes selected quantities and flags unpriced signature items", () => {
    const message = buildOrderMessage(menu, { "lamb-burger": 1, "fish-popcorn": 2, "classic-veg": 1 });
    expect(message).toContain("1 × Signature Lamb Burger (price to confirm)");
    expect(message).toContain("2 × Fish Popcorn (price to confirm)");
    expect(message).toContain("1 × Classic Veg Burger — ₹99");
    expect(message).toContain("Please confirm availability, total, and delivery details.");
  });

  it("uses a bundled fish photo and keeps the temporary WhatsApp number explicit", () => {
    expect(menu.find((item) => item.id === "fish-popcorn")?.image).toBe("/menu/fish-popcorn-plated.jpg");
    expect(menu.every((item) => menuImage(item).startsWith("/menu/"))).toBe(true);
    expect(menuImage(menu.find((item) => item.id === "classic-veg")!)).toBe("/menu/classic-veg-burger.jpg");
    expect(menuImage(menu.find((item) => item.id === "cheesy-chicken-pizza")!)).toBe("/menu/cheesy-chicken-pizza.jpg");
    expect(menuImage(menu.find((item) => item.id === "oreo-shake")!)).toBe("/menu/oreo-choco-shake.jpg");
    expect(menuImage(menu.find((item) => item.id === "cheesy-mexican-nachos")!)).toBe("/menu/cheesy-mexican-nachos-unique.jpg");
    const encoded = encodeURIComponent(buildOrderMessage(menu, { "fish-popcorn": 1 }));
    const orderUrl = `https://wa.me/917039081439?text=${encoded}`;
    expect(orderUrl).toMatch(/^https:\/\/wa\.me\/917039081439\?text=/);
    expect(decodeURIComponent(orderUrl)).toContain("Fish Popcorn");
  });
});
