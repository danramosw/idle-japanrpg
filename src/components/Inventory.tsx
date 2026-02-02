"use client";

export default function Inventory() {
  const slots = Array.from({ length: 9 });

  return (
    <div>
      <h3>Inventário</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: 6
        }}
      >
        {slots.map((_, i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 60,
              border: "1px solid #3c2f2f",
              borderRadius: 8,
              background: "#111"
            }}
          />
        ))}
      </div>
    </div>
  );
}