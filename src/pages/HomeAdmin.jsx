import React, { useState, useEffect } from "react";
//import { getTurnos } from "../helpers/filaApi";
//import {getTurnosById} from "../helpers/filaApi";

import TableFila from "../components/TableFila";
import CardFilaNow from "../components/CardFilaNow";

const HomeAdmin = () => {
  //  const [fila, setFila] = useState(null);

  //  useEffect(() => {
  // traerFila();
  //  }, []);

  const traerFila = async () => {
    const { data } = await getTurnos();
    setFila(data);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h2 className="color-title">Gestionar Fila Virtual</h2>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-success">
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <TableFila /*fila={fila}*/ />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CardFilaNow />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
