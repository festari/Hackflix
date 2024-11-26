import React, { useState } from "react";
import "./Login.css";
import NavigationBar from "../NavigationBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "12345") {
      setMessage("Inicio de sesión exitoso");
    } else {
      setMessage("Correo o contraseña incorrectos");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="login-position">
        <div className="login-container">
          <h2 className="login-title">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email" className="login-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="login-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
          </form>
          {message && <p className="login-message">{message}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
