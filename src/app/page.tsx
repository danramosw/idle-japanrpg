import Exploration from "@/components/Exploration";
import Inventory from "@/components/Inventory";
import Shop from "@/components/Shop";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: 180,
          borderRight: "1px solid #3c2f2f",
          padding: 10
        }}
      >
        <h3>Explorar</h3>
        <Exploration />
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: 20 }}>
        <h2>Ronin vs Yokai</h2>
        <p>Log de eventos aparecerá aqui.</p>
      </div>

      {/* Right panel */}
      <div
        style={{
          width: 220,
          borderLeft: "1px solid #3c2f2f",
          padding: 10
        }}
      >
        <Inventory />
        <Shop />
      </div>
    </div>
  );
}