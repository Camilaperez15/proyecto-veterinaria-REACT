import React from 'react';
import '../styles/Mascota.css'; 
import logo from '../imagenes/logo.png';

const RegistroMascota = () => {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src= {logo} alt="Veterinaria KAMIL" />
          </div>
          <div className="header__info">
            <h1 className="header__title">Veterinaria KAMIL</h1>
            <p className="header__subtitle">Cuidamos de tus mascotas con amor y profesionalismo</p>
          </div>
        </div>
      </header>

      <div className="body-overlay"></div>


      <form className="formulario-propietario">
        <h1 className="formulario-propietario__titulo">REGISTRO DE MASCOTA</h1>

        <label className="formulario-propietario__label" htmlFor="nombre">Nombre</label>
        <input className="formulario-propietario__input" type="text" name="nombre" id="nombre" placeholder="Nombre de la Mascota" required />

        <label className="formulario-propietario__label" htmlFor="especie">Especie</label>
        <select className="formulario-propietario__select" name="especie" id="especie" required>
          <option value="">Seleccionar</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
          <option value="ave">Ave</option>
          <option value="otro">Otro</option>
        </select>

        <label className="formulario-propietario__label" htmlFor="raza">Raza</label>
        <input className="formulario-propietario__input" type="text" name="raza" id="raza" placeholder="Raza de la Mascota" required />

        <label className="formulario-propietario__label" htmlFor="edad">Edad</label>
        <input className="formulario-propietario__input" type="number" name="edad" id="edad" placeholder="Edad en años" required />

        <label className="formulario-propietario__label" htmlFor="peso">Peso</label>
        <input className="formulario-propietario__input" type="number" name="peso" id="peso" placeholder="Peso en kg" step="0.1" required />

        <label className="formulario-propietario__label" htmlFor="id_usuario">ID del Propietario</label>
        <input className="formulario-propietario__input" type="number" name="id_usuario" id="id_usuario" placeholder="ID del Propietario" required />

        <input className="formulario-propietario__boton" type="submit" value="Registrar Mascota" />
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

export default RegistroMascota;
