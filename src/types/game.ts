export type Rarity =
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary";

export type ItemType = "weapon" | "potion" | "misc";

export interface Item {
  id: string;
  name: string;
  rarity: Rarity;
  type?: ItemType;
}

export interface Player {
  hp: number;
  maxHp: number;
  weapon?: Item;
}
