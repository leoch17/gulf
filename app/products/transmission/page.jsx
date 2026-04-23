"use client";

import React from "react";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import BackToTop from "@/app/_components/BackToTop";

const Transmission = () => {
  const productGallery = [
    {
      id: 1,
      title: "Presentación",
      img: "/images/products/transmission/transmission-atf-display.jpg",
      type: "side",
    },
    {
      id: 2,
      title: "Producto",
      img: "/images/products/transmission/transmission-atf.jpg",
      type: "center",
    },
    {
      id: 3,
      title: "Ficha Técnica",
      img: "/images/products/transmission/transmission-atf-ficha.jpg",
      type: "side",
    },
    {
      id: 4,
      title: "Presentación",
      img: "/images/products/transmission/transmission-gear-ep-display.jpg",
    },
    {
      id: 5,
      title: "Producto",
      img: "/images/products/transmission/transmission-gear-ep.jpg",
    },
    {
      id: 6,
      title: "Ficha Técnica",
      img: "/images/products/transmission/transmission-gear-ep-ficha.jpg",
    },
    {
      id: 7,
      title: "Presentación",
      img: "/images/products/transmission/transmission-gear-mp-80w-90-display.jpg",
    },
    {
      id: 8,
      title: "Producto",
      img: "/images/products/transmission/transmission-gear-mp-80w-90.jpg",
    },
    {
      id: 9,
      title: "Ficha Técnica",
      img: "/images/products/transmission/transmission-gear-mp-80w-90-ficha.jpg",
    },
    {
      id: 10,
      title: "Presentación",
      img: "/images/products/transmission/transmission-gear-mp-85w-140-display.jpg",
    },
    {
      id: 11,
      title: "Producto",
      img: "/images/products/transmission/transmission-gear-mp-85w-140.jpg",
    },
    {
      id: 12,
      title: "Ficha Técnica",
      img: "/images/products/transmission/transmission-gear-mp-85w-140-ficha.jpg",
    },
  ];

  return (
    <>
      <Header />
      <BackToTop />
      <section className="w-full bg-gray-100 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Ajuste en Grid: 
              - 1 columna en móvil (se apilan las 3 partes de cada producto).
              - 3 columnas en desktop para mantener tu diseño original.
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productGallery.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Contenedor de Imagen:
                    - h-[300px] en móvil para que no sea eterno el scroll.
                    - md:h-[450px] en desktop para mantener la proporción.
                */}
                <div
                  className={`relative h-[300px] md:h-[450px] w-full overflow-hidden bg-white ${product.type === "center" ? "p-6 md:p-4" : "p-0"}`}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                      product.type === "center"
                        ? "object-contain scale-110" // Imagen central más grande y contenida
                        : "object-fill" // Imágenes laterales llenando el cuadro
                    }`}
                  />
                </div>

                {/* Pie de la imagen */}
                <div className="bg-[#003366] p-4 md:p-5 flex justify-between items-center">
                  <span className="text-white font-black text-base md:text-lg uppercase tracking-wider">
                    {product.title}
                  </span>
                  {/* Línea decorativa naranja */}
                  <div className="w-10 md:w-12 h-1.5 bg-[#ff4f00] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Transmission;
