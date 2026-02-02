"use client";

import { useEffect, useState } from "react";

export default function Exploration() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 10));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Exploração automática</p>

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