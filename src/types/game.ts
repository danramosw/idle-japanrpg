export type ItemRarity = "common" | "rare" | "epic";

export type Item = {
  id: string;
  name: string;
  rarity: ItemRarity;
};

export type Player = {
  level: number;
  hp: number;
  maxHp: number;
  gold: number;
  inventory: Item[];
};
