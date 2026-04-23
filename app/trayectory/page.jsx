"use client";

import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import BackToTop from "../_components/BackToTop";
import { motion } from "framer-motion";

const historyEvents = [
  {
    year: "1901",
    title: "El comienzo",
    description:
      "Nace Gulf Oil Corporation y se instala el primer pozo de petróleo sobre el agua en Ferry Lake, Louisiana, Estados Unidos.",
    image: "/images/trayectory/history.webp",
  },
  {
    year: "1913",
    title: "Primera estación en el mundo",
    description:
      "Gulf inaugura la primera estación de servicio en Pittsburgh, Estados Unidos.",
    image: "/images/trayectory/history-2.webp",
  },
  {
    year: "1920",
    title: "Hola Gulf!",
    description:
      "Hace su aparición por primera vez el famoso logo naranja y azul de Gulf.",
    image: "/images/trayectory/history-12.webp",
  },
  {
    year: "1936",
    title: "Bye Bye Barco",
    description: "Gulf vende la conseción de Barco a Texaco.",
    image: "/images/trayectory/history-13.webp",
  },
  {
    year: "1943",
    title: "Aventura en Venezuela",
    description:
      "Gulf establece su presencia en los pozos petroleros de Venzuela.",
    image: "/images/trayectory/history-3.webp",
  },
  {
    year: "1967",
    title: "Naranja y Celeste",
    description:
      "Debutan los famosos colores de Gulf Racing que se volverían icónicos en el automovilismo.",
    image: "/images/trayectory/history-4.webp",
  },
  {
    year: "1970",
    title: "Nuevas Alturas",
    description:
      "Gulf alcanza su máxima producción, procesando 1,3 millones de barriles dairios.",
    image: "/images/trayectory/history-14.webp",
  },
  {
    year: "1971",
    title: "El Hombre de `Le Mans`",
    description:
      "La película `Le Mans` de Steve McQueen le otorga un prestigio a la marca.",
    image: "/images/trayectory/history-15.webp",
  },
  {
    year: "1971",
    title: "Victoria",
    description:
      "Gulf logra el bicampeonato en las miticas 24 horas de Le Mans junto al equipo JW Automotive.",
    image: "/images/trayectory/history-5.webp",
  },
  {
    year: "1975",
    title: "The Hinduja Group",
    description:
      "The Hinduja Group adquiere la marca Gulf y se convierte en Gulf Oil International.",
    image: "/images/trayectory/history-6.webp",
  },
  {
    year: "2004",
    title: "Patentados",
    description:
      "Gulf se convierte en la primer compañia de lubricantes de la historia en patentar sus colores de competición.",
    image: "/images/trayectory/history-7.webp",
  },
  {
    year: "2007",
    title: "Justo a Tiempo",
    description: "Gulf se asocia con Tag Heuer.",
    image: "/images/trayectory/history-10.webp",
  },
  {
    year: "2008",
    title: "Mundo Acuático",
    description:
      "Se establece Gulf Oil Marine, que presta servicios a más de 400 puertos en todo el mundo.",
    image: "/images/trayectory/history-8.webp",
  },
  {
    year: "2008",
    title: "Cielo Alto",
    description: "Se establece Gulf Aviation UK.",
    image: "/images/trayectory/history-21.webp",
  },
  {
    year: "2016",
    title: "Premiado",
    description: "gulf gana el premio a la Empresa Downstream del año.",
    image: "/images/trayectory/history-24.webp",
  },
  {
    year: "2020",
    title: "McLaren se une al equipo",
    description:
      "Gulf sale a la carretera como socio estratégico de McLaren Racing y McLaren Automotive.",
    image: "/images/trayectory/history-26.webp",
  },
  {
    year: "2021",
    title: "#SingapurFuerte",
    description:
      "Gulf amplía sus operaciones en Singapur con la adquisición de una planta de mezcla de lubricantes, un parque de tanques de almacenamiento y una terminal.",
    image: "/images/trayectory/history-27.webp",
  },
  {
    year: "2022",
    title: "Lubricantes Gulf llega a Venezuela",
    description:
      "Gracias a Lubricantes La Mundial se establece una alianza estratégica de distribución exclusiva en el país.",
    image: "/images/trayectory/history-28.webp",
  },
  {
    year: "2023",
    title: "Gulf Venezuela se posiciona en todo el país",
    description:
      "Se logra la presencia del catálogo de productos Gulf en todo el país, un trabajo arduo de posicionamiento y ventas.",
    image: "/images/trayectory/history-29.webp",
  },
];

const History = () => {
  return (
    <>
      <Header />
      <BackToTop />
      <section className="relative w-full bg-gray-50 py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Línea Central (Vertical) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-900 h-full opacity-20 hidden md:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {historyEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Bloque de Contenido (Texto) */}
                <div className="w-full md:w-1/2 px-4 lg:px-12">
                  <div
                    className={`p-6 bg-white shadow-xl rounded-xl border-t-4 border-orange-500 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed italic">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Punto en la línea central */}
                <div className="relative flex items-center justify-center w-12 h-12 my-6 md:my-0">
                  <div className="absolute w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-px h-full bg-blue-900 opacity-20 md:hidden"></div>
                </div>

                {/* Bloque de Imagen */}
                <div className="w-full md:w-1/2 px-4 lg:px-12">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default History;
