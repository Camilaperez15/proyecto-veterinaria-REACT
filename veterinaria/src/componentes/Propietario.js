import React from 'react';
import '../styles/Propietario.css'; 
import logo from '../imagenes/logo.png'; 

const RegistroPropietario = () => {
  return (
    <div className="registro-propietario-container">
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="Veterinaria KAMIL" />
          </div>
          <div className="header__info">
            <h1 className="header__title">Veterinaria KAMIL</h1>
            <p className="header__subtitle">Cuidamos de tus mascotas con amor y profesionalismo</p>
          </div>
        </div>
      </header>

      <div className="body-overlay"></div>

      <form className="formulario-propietario">
        <h1 className="formulario-propietario__titulo">REGISTRO DE PROPIETARIO</h1>

        <label className="formulario-propietario__label" htmlFor="tipo-documento">Tipo de documento</label>
        <select className="formulario-propietario__select" name="tipo-documento" id="tipo-documento">
          <option value="">Seleccionar</option>
          <option value="cc">CC</option>
          <option value="ce">CE</option>
          <option value="pe">PE</option>
        </select>

        <label className="formulario-propietario__label" htmlFor="id_usuario">Número de documento</label>
        <input className="formulario-propietario__input" type="number" name="id" id="id_usuario" placeholder="Documento" required />

        <label className="formulario-propietario__label" htmlFor="nombre">Nombre</label>
        <input className="formulario-propietario__input" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" required />

        <label className="formulario-propietario__label" htmlFor="apellido">Apellido</label>
        <input className="formulario-propietario__input" type="text" name="apellido" id="apellido" placeholder="Ingrese su Apellido" required />

        <label className="formulario-propietario__label" htmlFor="ciudad">Ciudad</label>
        <input className="formulario-propietario__input" type="text" name="ciudad" id="ciudad" placeholder="Ingrese su Ciudad" required />

        <label className="formulario-propietario__label" htmlFor="direccion">Dirección</label>
        <input className="formulario-propietario__input" type="text" name="direccion" id="direccion" placeholder="Ingrese su Dirección" required />

        <label className="formulario-propietario__label" htmlFor="telefono">Teléfono</label>
        <input className="formulario-propietario__input" type="number" name="telefono" id="telefono" placeholder="Ingrese su Teléfono" required />

        <label className="formulario-propietario__label" htmlFor="barrio">Barrio</label>
        <input className="formulario-propietario__input" type="text" name="barrio" id="barrio" placeholder="Ingrese su Barrio" required />

        <label className="formulario-propietario__label" htmlFor="correo">Correo</label>
        <input className="formulario-propietario__input" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" required />

        <label className="formulario-propietario__label" htmlFor="password">Contraseña</label>
        <input className="formulario-propietario__input" type="password" name="password" id="password" placeholder="Ingrese su Contraseña" required />

        <input className="formulario-propietario__boton" type="submit" value="Guardar" />
      </form>

      <footer className="footer">
        <div className="footer__info">
          <h4>Contáctanos</h4>
          <p>Teléfono: 1234-5678</p>
          <p>Email: contacto@kamilveterinaria.com</p>
        </div>
        <div className="footer__social">
          <h4>Síguenos en redes sociales</h4>
          <p>Facebook: VeterinariaKamilOficial</p>
          <p>Instagram: @KamilMascotas</p>
          <p>Twitter: @KamilVet</p>
        </div>
      </footer>
    </div>
  );
};

export default RegistroPropietario;
