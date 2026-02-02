"use client";

import { useEffect, useState } from "react";
import { rollDrop } from "@/lib/drops";
import { fightEnemy } from "@/lib/combat";
import { Item } from "@/types/game";

export default function Exploration({
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
  const [progress, setProgress] = useState(0);
  const [level] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          const eventRoll = Math.random();

          // Combat 20%
          if (eventRoll < 0.2) {
            const battle = fightEnemy(level);
            battle.log.forEach(addLog);
            setGold((g: number) => g + battle.gold);
          } else {
            const gain = 10 + Math.floor(Math.random() * 15);
            addLog(`🌙 Você explora... +${gain} gold`);
            setGold((g: number) => g + gain);
          }

          // Drop roll
          const drop = rollDrop();
          if (drop) {
            addLog(`🎁 Drop: ${drop.name}`);

            // Add item to inventory
            setInventory((prev: Item[]) => [...prev, drop]);
          }

          return 0;
        }

        return p + 10;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [level]);

  return (
    <div>
      <h3>Exploração Idle</h3>
      <p>Gold: {gold}</p>

      <div
        style={{
          width: "100%",
          height: 12,
          background: "#1f1414",
          borderRadius: 6,
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#660000",
            transition: "0.2s"
          }}
        />
      </div>
    </div>
  );
}
