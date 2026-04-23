"use client";

import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Gasolina Motor Pasajero",
    img: "/images/products/product.webp",
    slug: "/passenger",
  },
  {
    id: 2,
    name: "Gasolina Motor Moto",
    img: "/images/products/product-2.webp",
    slug: "/motorcycle",
  },
  {
    id: 3,
    name: "Diesel Motores Camión",
    img: "/images/products/product-3.webp",
    slug: "/truck",
  },
  {
    id: 4,
    name: "Agrofluido",
    img: "/images/products/product-4.webp",
    slug: "/agrofluid",
  },
  {
    id: 5,
    name: "Transmisión",
    img: "/images/products/product-5.webp",
    slug: "/transmission",
  },
  {
    id: 6,
    name: "Hidraúlico",
    img: "/images/products/product-6.webp",
    slug: "/hydraulic",
  },
  {
    id: 7,
    name: "Refrigerante",
    img: "/images/products/product-7.webp",
    slug: "/refrigerant",
  },
  {
    id: 8,
    name: "Gulf Oil Corpotation",
    img: "/images/products/product-8.webp",
    slug: "/",
  },
];

const Products = () => {
  return (
    <>
      <Header />
      <section className="relative w-full py-16 px-4 overflow-hidden">
        {/* FONDO ANIMADO ENTRE NARANJA Y CELESTE */}
        <div className="absolute inset-0 -z-10 animate-fluid bg-gradient-to-br from-[#ff4f00] via-[#00a6ce] to-[#ff4f00] bg-[length:300%_300%]"></div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center uppercase mb-12 drop-shadow-md">
            Nuestros Productos
          </h2>

          {/* GRID: 2 filas de 4 en desktop (lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] block"
              >
                {/* Imagen de Producto */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Oscuro para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

                {/* Texto del Producto */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white leading-tight uppercase">
                    {product.name.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>

                  {/* Decoración: Línea naranja */}
                  <div className="w-10 h-1 bg-[#ff4f00] mt-3 transition-all duration-300 group-hover:w-20"></div>

                  {/* Opcional: Indicador de "Ver más" que aparece en Hover */}
                  <span className="text-white/0 group-hover:text-white/80 text-xs mt-4 block transition-all duration-500 font-bold uppercase tracking-widest">
                    Ver productos →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
