import React from 'react';
import '../styles/Inicio_sesion.css'; 
import logo from '../imagenes/logo.png';
const Inicio_sesion = () => {
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

      <main className="login-main">
        <div className="login-container">
          <h1 className="name__title">Inicio de Sesión</h1>
          <form className="login-container__form">
            <label className="login-container__label" htmlFor="email">Correo Electrónico</label>
            <input className="login-container__input" type="email" id="email" name="email" required />

            <label className="login-container__label" htmlFor="password">Contraseña</label>
            <input className="login-container__input" type="password" id="password" name="password" required />

            <button className="login-container__button" type="submit">Entrar</button>
          </form>
          <div className="login-links">
            <a href="/estructura/registro_pro.html" className="login__registrarse">Registrarse</a>
            <a href="/estructura/contraseña.html" className="login__olvidaste">¿Olvidaste tu contraseña?</a>
          </div>
          <a href="/index.html" className="login__volver">Volver</a>
        </div>
      </main>

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

export default Inicio_sesion;
