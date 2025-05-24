"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// image
import astronaut from "@/img/Pinac Workspace Header Image.svg";
import planet from "@/img/red-green planet.svg";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Show button after all other animations (3.8s delay)
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center 3xl:mt-80 2xl-2:mt-55 xl:mt-48 lg:mt-45
      md:mt-40 mt-35 2xl-2:fixed relative"
    >
      <div className="flex flex-col justify-center relative z-10">
        <div className="hero-container font-bold 3xl:text-9xl/28 2xl-2:text-8.5xl/25 2xl:text-8xl/22 xl:text-7xl/17 lg:text-6.5xl/15 md:text-6xl/14 sm:text-5.5xl/10 text-4.5xl/8 text-light font-nasa">
          {mounted && (
            <div className="hero-word-top" style={{ animationDelay: "1.2s" }}>
              PINAC
            </div>
          )}
        </div>
        <div className="hero-container font-bold 3xl:text-[158px] 2xl-2:text-9xl 2xl:text-8.5xl xl:text-8xl lg:text-7.5xl md:text-7xl sm:text-6.5xl text-5.5xl/14 text-light font-nasa">
          {mounted && (
            <div
              className="hero-word-bottom"
              style={{ animationDelay: "1.7s" }}
            >
              Workspace
            </div>
          )}
        </div>
        <Image
          alt="header design"
          src={astronaut}
          priority={true}
          className={`h-auto 3xl:w-md 2xl-2:w-sm 2xl:w-xs xl:w-2xs lg:w-60 md:w-55 sm:w-42 w-31 object-cover absolute
            3xl:bottom-12 2xl-2:bottom-9 2xl:bottom-8.5 xl:bottom-8 lg:bottom-6 md:bottom-5 sm:bottom-5.5 bottom-4
            3xl:right-8 xl:right-4 lg:right-2 md:right-2 sm:right-5 right-4	
            ${mounted ? "animated-image" : "opacity-0"}`}
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/*  Get Started Button  */}
      {showButton && (
        <div className="absolute 3xl:top-90 2xl-2:top-72 2xl:top-60 xl:top-50 lg:top-44 md:top-42 sm:top-32 top-25 z-20">
          <button
            className="
            relative 3xl:px-13 3xl:py-5 lg:px-10 md:px-6 px-4 lg:py-3.5 md:py-2 py-1.5 rounded-full bg-primary/85 
            3xl:text-3xl lg:text-base text-sm md:font-bold text-gray-300
            border-[1.4px] border-gray-300 transition-all duration-300 ease-in-out cursor-pointer
            hover:bg-primary/60 hover:backdrop-blur-sm hover:text-gray-50 hover:shadow-[0_0_25px_#fff]
            group
          "
          >
            Get Started
            {/* Star 1 */}
            <div
              className="
                absolute top-[20%] left-[20%] w-[25px] h-auto 
                filter drop-shadow-[0_0_0_#fffdef] z-[-5]
                transition-all duration-1000 [transition-timing-function:cubic-bezier(0.05,0.83,0.43,0.96)]
                group-hover:top-[-80%] group-hover:left-[-30%] group-hover:filter group-hover:drop-shadow-[0_0_10px_#fffdef] group-hover:z-[2]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    className="fill-white"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </g>
              </svg>
            </div>
            {/* Star 2 */}
            <div
              className="
                absolute top-[45%] left-[45%] w-[15px] h-auto
                filter drop-shadow-[0_0_0_#fffdef] z-[-5]
                transition-all duration-1000 [transition-timing-function:cubic-bezier(0,0.4,0,1.01)]
                group-hover:top-[-25%] group-hover:left-[10%] group-hover:filter group-hover:drop-shadow-[0_0_10px_#fffdef] group-hover:z-[2]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    className="fill-white"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </g>
              </svg>
            </div>
            {/* Star 3 */}
            <div
              className="
                absolute top-[40%] left-[40%] w-[5px] h-auto
                filter drop-shadow-[0_0_0_#fffdef] z-[-5]
                transition-all duration-1000 [transition-timing-function:cubic-bezier(0,0.4,0,1.01)]
                group-hover:top-[70%] group-hover:left-[15%] group-hover:filter group-hover:drop-shadow-[0_0_10px_#fffdef] group-hover:z-[2]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    className="fill-white"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </g>
              </svg>
            </div>
            {/* Star 4 */}
            <div
              className="
                absolute top-[20%] left-[40%] w-[8px] h-auto 
                filter drop-shadow-[0_0_0_#fffdef] z-[-5]
                transition-all duration-800 [transition-timing-function:cubic-bezier(0,0.4,0,1.01)]
                group-hover:top-[30%] group-hover:left-[80%] group-hover:filter group-hover:drop-shadow-[0_0_10px_#fffdef] group-hover:z-[2]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    className="fill-white"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </g>
              </svg>
            </div>
            {/* Star 5 */}
            <div
              className="
                absolute top-[25%] left-[45%] w-[15px] h-auto 
                filter drop-shadow-[0_0_0_#fffdef] z-[-5]
                transition-all duration-600 [transition-timing-function:cubic-bezier(0,0.4,0,1.01)]
                group-hover:top-[25%] group-hover:left-[115%] group-hover:filter group-hover:drop-shadow-[0_0_10px_#fffdef] group-hover:z-[2]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    className="fill-white"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </g>
              </svg>
            </div>
            {/* Star 6 */}
            <div
              className="
                absolute top-[5%] left-[50%] w-[5px] h-auto 
                filter drop-shadow-[0_0_0_#fffdef] z-[-5]
                transition-all duration-800 ease-linear
                group-hover:top-[5%] group-hover:left-[60%] group-hover:filter group-hover:drop-shadow-[0_0_10px_#fffdef] group-hover:z-[2]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    className="fill-white"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </g>
              </svg>
            </div>
          </button>
        </div>
      )}

      {/* Planet Image */}
      <div className="relative w-full">
        <div className="planet-glow-animation absolute inset-0 z-0"></div>
        <Image
          src={planet}
          alt="planet image"
          priority={true}
          className={`object-fill w-full relative z-10 ${
            mounted ? "animated-image" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        />
        <div className="2xl-2:hidden w-full h-px absolute bottom-px bg-primary shadow-dark-cloud-small z-20" />
      </div>
    </section>
  );
};

export default HeroSection;
