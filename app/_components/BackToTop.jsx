"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const BackToTop = () => {
  const [height, setHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleEvent = useCallback(() => {
    setHeight(window.innerHeight);
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
    handleEvent();
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };
  }, [handleEvent]);

  const showArrowTop = scrollY > height;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isHovered, setIsHovered] = useState(false);

  const AZUL_GULF =
    "invert(11%) sepia(58%) saturate(4525%) hue-rotate(218deg) brightness(93%) contrast(108%)";
  const NARANJA_GULF =
    "invert(46%) sepia(97%) saturate(3512%) hue-rotate(349deg) brightness(101%) contrast(105%)";

  return (
    <button
      onClick={handleClick}
      className={`${showArrowTop ? "fixed" : "hidden"} cursor-pointer bottom-8 right-8 z-[999] 
        bg-[#FF6318] hover:bg-[#B8D9EC] 
        w-12 h-12 rounded-full 
        flex items-center justify-center 
        shadow-xl transition-all duration-300 group
        border-none outline-none`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Image
          src="/images/arrowhead-up.png"
          alt="top"
          width={24}
          height={24}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="object-contain transition-all duration-300" //text-[#002777] hover:text-[#FF6318]
          style={{
            filter: isHovered ? NARANJA_GULF : AZUL_GULF,
          }}
        />
      </div>
    </button>
  );
};

export default BackToTop;
