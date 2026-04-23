"use client";

import React from "react";
import Link from "next/link";

const Slogan = () => {
  return (
    <>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna de Imagen */}
            <div className="relative group">
              {/* Decoración naranja detrás de la imagen (opcional, común en estos diseños) */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FF6318] -z-10 rounded-bl-3xl hidden lg:block"></div>

              <img
                src="/images/slogan/slogan.webp" // Reemplaza con tu ruta real
                alt="Sobre Nosotros"
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
              />
            </div>

            {/* Columna de Texto */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-[#002777] font-bold tracking-widest uppercase text-lg">
                  Juntos,
                </h3>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#FF6318] leading-tight">
                  Somos Imparables
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Ser uno de los principales proveedores de combustible en
                estaciones de servicio, lubricantes y servicio de cambio de
                aceite es lo que mejor hacemos, pero en esencia, somos una marca
                que se basa en mucho más. Cuando reflexionamos sobre nuestra
                rica historia que se remonta a 1901, sentimos un profundo
                orgullo por todo lo que hemos logrado; Las alianzas que hemos
                construido, los obstáculos que hemos superado y los hitos que
                hemos celebrado juntos, como un equipo imparable.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                No solo vendemos productos, construimos relaciones de confianza
                basadas en la seguridad, la durabilidad y el compromiso con el
                medio ambiente.
              </p>

              {/* BOTÓN CON ANIMACIÓN DE RELLENO */}
              <div className="pt-4">
                <Link
                  href="/"
                  className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-[#002777] transition-all duration-300 border-2 border-[#002777] rounded-full hover:text-white group bg-white"
                >
                  {/* El "relleno" que sube/aparece al hacer hover */}
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-y-full bg-[#002777] group-hover:translate-y-0"></span>

                  {/* Texto del botón */}
                  <span className="relative">Leer más</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slogan;
