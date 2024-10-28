import React from "react";
import { useNavigate } from "react-router-dom";

import TitleFv from "../components/TitleFv";

const WhatsAppScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/turno");
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <TitleFv />
      </div>
      <div className="col">
        <div className="col text-center">
          <h4 className="py-4">
            ¿Deseas recibir una notificación vía Whatsapp cuando sea tu turno?
          </h4>
        </div>
        <div className="col col-md-6 offset-md-3">
          <form onSubmit="">
            <div className="mb-3 d-grid">
              <label>Ingrese su número de teléfono</label>
              <input
                type="number"
                className="form-control"
                placeholder="Número de teléfono: 3815789536"
                name="telefono"
              />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button
                className="btn btn-success w-50 mx-2 "
                onClick={handleClick}
              >
                SÍ
              </button>
              <button
                className="btn btn-danger w-50 mx-2"
                onClick={handleClick}
              >
                NO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppScreen;
