"use client";

import React from "react";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const Motorcycle = () => {
  const productGallery = [
    {
      id: 1,
      title: "Presentación",
      img: "/images/products/motorcycle/10w-40-power-display.webp",
      type: "side",
    },
    {
      id: 2,
      title: "Producto",
      img: "/images/products/motorcycle/10w-40-power.webp",
      type: "center",
    },
    {
      id: 3,
      title: "Ficha Técnica",
      img: "/images/products/motorcycle/10w-40-power-ficha.webp",
      type: "side",
    },
    {
      id: 4,
      title: "Presentación",
      img: "/images/products/motorcycle/20w-50-mineral-pride-display.webp",
    },
    {
      id: 5,
      title: "Producto",
      img: "/images/products/motorcycle/20w-50-mineral-pride.webp",
    },
    {
      id: 6,
      title: "Ficha Técnica",
      img: "/images/products/motorcycle/20w-50-mineral-pride-ficha.webp",
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

export default Motorcycle;
