import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim"; // Slim version for smaller bundle
import ParticlesComponent from "./Particles";

const Hero = () => {

  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";


  return (
    <div style={{ fontFamily: "Nimbus Mono, monospace" }} className=" relative w-full min-h-screen flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z--1 opacity-1/2">
            <ParticlesComponent id="particles" />
        </div>
        <div className="z-10 text-white p-4 w-1/2 flex flex-col items-center justify-center rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Heading</h1>
            <p>{text}</p>
        </div>
    </div>
  );
};

export default Hero;