import React from "react";
import { SparklesCore } from "./ui/sparks";
import { FlipWords } from "./ui/flip-words";
import ShimmerButton from "./ui/shimmerbutton";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words1 = "A Full Stack Web Developer";
const words = ["Srivastava", "Srivasta7a"];

const Hero = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Grid background */}
      <div className="absolute z-0 h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.3] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Sparkles */}
      <SparklesCore className="absolute inset-0 z-10 h-full w-full fill-white" />

      {/* Text and interactive elements */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-1xl mx-auto font-normal text-blue-100 dark:text-blue-100 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Hi I'M</p>
          <div className="uppercase text-5xl md:text-6xl lg:text-7xl mx-auto font-semibold text-purple dark:text-purple text-center">
            Yash
            <FlipWords
              className="uppercase text-purple dark:text-purple"
              words={words}
            />
            <br />
          </div>
          <div className="text-center text-xs md:text-sm lg:text-base font-extrabold uppercase pb-2">
            <TextGenerateEffect
              className="text-center"
              words={words1}
            />
          </div>
          <a href="#about" className="p-top-10">
            <ShimmerButton
              title="My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
