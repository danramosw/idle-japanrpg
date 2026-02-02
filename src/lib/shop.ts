import { Item } from "@/types/game";

export const shopItems: Item[] = [
  {
    id: "potion",
    name: "Poção Espiritual",
    rarity: "rare"
  },
  {
    id: "katana",
    name: "Katana Enferrujada",
    rarity: "common"
  }
];

export function getItemPrice(item: Item) {
  if (item.rarity === "common") return 50;
  if (item.rarity === "rare") return 120;
  if (item.rarity === "epic") return 300;
  return 10;
}
