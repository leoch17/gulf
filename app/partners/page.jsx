"use client";

import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import BackToTop from "../_components/BackToTop";

const Partner = () => {
  const partners = [
    {
      id: 1,
      title: "Williams Racing",
      subtitle: "Official Partner",
      description:
        "Gulf es un orgulloso socio del icónico equipo Williams Racing para la temporada 2023 de Fórmula 1 y más allá. Las dos marcas comparten décadas de conocimiento y experiencia en deportes de motor. Williams Racing es uno de los equipos de F1 más exitosos de todos los tiempos y Gulf tiene más de 85 años de herencia en el automovilismo.",
      video: "/videos/williams.webm",
      logo: "/images/partners/logo-williams.png",
      logoSize: "h-20 lg:h-34",
      bgContent: "bg-[#002777]",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "McLaren",
      description:
        "Nuestra asociación con McLaren Automotive nace de una pasión compartida por la excelencia, la innovación y la perfección. Cada automóvil que sale de la línea de producción de McLaren viene lleno del aceite del motor Gulf Formula Elite, ya que McLaren solo recomienda Gulf.",
      video: "/videos/mclaren.webm",
      logo: "/images/partners/logo-mclaren.png",
      logoSize: "h-12 lg:h-24",
      bgContent: "bg-white",
      textColor: "text-[#002777]",
      reverse: true,
    },
    {
      id: 3,
      title: "ROFGO",
      description:
        "La asociación Gulf y ROFGO es una combinación perfecta por un amor incesante por los deportes de motor y un deseo compartido de preservar y proteger la historia de las carreras. La Colección ROFGO Gulf Heritage es una de las mejores colecciones mundiales de autos de carrera de la marca Gulf. Cada vehículo en la colección de ROFGO representa un momento precioso en el legado de carreras del Golfo que los fanáticos pueden revivir con cada visita.",
      video: "/videos/rofgo.webm",
      logo: "/images/partners/logo-rofgo.png",
      logoSize: "h-12 lg:h-26",
      bgContent: "bg-[#FF6318]",
      textColor: "text-[#B8D9EC]",
    },
    {
      id: 4,
      title: "TAG Heuer",
      subtitle: "Together, we're unstoppable",
      description:
        "Gulf y TAG Heuer han compartido muchos aspectos históricos que han abarcado más de 50 años. La asociación entre Gulf y TAG Heuer demuestra el compromiso de ambas marcas de superar los límites de excelencia e innovación. Su legado compartido se ejemplifica con los icónicos relojes que han creado para marcar la victoria de Le Mans en 1969 y su asociación continua.",
      video: "/videos/tag-heuer.webm",
      logo: "/images/partners/logo-tag-heuer.png",
      logoSize: "h-20 lg:h-36",
      bgContent: "bg-[#B8D9EC]",
      textColor: "text-[#002777]",
      reverse: true,
    },
    {
      id: 5,
      title: "Everrati",
      description:
        "Everrati ayuda a los fanáticos de las carreras del Golfo a preparar el futuro de sus autos azul y naranja del Golfo restaurándolos meticulosamente, sacando sus motores y equipándolos con trenes de potencia totalmente eléctricos. La asociación Gulf y Everrati representa la determinación del Golfo de avanzar en una dirección más sostenible, al igual que nuestra gama de fluidos electrónicos para vehículos eléctricos y automóviles híbridos.",
      video: "/videos/everratti.webm",
      logo: "/images/partners/logo-everratti.png",
      logoSize: "h-12 lg:h-16",
      bgContent: "bg-[#002777]",
      textColor: "text-white",
    },
    {
      id: 6,
      title: "Indra",
      subtitle: "Together, we're unstoppable",
      description:
        "Estamos construyendo un marco más sostenible para nuestra marca, socios y clientes. Con este fin, estamos trabajando con Indra, una compañía que ofrece cargadores EV domésticos inteligentes, seguros y confiables a los consumidores junto con el desarrollo de tecnología de carga bidireccional, que admite cero neto.",
      video: "/videos/indra.webm",
      logo: "/images/partners/logo-indra.png",
      logoSize: "h-20 lg:h-42",
      bgContent: "bg-white",
      textColor: "text-[#002777]",
      reverse: true,
    },
    {
      id: 7,
      title: "Gulf Old - New",
      description:
        "Ayudamos a nuestros socios minoristas de combustible de Gulf a acelerar el crecimiento en sus mercados al otorgarles derechos de distribución exclusivos sobre los lubricantes de Gulf. Nuestros socios minoristas se benefician de nuestra marca reconocida a nivel mundial y de la orientación, el apoyo y la colaboración continuos que brindamos.",
      video: "/videos/old-new.webm",
      logo: "/images/partners/logo-gulf.webp",
      logoSize: "h-20 lg:h-38",
      bgContent: "bg-[#002777]",
      textColor: "text-[#FF6318]",
    },
  ];

  return (
    <div className="w-full">
      <BackToTop />
      <Header />
      <main>
        {partners.map((partner) => (
          <section
            key={partner.id}
            className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[800px] w-full overflow-hidden"
          >
            {/* Bloque de Video - Siempre arriba en Mobile */}
            <div
              className={`relative h-[450px] sm:h-[600px] lg:h-auto overflow-hidden 
                ${partner.reverse ? "lg:order-2" : "lg:order-1"}`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              >
                <source src={partner.video} type="video/webm" />
              </video>
            </div>

            {/* Bloque de Contenido - Alineación adaptativa */}
            <div
              className={`flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-20 
                ${partner.bgContent} ${partner.textColor} 
                ${partner.reverse ? "lg:order-1" : "lg:order-2"}`}
            >
              {partner.logo && (
                <img
                  src={partner.logo}
                  alt={`${partner.title} logo`}
                  className={`${partner.logoSize || "h-14 sm:h-20 lg:h-28"} mb-6 object-contain`}
                />
              )}

              {/* {partner.subtitle && (
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
                  {partner.subtitle}
                </p>
              )} */}

              <div className="w-16 h-1 bg-current mb-8 opacity-30"></div>

              <p
                className={`max-w-md text-lg sm:text-xl lg:text-2xl italic leading-relaxed font-medium 
                ${partner.reverse ? "lg:text-left" : "lg:text-right"}`}
              >
                {partner.description}
              </p>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Partner;
