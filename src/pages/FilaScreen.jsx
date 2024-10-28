import React from "react";
import { useNavigate } from "react-router-dom";
import TitleFv from "../components/TitleFv";

const FilaScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/whatsapp");
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <TitleFv />
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit="">
            <div className="mb-3 d-grid">
              <label>Ingrese su número de legajo</label>
              <input
                type="number"
                className="form-control"
                placeholder="Número de legajo: 50481"
                name="legajo"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                No tengo número de legajo
              </label>
            </div>
            <div className="mb-3 d-grid">
              <label>Seleccione el tipo de trámite que desea realizar</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button className="btn btn-success w-50" onClick={handleClick}>
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilaScreen;
