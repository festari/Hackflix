import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Imagen from "./components/header";
import data from "./data.json";
import Rating from "./components/stars";

function App() {
  return (
    <>
      <Imagen />
      <div className="container">
        <div className="grilla">
          {data.map((movie) => (
            <div key={movie.id} className="tarjeta">
              <img src={movie.poster_path} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
