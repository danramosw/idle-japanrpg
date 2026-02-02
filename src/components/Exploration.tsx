"use client";

import { useEffect, useState } from "react";
import { rollDrop } from "@/lib/drops";
import { fightEnemy } from "@/lib/combat";

export default function Exploration() {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [gold, setGold] = useState(0);
  const [level] = useState(1);

  function addLog(text: string) {
    setLog((prev) => [text, ...prev.slice(0, 8)]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          // Event trigger
          const eventRoll = Math.random();

          // Combat 20%
          if (eventRoll < 0.2) {
            const battle = fightEnemy(level);
            battle.log.forEach(addLog);
            setGold((g) => g + battle.gold);
          } else {
            const gain = 10 + Math.floor(Math.random() * 15);
            addLog(`🌙 Você explora... +${gain} gold`);
            setGold((g) => g + gain);
          }

          // Drop roll
          const drop = rollDrop();
          if (drop) {
            addLog(`🎁 Drop: ${drop.name} (${drop.rarity})`);
          }

          return 0;
        }

        return p + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [level]);

  return (
    <div>
      <h3>Exploração Idle</h3>

      <p>Gold: {gold}</p>

      {/* Progress bar */}
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

      {/* Log */}
      <div style={{ marginTop: 10, fontSize: 12 }}>
        {log.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}
