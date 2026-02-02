import { Item } from "@/types/game";

export function rollDrop(): Item | null {
  const r = Math.random();

  if (r < 0.7) return null;

  if (r < 0.9) {
    return {
      id: "herb",
      name: "Ervas Sagradas",
      rarity: "common"
    };
  }

  if (r < 0.98) {
    return {
      id: "jade",
      name: "Jade Místico",
      rarity: "rare"
    };
  }

  return {
    id: "katana",
    name: "Katana do Oni",
    rarity: "epic"
  };
}
