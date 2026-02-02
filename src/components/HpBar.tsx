"use client";

export default function HpBar({
  hp,
  maxHp
}: {
  hp: number;
  maxHp: number;
}) {
  const percent = Math.floor((hp / maxHp) * 100);

  return (
    <div style={{ marginBottom: 10 }}>
      <p>
        ❤️ HP: {hp}/{maxHp}
      </p>

      <div
        style={{
          width: "100%",
          height: 14,
          background: "#222",
          borderRadius: 8,
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: percent < 30 ? "darkred" : "red",
            transition: "0.2s"
          }}
        />
      </div>
    </div>
  );
}
