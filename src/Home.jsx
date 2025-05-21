import { useState } from "react";
import reactLogo from "./assets/react.svg";
import atonikLogo from "./assets/atonik.svg";
import viteLogo from "/vite.svg";
import mockup from "./assets/mockup.png";
import mockup2 from "./assets/mockup2.png";
import appStore from "./assets/appStore.svg";
import googlePlay from "./assets/playStore.svg";
import "./responsive.css";
import { Link } from "react-router-dom";
import whatsapp from "./assets/ws.png";
import instagram from "./assets/ig.png";
import tiktok from "./assets/tiktok.png";
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <nav className="home-nav">

        <Link to="/child-safety" className="home-link">
          Politicas
        </Link>
        {[
          "Inicio",
          "Contacto",
          "Pricing",
          "Acerca",
          "Términos y condiciones",
        ].map((item, index) => (
          <a
            key={index}
            className="home-link"
          >
            {item}
          </a>
        ))}
        <div className="social-buttons">
          <a
            href="https://www.instagram.com/atonik_app/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@atonik.app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src={tiktok} alt="TikTok" className="social-icon" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573228519140&text=Hola%20atonik!"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src={whatsapp} alt="WhatsApp" className="social-icon" />
          </a>
        </div>
      </nav>

      <div className="home-content">
        <div className="caja-mockups">
          <img src={mockup} className="mockup-image mockup-1" />
          <img src={mockup} className="mockup-image mockup-2" />
          <img src={mockup2} className="mockup-image mockup-3" />
        </div>
        <div className="home-text">
          <div className="home-logo-container">
            <img src={atonikLogo} alt="Atonik logo" className="atonik-logo" />
            <h1 className="home-title">AtoniK</h1>
          </div>
          <h2 className="home-subtitle">
            Descarga nuestra app y empieza a disfrutar de los eventos como nunca
            antes
          </h2>
          <div className="home-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.atonik.atonik"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
            >
              <img
                src={googlePlay}
                alt="Google Play Store"
                className="store-image"
              />
            </a>
            <a
              href="https://apps.apple.com/co/app/sigme/id6743329344"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
            >
              <img src={appStore} alt="App Store" className="store-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="home-grid">
        {[
          {
            title: "🚀 ¿Qué es Atonik?",
            description:
              "Atonik es una plataforma innovadora pensada para transformar por completo la forma de organizar y vivir los eventos. Su enfoque combina difusión, facilidad de uso y seguridad en una solución todo en uno para organizadores y asistentes.",
          },
          {
            title: "📣 Mayor Alcance con Estilo Social",
            description:
              "Gracias a su diseño tipo red social, los eventos ganan visibilidad fácilmente. Los usuarios pueden compartir, comentar e interactuar con las publicaciones, ayudando a que cada evento se vuelva viral.",
          },
          {
            title: "💳 Pagos Simples y Rápidos",
            description:
              "Atonik admite múltiples formas de pago: tarjetas, billeteras digitales, y más. Esto permite a los asistentes comprar con facilidad, y a los organizadores gestionar todo el dinero desde un solo lugar con transparencia.",
          },
          {
            title: "📊 Estadísticas en Tiempo Real",
            description:
              "Obtén acceso a métricas clave: ventas, alcance, interacción y más. Toda la información que necesitas para tomar mejores decisiones y mejorar tus próximos eventos.",
          },
          {
            title: "🎫 Tickets Automáticos y Escaneables",
            description:
              "Cada entrada se genera automáticamente y puede ser escaneada desde la app. Esto facilita el acceso y mantiene el control y orden en el ingreso.",
          },
          {
            title: "📱 Acceso Multiplataforma",
            description:
              "Atonik funciona desde cualquier dispositivo: móvil, tablet o PC. Así, organizadores y asistentes pueden interactuar con la app en cualquier momento y lugar.",
          },
          {
            title: "🔒 Seguridad Garantizada",
            description:
              "Contamos con tecnología de seguridad avanzada para proteger los datos y garantizar transacciones seguras. Organizadores y usuarios pueden confiar totalmente en Atonik.",
          },
          {
            title: "✅ Todo en Uno",
            description:
              "Atonik no es solo una app, es un ecosistema completo que combina difusión, pagos, gestión y análisis en una experiencia moderna y fácil de usar.",
          },
        ].map((item, index) => (
          <div key={index} className="home-grid-item">
            <p className="grid-title">{item.title}</p>
            <p className="grid-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
