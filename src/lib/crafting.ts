import { Item } from "@/types/game";

export function craftPotion(materials: Item[]): Item | null {
  const hasHerb = materials.find((i) => i.id === "herb");
  const hasJade = materials.find((i) => i.id === "jade");

  if (hasHerb && hasJade) {
    return {
      id: "potion",
      name: "Poção Espiritual",
      rarity: "rare"
    };
  }

  return null;
}
