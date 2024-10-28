import React from "react";
//import "./TableFila.css";

const TableFila = ({ fila }) => {
  return (
    <div>
      <h1 className="color-title bg-dark">Fila Virtual</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Legajo</th>
            <th>Trámite</th>
            <th>Hora</th>
            <th>Posición en fila</th>
          </tr>
        </thead>
        <tbody>
          {/* {fila.map((fila) => (
            <tr key={fila.id}>
              <td>{fila.legajo}</td>
              <td>{fila.tramite}</td>
              <td>{fila.hora}</td>
              <td>{fila.posicion}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default TableFila;
