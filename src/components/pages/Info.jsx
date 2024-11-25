import React from "react";
import "./Info.css";
import NavigationBar from "../NavigationBar";

function Info() {
  return (
    <div>
      <NavigationBar />
      <div className="info">
        <h2>Nuestro Equipo</h2>
        <div className="card">
          <img src="img/animales300101.jpg" alt="Persona 1" />
          <h3>Ignacio</h3>
        </div>
        <div className="card">
          <img src="img/9043c4c90d43d9a5c27214ca5dbdbb5b.jpg" alt="Persona 2" />
          <h3>Nicolas</h3>
        </div>
        <div className="card">
          <img src="img/image-51.webp" alt="Persona 3" />
          <h3>Yuliana</h3>
        </div>
        <div className="card">
          <img src="img/Oryctolagus_cuniculus_Tasmania_2.jpg" alt="Persona 3" />
          <h3>Belen</h3>
        </div>
      </div>
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
      <FooterComponent />
    </div>
  );
}

export default Info;
