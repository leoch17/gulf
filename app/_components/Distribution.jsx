"use client";

import React, { useState } from "react";
// Importa tu SVG del mapa como componente
import MapaVenezuelaSVG from "./MapaVenezuelaSVG"; // Asegúrate de tenerlo bien estructurado

const Distribution = () => {
  return (
    <section
      id="distribution"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Fondo decorativo sutil (Marca de Agua Gulf) */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        {/* Ejemplo: Las líneas de carrera Gulf o textura de neumático */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#87CEEB]"></div>
        <div className="absolute top-0 right-1/3 w-1/3 h-full bg-[#FF6318]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Títulos y buscador */}
        <div className="max-w-xl mx-auto text-center mb-16 space-y-3">
          <h4 className="text-[#FF6318] font-bold tracking-widest uppercase text-sm">
            Encuéntranos
          </h4>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#002777] leading-tight">
            Redes de Distribución de Gulf
          </h2>
          <p className="text-gray-600 text-lg">
            Ubica la tienda que más se ajuste a ti, haz click en el mapa.
          </p>
        </div>

        {/* MAPA Y PUNTOS DE INTERACCIÓN */}
        <div className="relative aspect-[4/3] max-w-4xl mx-auto">
          {/* SVG del mapa */}
          <MapaVenezuelaSVG />
        </div>
      </div>
    </section>
  );
};

export default Distribution;
