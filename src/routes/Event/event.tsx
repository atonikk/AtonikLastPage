import React, { useEffect } from "react";
import serpienteCard from "../../assets/serpientecard.jpg";
import iconDate from "../../assets/iconDate.png";
import iconPrice from "../../assets/iconPrice.png";
import iconOpenDoors from "../../assets/iconOpenDoors.png";
import {
  GoogleMap,
  Circle,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

export const Event = () => {
  const latitude = 4.6101;
  const longitude = -74.0704;
  const center = { lat: latitude, lng: longitude };

  const [startGradient, setStartGradient] = React.useState("#194111");
  const [endGradient, setEndGradient] = React.useState(" #000000");
  const [title, setTitle] = React.useState("Un evento super grandioso");

  const [description, setDescription] = React.useState(
    "Sumérgete en un ambiente mágico en el Jardín Botánico Central, donde los aromas, las luces y la naturaleza se fusionan para crear una experiencia inolvidable. Descubre estaciones culinarias con sabores de todo el mundo, catas de vinos y cocteles exclusivos, y rincones de postres que parecen sacados de un cuento."
  );
  const [ticket, setTicket] = React.useState(
    "Una noche mágica con el CEO disenador, ademas de barra libre hasta las 10:00 P.M"
  );
  const [date, setDate] = React.useState("2025-06-01");
  const [price, setPrice] = React.useState("10000");
  const [location, setLocation] = React.useState("");
  const [timeLeft, setTimeLeft] = React.useState<{
    Dias: number;
    Horas: number;
    Minutos: number;
    Segundos: number;
  }>({
    Dias: 0,
    Horas: 0,
    Minutos: 0,
    Segundos: 0,
  });
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDpwTJMK1CAY8k4jpK2gkAFwHQ2c0xyo-w",
  });
  useEffect(() => {
    console.log("isLoaded", isLoaded);
  }, [isLoaded]);
  const [image, setImage] = React.useState("");
  const [openDoors, setOpenDoors] = React.useState("20:00");
  const calculateTimeLeft = () => {
    const eventDate = new Date(`${date}T${openDoors}`);
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / (1000 * 60)) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return { Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 };
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(timer);
  }, [date, openDoors]);

  return (
    <div style={styles.container as React.CSSProperties}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "white",
          marginBottom: "70px",
        }}
      >
        Disena aqui tu evento
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "50%",
        }}
      >
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            height: "100%",
          }}
        >
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Inicio gradiente:
            </label>
            <input
              type="color"
              onChange={(e) => setStartGradient(e.target.value)}
              style={{
                width: "50px",
                height: "30px",
                border: "none",
                cursor: "pointer",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Final gradiente:
            </label>
            <input
              type="color"
              onChange={(e) => setEndGradient(e.target.value)}
              style={{
                width: "50px",
                height: "30px",
                border: "none",
                cursor: "pointer",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Nombre
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Descripcion
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Precio
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Fecha del evento
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Hora de apertura
            </label>
            <input
              type="time"
              value={openDoors}
              onChange={(e) => setOpenDoors(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Ticket
            </label>
            <input
              type="text"
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              style={{
                width: "100%",
                height: "30px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </div>
          <div style={styles.divinput as React.CSSProperties}>
            <label
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            >
              Imagen
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    if (event.target?.result) {
                      setImage(event.target.result as string);
                    }
                  };
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
              style={{
                width: "100%",
                height: "30px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            padding: "20px",
            flexDirection: "column",
            marginTop: "700px",
            position: "relative",
          }}
        >
          <img
            src={image ? image : serpienteCard}
            alt="serpienteCard"
            style={{
              height: "200px",
              width: "273px", // Increased width (70% of original)
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              objectFit: "cover",
              transition: "transform 0.2s",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              zIndex: "1",
              transform: "translateY(15%)",
            }}
          />
          <div
            style={
              {
                ...styles.card,
                background: `linear-gradient(to bottom, ${startGradient}, ${endGradient})`,
                height: "auto", // Allow height to adjust dynamically
                position: "relative",
                zIndex: "2",
                marginTop: "180px", // Adjust to align with the hidden part of the image
              } as React.CSSProperties
            }
          >
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "white",
                padding: "12px",
                marginTop: "10px",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: "0.8rem",
                color: "white",
                marginTop: "5px",
                padding: "13px",
              }}
            >
              {description}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <img
                  src={iconDate}
                  alt="iconDate"
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "10px",
                  }}
                />
                <span
                  style={{
                    color: "white",
                    fontSize: "0.8rem",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  FECHA DEL EVENTO {"\n"}
                  <span style={{ color: "#7a7777" }}>
                    {new Date(date).toLocaleDateString("es-ES", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <img
                  src={iconPrice}
                  alt="iconPrice"
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "10px",
                  }}
                />
                <span
                  style={{
                    color: "white",
                    fontSize: "0.8rem",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  PRECIO {"\n"}
                  <span style={{ color: "#7a7777" }}>
                    {new Intl.NumberFormat("es-ES", {
                      style: "currency",
                      currency: "COP",
                    }).format(parseFloat(price))}
                  </span>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconOpenDoors}
                  alt="iconOpenDoors"
                  style={{
                    width: "35px",
                    height: "35px",
                    marginRight: "10px",
                  }}
                />
                <span
                  style={{
                    color: "white",
                    fontSize: "0.8rem",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  OPEN DOORS {"\n"}
                  <span style={{ color: "#7a7777" }}>
                    {openDoors}{" "}
                    {parseInt(openDoors.split(":")[0]) >= 12 ? "PM" : "AM"}
                  </span>
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                ¿QUE INCLUYE EL TICKET?{" "}
              </h2>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "white",
                  marginTop: "5px",
                  padding: "0px",
                }}
              >
                {ticket}
              </p>
            </div>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "left",
                color: "white",
                marginBottom: "0px",
                padding: "0px 20px",
              }}
            >
              FALTAN
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "15px",
                borderBottom: "1px solid #ccc",
                paddingTop: "0px",
              }}
            >
              {Object.entries(timeLeft).map(([key, value]) => (
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    padding: "5px",
                    margin: "6px",
                  }}
                  // style={{
                  //   backgroundColor: "#ff0000",
                  //   width: "90%",
                  //   flexDirection: "row",
                  //   borderRadius: "20px",
                  //   padding: "10px 20px",
                  //   color: "#333",
                  //   fontSize: "1rem",
                  //   fontWeight: "bold",
                  // }}
                >
                  <div
                    style={{
                      background: "rgba(11, 8, 22, 0.25)", // Added transparency
                      color: "#fff",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      margin: "5px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {value}
                    <span
                      style={{
                        color: "#fff",
                        fontSize: key === "Segundos" ? "0.75rem" : "0.8rem",
                        textTransform: "capitalize",
                      }}
                    >
                      {key}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "left",
                color: "white",
                marginBottom: "0px",
                padding: "0px 20px",
              }}
            >
              UBICACION
            </h2>
            <div
              style={{
                width: "80%",
                height: "200px",
                paddingLeft: "25px",
                paddingRight: "25px",
                paddingBottom: "20px",
                borderRadius: "8px",
                overflow: "hidden",
                marginTop: "10px",
              }}
            >
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={styles.containerStyle}
                  center={center}
                  zoom={15}
                >
                  <Circle
                    center={center}
                    radius={300}
                    options={{
                      strokeColor: "#FF0000",
                      fillColor: "rgba(255, 0, 0, 0.3)",
                      fillOpacity: 0.3,
                      strokeWeight: 2,
                    }}
                  />
                </GoogleMap>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  containerStyle: {
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    display: "flex",
    textAlign: "center",
    padding: "20px",
    margin: "0",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  card: {
    borderRadius: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    height: "591px", // Increased height (70% of original)
    width: "273px", // Increased width (70% of original)
    maxWidth: "100%",
  },
  divinput: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
};
