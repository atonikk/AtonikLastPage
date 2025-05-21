import React from "react";

const ChildSafety = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Declaración de Seguridad Infantil</h1>

        <p style={styles.paragraph}>
          Nuestra aplicación ha sido diseñada teniendo en cuenta los estándares
          de seguridad infantil establecidos por Google Play.
        </p>

        <p style={styles.paragraph}>
          No se permite la comunicación directa entre usuarios dentro de la
          plataforma. La única funcionalidad disponible es la posibilidad de
          visualizar los perfiles públicos de otras cuentas.
        </p>

        <p style={styles.paragraph}>
          La subida de contenido multimedia está estrictamente limitada a la
          fotografía de perfil. Esta imagen es verificada automáticamente
          mediante un sistema de detección diseñado para bloquear cualquier
          intento de contenido explícito o inapropiado.
        </p>

        <p style={styles.paragraph}>
          Cualquier intento de subir contenido que viole estas normas resultará
          en la anulación directa de la cuenta, sin derecho a reembolsos ni
          respuesta acerca de las entradas adquiridas.
        </p>

        <div style={styles.highlight}>
          <p style={styles.highlightText}>
            Con estas medidas, garantizamos un entorno seguro y controlado para
            todos los usuarios, especialmente para los menores de edad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildSafety;

const styles = {
  container: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "16px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "14px",
    lineHeight: "22px",
  },
  highlight: {
    backgroundColor: "#eafaf1",
    borderLeft: "4px solid #2ecc71",
    padding: "12px 16px",
    borderRadius: "8px",
    marginTop: "20px",
  },
  highlightText: {
    color: "#2d6a4f",
    fontSize: "16px",
    fontWeight: "500",
  },
};
