"use client";
import React from "react";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { DynamicIcon } from "lucide-react/dynamic";
import { FaInstagram } from "react-icons/fa";

const Zulia = () => {
  // Definimos estilos personalizados para los items para asegurar consistencia
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-medium text-white text-base md:text-lg",
    trigger: "px-6 py-4 data-[hover=true]:bg-white/5 flex items-center h-full",
    indicator: "text-white",
    content: "px-6 pb-6 pt-2",
  };

  const socialLinks = [
    {
      Icon: FaInstagram,
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[url('/images/states/fondo-shop.jpg')] bg-center bg-cover bg-fixed">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-10">
          <h1 className="flex flex-wrap text-black font-bold uppercase items-center justify-center mb-10 text-2xl sm:text-4xl text-center leading-tight">
            Redes de Distribución del&nbsp;
            <span className="text-[#FF6318]">Zulia</span>
          </h1>
          <div className="w-full max-w-4xl mx-auto">
            {" "}
            {/* Contenedor que controla el ancho real */}
            <Accordion
              variant="shadow"
              itemClasses={itemClasses}
              className="bg-[#002777] shadow-2xl rounded-xl overflow-hidden p-0"
            >
              <AccordionItem
                className="text-white uppercase border-b border-white/10 last:border-none"
                key="1"
                aria-label="Ruedas La Mundial 72, C.A."
                title={
                  <div className="flex items-center justify-between w-full cursor-pointer hover:text-[#FF6318]">
                    <span className="font-medium">
                      Ruedas La Mundial 72, C.A.
                    </span>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-white text-center uppercase text-sm md:text-base leading-relaxed">
                    CALLE 72 GILBERTO CORREA, ENTRE AV. 13 Y AV. 12 AL LADO DE
                    FARMACIA FARMAEXPRESS.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      <DynamicIcon
                        className="text-center"
                        name="phone"
                        size={20}
                      />
                      <span>:</span>
                      <a href="tel:+584122618392">
                        <span className="hover:text-[#FF6318] transition-colors">
                          0412-2618392
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      {socialLinks.map(({ Icon }, index) => (
                        <div key={index} target="_blank" className="text-white">
                          <Icon size={20} />
                        </div>
                      ))}
                      <span>:</span>
                      <a
                        href="https://www.instagram.com/ruedaslamundial/?hl=en"
                        target="_blank"
                      >
                        <span className="hover:text-[#FF6318]">
                          @ruedaslamundial
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-inner bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.6725454123161!2d-71.61633391569153!3d10.669566449657264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999d446d6317d%3A0x6b5846a8095c79d5!2sRuedas%20La%20Mundial%2072%2C%20C.A.!5e0!3m2!1ses!2sve!4v1746233579403!5m2!1ses!2sve"
                      className="w-full h-64 md:h-80 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                className="text-white uppercase border-b border-white/10 last:border-none"
                key="2"
                aria-label="Ruedas La Mundial Cecilio Acosta, C.A."
                title={
                  <div className="flex items-center justify-between w-full cursor-pointer hover:text-[#FF6318]">
                    <span className="font-medium">
                      Ruedas La Mundial Cecilio Acosta, C.A.
                    </span>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-white text-center uppercase text-sm md:text-base leading-relaxed">
                    AV. 9B CON CALLE 67 CECILIO ACOSTA.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      <DynamicIcon
                        className="text-center"
                        name="phone"
                        size={20}
                      />
                      <span>:</span>
                      <a href="tel:+584122618392">
                        <span className="hover:text-[#FF6318] transition-colors">
                          0412-2618392
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      {socialLinks.map(({ Icon }, index) => (
                        <div key={index} target="_blank" className="text-white">
                          <Icon size={20} />
                        </div>
                      ))}
                      <span>:</span>
                      <a
                        href="https://www.instagram.com/ruedaslamundial/?hl=en"
                        target="_blank"
                      >
                        <span className="hover:text-[#FF6318]">
                          @ruedaslamundial
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-inner bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.8216825570604!2d-71.61344385594104!3d10.677176674381407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89994e59916691%3A0xfe5933d950b31512!2sRuedas%20La%20Mundial!5e0!3m2!1ses!2sve!4v1746233849069!5m2!1ses!2sve"
                      className="w-full h-64 md:h-80 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                className="text-white uppercase border-b border-white/10 last:border-none"
                key="3"
                aria-label="Ruedas La Mundial Sabaneta, C.A."
                title={
                  <div className="flex items-center justify-between w-full cursor-pointer hover:text-[#FF6318]">
                    <span className="font-medium">
                      Ruedas La Mundial Sabaneta, C.A.
                    </span>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-white text-center uppercase text-sm md:text-base leading-relaxed">
                    DIAGONAL AL MONUMENTO LA CHINITA DE LA C1.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      <DynamicIcon
                        className="text-center"
                        name="phone"
                        size={20}
                      />
                      <span>:</span>
                      <a href="tel:+584122618392">
                        <span className="hover:text-[#FF6318] transition-colors">
                          0412-2618392
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      {socialLinks.map(({ Icon }, index) => (
                        <div key={index} target="_blank" className="text-white">
                          <Icon size={20} />
                        </div>
                      ))}
                      <span>:</span>
                      <a
                        href="https://www.instagram.com/ruedaslamundial/?hl=en"
                        target="_blank"
                      >
                        <span className="hover:text-[#FF6318]">
                          @ruedaslamundial
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-inner bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.3667013946351!2d-71.64159747079884!3d10.62826019526409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999beca66dc79%3A0x36e5800889123875!2sRuedas%20La%20Mundial%20Sabaneta!5e0!3m2!1ses!2sve!4v1746234024849!5m2!1ses!2sve"
                      className="w-full h-64 md:h-80 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                className="text-white uppercase border-b border-white/10 last:border-none"
                key="4"
                aria-label="Ruedas La Mundial Veritas, C.A."
                title={
                  <div className="flex items-center justify-between w-full cursor-pointer hover:text-[#FF6318]">
                    <span className="font-medium">
                      Ruedas La Mundial Veritas, C.A.
                    </span>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-white text-center uppercase text-sm md:text-base leading-relaxed">
                    CALLE 90, CON AV. 8 (DIAGONAL A LA ESTACIÓN DE SERVICIO
                    NUEVO CIRCO), LAS VERITAS, MARACAIBO.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      <DynamicIcon
                        className="text-center"
                        name="phone"
                        size={20}
                      />
                      <span>:</span>
                      <a href="tel:+584122618392">
                        <span className="hover:text-[#FF6318] transition-colors">
                          0412-2618392
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      {socialLinks.map(({ Icon }, index) => (
                        <div key={index} target="_blank" className="text-white">
                          <Icon size={20} />
                        </div>
                      ))}
                      <span>:</span>
                      <a
                        href="https://www.instagram.com/ruedaslamundial/?hl=en"
                        target="_blank"
                      >
                        <span className="hover:text-[#FF6318]">
                          @ruedaslamundial
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-inner bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d693.1617457870316!2d-71.61054093861542!3d10.648175840926644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999e5e16eec79%3A0xcafe6474ff2d41b3!2sRuedas%20la%20Mundial%20Veritas!5e0!3m2!1ses!2sve!4v1746234125191!5m2!1ses!2sve"
                      className="w-full h-64 md:h-80 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                className="text-white uppercase border-b border-white/10 last:border-none"
                key="5"
                aria-label="Ruedas La Mundial Sur, C.A."
                title={
                  <div className="flex items-center justify-between w-full cursor-pointer hover:text-[#FF6318]">
                    <span className="font-medium">
                      Ruedas La Mundial Sur, C.A.
                    </span>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-white text-center uppercase text-sm md:text-base leading-relaxed">
                    UBICADA A 200 METROS DE LA ESCUELA DE POLICÍAS DE SAN
                    FRANCÍSCO.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      <DynamicIcon
                        className="text-center"
                        name="phone"
                        size={20}
                      />
                      <span>:</span>
                      <a href="tel:+584122618392">
                        <span className="hover:text-[#FF6318] transition-colors">
                          0412-2618392
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      {socialLinks.map(({ Icon }, index) => (
                        <div key={index} target="_blank" className="text-white">
                          <Icon size={20} />
                        </div>
                      ))}
                      <span>:</span>
                      <a
                        href="https://www.instagram.com/ruedaslamundial/?hl=en"
                        target="_blank"
                      >
                        <span className="hover:text-[#FF6318]">
                          @ruedaslamundial
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-inner bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.5650902950781!2d-71.62427561110734!3d10.55878758552123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89979e7bbb8271%3A0xd9b6b8ffb13d653a!2sRuedas%20La%20Mundial%20Sur!5e0!3m2!1ses!2sve!4v1746234314907!5m2!1ses!2sve"
                      className="w-full h-64 md:h-80 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                className="text-white uppercase border-b border-white/10 last:border-none"
                key="6"
                aria-label="Ruedas La Mundial Delicias, C.A."
                title={
                  <div className="flex items-center justify-between w-full cursor-pointer hover:text-[#FF6318]">
                    <span className="font-medium">
                      Ruedas La Mundial Delicias, C.A.
                    </span>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-white text-center uppercase text-sm md:text-base leading-relaxed">
                    Av. Principal, Las Delicias entre calle 82 y calle 83
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      <DynamicIcon
                        className="text-center"
                        name="phone"
                        size={20}
                      />
                      <span>:</span>
                      <a href="tel:+584122618392">
                        <span className="hover:text-[#FF6318] transition-colors">
                          0412-2618392
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      {socialLinks.map(({ Icon }, index) => (
                        <div key={index} target="_blank" className="text-white">
                          <Icon size={20} />
                        </div>
                      ))}
                      <span>:</span>
                      <a
                        href="https://www.instagram.com/ruedaslamundial/?hl=en"
                        target="_blank"
                      >
                        <span className="hover:text-[#FF6318]">
                          @ruedaslamundial
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-inner bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.2728489137605!2d-71.61952334964096!3d10.659302302890469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999b1109655b3%3A0x7f9b178f3de214ff!2sRuedas%20La%20Mundial%20Delicias!5e0!3m2!1ses!2sve!4v1746234372186!5m2!1ses!2sve"
                      className="w-full h-64 md:h-80 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                className="text-white uppercase border-b border-white/10 last:border-none"
                key="7"
                aria-label="Ruedas La Mundial Sierra Maestra, C.A."
                title={
                  <div className="flex items-center justify-between w-full cursor-pointer hover:text-[#FF6318]">
                    <span className="font-medium">
                      Ruedas La Mundial Sierra Maestra, C.A.
                    </span>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-white text-center uppercase text-sm md:text-base leading-relaxed">
                    Av. 15, entre calle 20 y calle 19, al lado de lubricantes la
                    mundial
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      <DynamicIcon
                        className="text-center"
                        name="phone"
                        size={20}
                      />
                      <span>:</span>
                      <a href="tel:+584122618392">
                        <span className="hover:text-[#FF6318] transition-colors">
                          0412-2618392
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
                      {socialLinks.map(({ Icon }, index) => (
                        <div key={index} target="_blank" className="text-white">
                          <Icon size={20} />
                        </div>
                      ))}
                      <span>:</span>
                      <a
                        href="https://www.instagram.com/ruedaslamundial/?hl=en"
                        target="_blank"
                      >
                        <span className="hover:text-[#FF6318]">
                          @ruedaslamundial
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-inner bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.5016122480525!2d-71.63577737319187!3d10.57866768765489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89972e59c7b27d%3A0xc3d89e8c2b7ad7cf!2sRuedas%20la%20Mundial%20SM!5e0!3m2!1ses!2sve!4v1746234601452!5m2!1ses!2sve"
                      className="w-full h-64 md:h-80 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Zulia;
