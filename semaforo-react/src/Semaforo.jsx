import { useState, useEffect } from "react";
import "./Semaforo.css";

export default function Semaforo() {
  const [color, setColor] = useState("red");
  const [auto, setAuto] = useState(false);

  // Secuencia
  const secuencia = [
    { color: "red", tiempo: 4000 },
    { color: "yellow", tiempo: 1000 },
    { color: "green", tiempo: 3000 },
    { color: "yellow", tiempo: 1000 },
  ];

  useEffect(() => {
    if (!auto) return;

    let index = 0;
    setColor(secuencia[index].color);

    function cambiarColor() {
      index = (index + 1) % secuencia.length;
      setColor(secuencia[index].color);

      // Programar el siguiente cambio
      timer = setTimeout(cambiarColor, secuencia[index].tiempo);
    }

    let timer = setTimeout(cambiarColor, secuencia[index].tiempo);

    return () => clearTimeout(timer); // limpiar al detener
  }, [auto]);

  return (
    <div className="container">
      <h1>Semáforo 🚦</h1>

      {/* círculo que cambia de color */}
      <div className="circle" role="presentation" style={{ backgroundColor: color }}></div>

      {/* botones para elegir color manualmente */}
      <div className="buttons">
        {["red", "yellow", "green"].map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            disabled={color === c}
            style={{
              backgroundColor: c,
              color: "white",
              opacity: color === c ? 0.5 : 1,
            }}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      {/* botón para activar automático */}
      <button className="auto-btn" onClick={() => setAuto(!auto)}>
        {auto ? "Detener automático" : "Iniciar automático"}
      </button>
    </div>
  );
}
