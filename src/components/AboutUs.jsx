import React from "react";
import "./AboutUs.css";
import NavigationBar from "./NavigationBar";

function AboutUs() {
  return (
    <div>
      <NavigationBar />
      <h1>Sobre Nosotros:</h1>
      <div className="content">
        <p>
          Bienvenidos a nuestra página web dedicada a las películas descritas.
          Somos un equipo apasionado por el cine y comprometido con hacer que el
          séptimo arte sea accesible para todos. Nuestra misión es proporcionar
          descripciones detalladas y enriquecedoras de películas, permitiendo
          que las personas con discapacidades visuales puedan disfrutar de una
          experiencia cinematográfica completa. Creemos que el cine es una forma
          poderosa de contar historias y conectar a las personas. Por eso, nos
          esforzamos en ofrecer descripciones que capturen no solo los diálogos,
          sino también los matices visuales, las emociones y la atmósfera de
          cada escena. Nuestro objetivo es que cada usuario pueda sumergirse en
          la magia del cine, independientemente de sus capacidades visuales. En
          nuestra página, encontrarás una amplia variedad de películas
          descritas, desde los clásicos atemporales hasta los últimos estrenos.
          Trabajamos constantemente para ampliar nuestra biblioteca y
          asegurarnos de que siempre haya algo nuevo y emocionante para
          descubrir. Además, nos dedicamos a mantenernos actualizados con las
          últimas tendencias y tecnologías en accesibilidad, para ofrecer la
          mejor experiencia posible a nuestros usuarios.
        </p>
        <p>
          Nuestro equipo está compuesto por expertos en cine, narradores y
          profesionales de la accesibilidad, todos unidos por la pasión de hacer
          el cine más inclusivo. Colaboramos con organizaciones y comunidades
          para entender mejor las necesidades de nuestros usuarios y mejorar
          continuamente nuestros servicios. Creemos firmemente en la importancia
          de la inclusión y la igualdad de acceso a la cultura y el
          entretenimiento. Además de las descripciones de películas, ofrecemos
          recursos educativos y artículos sobre la importancia de la
          accesibilidad en el cine.
        </p>
        <p>
          Queremos crear una comunidad donde todos puedan compartir sus
          experiencias, opiniones y recomendaciones sobre películas. Tu feedback
          es invaluable para nosotros, ya que nos ayuda a mejorar y crecer.
          Gracias por visitarnos y ser parte de nuestra comunidad. Esperamos que
          disfrutes de las películas tanto como nosotros disfrutamos
          describiéndolas para ti.
        </p>
        <p>
          ¡Bienvenido al mundo del cine accesible! Si tienes alguna pregunta o
          sugerencia, no dudes en ponerte en contacto con nosotros. Estamos aquí
          para ayudarte y hacer que tu experiencia sea lo más enriquecedora
          posible.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
