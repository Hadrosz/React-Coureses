import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: -20, y: -20 });

  useEffect(() => {
    console.log("efecto");

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("first", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enable]);

  return (
    <main>
      <h3>Proyecto 3</h3>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"}
      </button>
    </main>
  );
}

export default App;
