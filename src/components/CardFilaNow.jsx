import React, { useEffect, useState } from "react";
import "../css/CardFilaNow.css";

const CardFilaNow = ({ turnoId = "A123" }) => {
  const [turno, setTurno] = useState(null);

  useEffect(() => {
    // Simulate fetching turno data
    const fetchTurno = async () => {
      // Replace with actual data fetching logic
      const turnoData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id: turnoId, numero: "A123", tiempo: "10:30 AM" });
        }, 1000);
      });
      setTurno(turnoData);
    };

    fetchTurno();
  }, [turnoId]);

  if (!turno) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card text-center">
      <div className="card-header">En atención</div>
      <div className="card-body">
        <h1 className="text-success">{turno.numero}</h1>
        <span className="text-muted lead">{turno.tiempo}</span>
      </div>
    </div>
  );
};

export default CardFilaNow;
