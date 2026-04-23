"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const imageSlides = [
    {
      id: 1,
      src: "/images/banner/banner-1.webp",
      alt: "Imagen 1 del banner de home",
    },
    {
      id: 2,
      src: "/images/banner/banner-2.webp",
      alt: "Imagen 2 del banner de home",
    },
    {
      id: 3,
      src: "/images/banner/banner-3.webp",
      alt: "Imagen 3 del banner de home",
    },
    {
      id: 4,
      src: "/images/banner/banner-4.webp",
      alt: "Imagen 4 del banner de home",
    },
  ];
  return (
    <div
      id="banner"
      className="w-full relative overflow-hidden bg-black max-w-[100vw]"
    >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        /* AJUSTE DE ALTURA RESPONSIVE:
           - h-[40vh]: En móviles pequeños para evitar excesivo recorte lateral.
           - sm:h-[50vh]: Tablets.
           - lg:h-[calc(100vh-80px)]: En desktop, ajustado para que se vea el header y un poco del siguiente contenido.
        */
        className="mySwiper h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]"
      >
        {imageSlides.map((image) => (
          <SwiperSlide key={image.id} className="relative w-full h-full">
            <img
              src={image.src}
              alt={image.alt}
              /* object-cover: Llena el contenedor.
                 object-center: Mantiene el centro de la imagen siempre visible.
                 md:object-right-top: (Opcional) Si tus banners tienen el producto a la derecha.
              */
              className="w-full h-full object-cover object-center pointer-events-none select-none"
              loading="eager"
              priority="true" // Indicación para Next.js de que es LCP (Largest Contentful Paint)
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        #banner .swiper-container {
          max-width: 100vw !important;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }

          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            margin: 0 4px !important;
          }

          /* Ajuste para que el banner no se vea "aplastado" en pantallas muy anchas pero bajas (móviles horizontales) */
          #banner .mySwiper {
            min-height: 280px;
          }
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #ff6318 !important;
          transform: scale(0.5); /* Flechas más sutiles en desktop */
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          background: #ff6318 !important;
          opacity: 1 !important;
        }

        .swiper-pagination {
          bottom: 15px !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;
