"use client";

import { Item, Player } from "@/types/game";

export default function Inventory({
  inventory,
  setInventory,
  player,
  setPlayer,
  addLog
}: {
  inventory: Item[];
  setInventory: (v: any) => void;
  player: Player;
  setPlayer: (v: any) => void;
  addLog: (text: string) => void;
}) {
  function equip(item: Item) {
    setPlayer((p: Player) => ({
      ...p,
      weapon: item
    }));

    addLog(`🗡️ Você equipou: ${item.name}`);
  }

  function usePotion(index: number) {
    setPlayer((p: Player) => ({
      ...p,
      hp: Math.min(p.maxHp, p.hp + 40)
    }));

    setInventory((inv: Item[]) => inv.filter((_, i) => i !== index));

    addLog("🧪 Você usou uma Poção e recuperou HP!");
  }

  return (
    <div>
      <h3>Inventário</h3>

      <p>
        Arma equipada:{" "}
        {player.weapon ? player.weapon.name : "Nenhuma"}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 75px)",
          gap: 6
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => {
          const item = inventory[i];

          return (
            <div
              key={i}
              style={{
                width: 75,
                height: 75,
                border: "1px solid #444",
                borderRadius: 8,
                background: "#111",
                fontSize: 10,
                padding: 4
              }}
            >
              {item ? (
                <>
                  <b>{item.name}</b>
                  <p>{item.rarity}</p>

                  {item.id === "katana" && (
                    <button
                      onClick={() => equip(item)}
                      style={{ fontSize: 9 }}
                    >
                      Equipar
                    </button>
                  )}

                  {item.id === "potion" && (
                    <button
                      onClick={() => usePotion(i)}
                      style={{ fontSize: 9 }}
                    >
                      Usar
                    </button>
                  )}
                </>
              ) : (
                <span style={{ opacity: 0.2 }}>Vazio</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
