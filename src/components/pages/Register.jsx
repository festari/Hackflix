import React, { useState } from "react";
import "./Register.css";
import NavigationBar from "../NavigationBar";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden");
    } else {
      setMessage("Registro exitoso");
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="register-container">
        <h2 className="register-title">Registro</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label htmlFor="name" className="register-label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="register-input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="register-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="register-input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="register-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="register-input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword" className="register-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="register-input"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        {message && <p className="register-message">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
