import React from "react";
import "./Info.css";
import NavigationBar from "./NavigationBar";
import FooterComponent from "./Footer";

function Info() {
  return (
    <div>
      <NavigationBar />
      <div className="info">
        <h2>Nuestro Equipo</h2>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGP6wsVMhwaayalDgT7Cotvyg9_QeN0nzUg&s"
            alt="Persona 1"
          />
          <h3>Persona 1</h3>
        </div>
        <div className="card">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png"
            alt="Persona 2"
          />
          <h3>Persona 2</h3>
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/736x/35/c2/ae/35c2ae3c92b06ef120c2ba8e26d2db12.jpg"
            alt="Persona 3"
          />
          <h3>Persona 3</h3>
        </div>
      </div>
      <div className="contacto">
        {" "}
        <h3>Contacto:</h3>{" "}
        <p>
          Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
          contacto con nosotros.
        </p>{" "}
        <p>Email: contacto@hackflix.com</p>{" "}
      </div>{" "}
      <div className="telefono">
        {" "}
        <h3>Número de Teléfono</h3> <p>Teléfono: +123 456 7890</p>{" "}
      </div>
      <div className="direccion">
        {" "}
        <h3>Ubicación:</h3>
        <p>Calle Falsa 123 - Reloco Av. & Masterloko st. 1997</p>{" "}
      </div>
      <FooterComponent />
    </div>
  );
}

export default Info;
