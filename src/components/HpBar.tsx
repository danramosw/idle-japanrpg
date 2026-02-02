"use client";

export default function HpBar({
  current,
  max
}: {
  current: number;
  max: number;
}) {
  const percent = Math.floor((current / max) * 100);

  return (
    <div>
      <p>
        HP: {current}/{max}
      </p>
      <div
        style={{
          width: "100%",
          height: 10,
          background: "#222",
          borderRadius: 6
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "#990000"
          }}
        />
      </div>
    </div>
  );
}