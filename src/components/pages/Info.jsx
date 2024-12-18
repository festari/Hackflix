import React from "react";
import "./Info.css";
import NavigationBar from "../NavigationBar";

function Info() {
  return (
    <div>
      <NavigationBar />
      <div className="informacion-container">
        <div className="title">
          <h2>Nuestro Equipo</h2>
        </div>
        <div className="card-position">
          <div className="card">
            <img
              src="https://cdn.picrew.me/shareImg/org/202411/644129_kntzcOVS.png"
              alt="Persona 1"
            />
            <h3>Ignacio</h3>
          </div>
          <div className="card">
            <img
              src="https://cdn.picrew.me/shareImg/org/202411/644129_FVzkQoRl.png"
              alt="Persona 2"
            />
            <h3>Nicolas</h3>
          </div>
          <div className="card">
            <img
              src="https://cdn.picrew.me/shareImg/org/202411/644129_WQnUqBc8.png"
              alt="Persona 3"
            />
            <h3>Yuliana</h3>
          </div>
        </div>
        <div className="contact-forms">
          <div className="contacto">
            <h3>Contacto:</h3>
            <p>
              Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
              contacto con nosotros.
            </p>
            <p>Email: contacto@hackflix.com</p>
          </div>

          <div className="telefono">
            <h3>Número de Teléfono</h3> <p>Teléfono: +123 456 7890</p>
          </div>

          <div className="direccion">
            <h3>Ubicación:</h3>
            <p>Calle Falsa 123 - Reloco Av. & Masterloko st. 1997</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
