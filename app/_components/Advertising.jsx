"use client";

import React, { useState } from "react";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Advertising = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          {/* Encabezado de la sección */}
          <div className="mb-10">
            <h4 className="text-[#FF6318] font-bold tracking-widest uppercase text-sm">
              Gulf Oil
            </h4>
            <h2 className="text-4xl font-extrabold text-[#002777] uppercase">
              Un Equipo Imparable
            </h2>
          </div>

          {/* Previsualización del Video */}
          <div
            className="relative max-w-5xl mx-auto group cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="/images/miniatura.jpg" // Tu imagen de Williams F1
              alt="Gulf Williams Racing"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay oscuro sutil */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

            {/* Botón de Play Central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FF6318] rounded-full flex items-center justify-center text-white shadow-2xl transform transition-transform group-hover:scale-110">
                <PlayIcon className="w-10 h-10 md:w-12 md:h-12 ml-1" />
              </div>
            </div>

            {/* Texto sobre la imagen */}
            <div className="absolute bottom-10 w-full text-center">
              <h3 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-tighter">
                A Bold New Beginning
              </h3>
            </div>
          </div>
        </div>

        {/* MODAL DEL VIDEO */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Botón Cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-4 right-4 z-10 p-2 bg-[#FF6318] text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Iframe o Video Tag */}
              <iframe
                className="w-full h-full"
                src="/videos/gulf-formula1.mp4"
                title="Gulf Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Fondo para cerrar al hacer click fuera */}
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsOpen(false)}
            ></div>
          </div>
        )}
      </section>
    </>
  );
};

export default Advertising;
