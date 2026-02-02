"use client";

import { shopItems, getItemPrice } from "@/lib/shop";
import { Item } from "@/types/game";

export default function Shop({
  gold,
  setGold,
  inventory,
  setInventory,
  addLog
}: {
  gold: number;
  setGold: (v: any) => void;
  inventory: Item[];
  setInventory: (v: any) => void;
  addLog: (text: string) => void;
}) {
  function buy(item: Item) {
    const price = getItemPrice(item);

    if (gold < price) {
      addLog("❌ Gold insuficiente!");
      return;
    }

    setGold((g: number) => g - price);
    setInventory((inv: Item[]) => [...inv, item]);

    addLog(`🛒 Você comprou: ${item.name}`);
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h3>NPC Shop</h3>

      {shopItems.map((item) => (
        <div key={item.id} style={{ marginBottom: 6 }}>
          <b>{item.name}</b> ({item.rarity}) - {getItemPrice(item)}g

          <button
            style={{
              marginLeft: 6,
              cursor: "pointer"
            }}
            onClick={() => buy(item)}
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}
