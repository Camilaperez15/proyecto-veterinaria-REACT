import React from 'react';
import '../styles/Menu.css'; 

const Menu = () => {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src="/images/Designer.png" alt="Veterinaria KAMIL" />
          </div>
          <div className="header__info">
            <h1 className="header__title">Veterinaria KAMIL</h1>
            <p className="header__subtitle">Cuidamos de tus mascotas con amor y profesionalismo</p>
          </div>
          <div className="header__auth">
            <a href="/estructura/login.html" className="header__button">Iniciar Sesión</a>
          </div>
        </div>
      </header>

      <nav className="nav">
        <ul className="nav__menu">
          <li><a href="#" className="nav__item">Inicio</a></li>
          <li><a href="#" className="nav__item">Productos</a></li>
          <li><a href="#" className="nav__item">Servicios</a></li>
          <li><a href="#" className="nav__item">Agendar Cita</a></li>
          <li><a href="#" className="nav__item">Registrar Mascota</a></li>
        </ul>
      </nav>

      <main className="main">
        <div className="main__container">
          <section className="main__content">
            <h2>Bienvenidos a Veterinaria KAMIL</h2>
            <p>En nuestra clínica nos preocupamos por el bienestar y la salud de tus mascotas. Te ofrecemos los siguientes servicios:</p>
            <ul>
              <li>Consultas médicas personalizadas</li>
              <li>Procedimientos quirúrgicos menores</li>
              <li>Vacunación y desparasitación</li>
              <li>Laboratorio clínico avanzado</li>
              <li>Imagenología de alta precisión</li>
            </ul>
          </section>
          <section className="main__updates">
            <h3>Últimas Novedades</h3>
            <p>🎉 ¡Nueva promoción de vacunación completa para cachorros durante este mes!</p>
            <p>🐾 Consejos para el cuidado de mascotas en temporada de frío. </p>
          </section>
        </div>

        <section className="main__mosaic">
          <h3>Nuestros Peluditos</h3>
          <div id="mosiac-images"></div>
        </section>
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

export default Menu;
