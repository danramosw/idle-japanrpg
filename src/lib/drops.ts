import { Item } from "@/types/game";

const drops: Item[] = [
  {
    id: "katana",
    name: "Katana Enferrujada",
    rarity: "common",
    type: "weapon"
  },
  {
    id: "potion",
    name: "Poção Espiritual",
    rarity: "rare",
    type: "potion"
  }
];

export function rollDrop(): Item | null {
  const chance = Math.random();

  if (chance < 0.35) {
    return drops[Math.floor(Math.random() * drops.length)];
  }

  return null;
}
