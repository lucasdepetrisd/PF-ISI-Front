import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap"; // Asegúrate de tener react-bootstrap instalado

import "../css/turno.css";

const TurnoPage = () => {
  const [turnoActual, setTurnoActual] = useState("D35");
  const [esTurno, setEsTurno] = useState(false);
  const [personasAdelante, setPersonasAdelante] = useState(10); // Personas adelante
  const [tiempoEspera, setTiempoEspera] = useState(15); // Tiempo de espera en minutos
  const [progreso, setProgreso] = useState(0); // Progreso del spinner

  // Simular actualización de turno y progreso
  useEffect(() => {
    const interval = setInterval(() => {
      if (personasAdelante > 0) {
        setPersonasAdelante(personasAdelante - 1);
        setTiempoEspera(tiempoEspera - 1);
        setProgreso(progreso + 10);
      } else {
        setEsTurno(true);
        setTurnoActual("¡Es tu turno!");
      }
    }, 2000); // Simulación de actualización cada 2 segundos

    return () => clearInterval(interval);
  }, [personasAdelante, tiempoEspera, progreso]);

  return (
    <div className="container text-center mt-1">
      <div className="row justify-content-center">
        <div className="col">
          <h3>Juan Perez</h3>
        </div>
      </div>

      <div className="row justify-content-center mt-2">
        <div className="col-md-6">
          <div>
            <h2>Número de turno</h2>
          </div>
          <div
            className={`card ${
              esTurno ? "bg-success text-white" : "color-title"
            }`} // Cambia a verde cuando sea su turno
          >
            <div className="card-body size-font">
              <h1>{turnoActual}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 mb-3 mb-lg-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title color-title">
                <i className="fa fa-user-o m-1" aria-hidden="true"></i>
                {personasAdelante}
              </h5>
              <p className="card-text">Personas adelante en la fila</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title color-title">
                <i className="fa fa-clock-o m-1" aria-hidden="true"></i>
                {tiempoEspera} minutos
              </h5>
              <p className="card-text">Tiempo de espera</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spinner de progreso */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div>
            <h5>Progreso del turno</h5>
          </div>
          <Spinner
            animation="border"
            role="status"
            variant={esTurno ? "success" : "primary"}
            className="size-spinner"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="mt-3">
            <progress value={progreso} max="100" className="w-100"></progress>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <button type="button" className="btn btn-danger w-50">
            Cancelar Turno
          </button>
        </div>
      </div>
    </div>
  );
};

export default TurnoPage;
