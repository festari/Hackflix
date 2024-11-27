import React from "react";
import "./AboutUs.css";
import NavigationBar from "../NavigationBar";

function AboutUs() {
  return (
    <div>
      <NavigationBar />
      <div className="container-aboutus">
        <h1>Sobre Nosotros:</h1>
        <div className="container text ">
          <p className="P1">
            Bienvenidos a nuestra página web dedicada a las películas descritas.
            Somos un equipo apasionado por el cine y comprometido con hacer que
            el séptimo arte sea accesible para todos. Nuestra misión es
            proporcionar descripciones detalladas y enriquecedoras de películas,
            permitiendo que las personas con discapacidades visuales puedan
            disfrutar de una experiencia cinematográfica completa. Creemos que
            el cine es una forma poderosa de contar historias y conectar a las
            personas. Por eso, nos esforzamos en ofrecer descripciones que
            capturen no solo los diálogos, sino también los matices visuales,
            las emociones y la atmósfera de cada escena. Nuestro objetivo es que
            cada usuario pueda sumergirse en la magia del cine,
            independientemente de sus capacidades visuales. En nuestra página,
            encontrarás una amplia variedad de películas descritas, desde los
            clásicos atemporales hasta los últimos estrenos. Trabajamos
            constantemente para ampliar nuestra biblioteca y asegurarnos de que
            siempre haya algo nuevo y emocionante para descubrir. Además, nos
            dedicamos a mantenernos actualizados con las últimas tendencias y
            tecnologías en accesibilidad, para ofrecer la mejor experiencia
            posible a nuestros usuarios.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
