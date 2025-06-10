import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim"; // Slim version for smaller bundle
import ParticlesComponent from "./Particles";
import { LuMouse } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import CustomButton from "./CustomButton";
import { Fade } from "react-awesome-reveal";



const Hero = () => {

  const text =
    "A curious coder with a passion for building tech that makes people go, “Whoa, that’s cool *and* useful.” Whether it's crafting full-stack apps, playing with AI, or solving real-world problems, I’m all about turning imagination into impact.";


  return (
    <div style={{ fontFamily: "Nimbus Mono, monospace" }} className="w-full flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z--1 opacity-1/2">
            <ParticlesComponent id="particles" />
        </div>
        <div className="z-10 text-white p-4 w-1/2 flex flex-col items-center justify-center rounded p-24">
            <Fade direction = "down" triggerOnce={true} duration={2000}>
              <h1 className="text-2xl font-bold mb-10">Hey there! I'm Divjot Virdi</h1>
            </Fade>
            <Fade triggerOnce={true} duration={2000}>
              <p className="mb-10">{text}</p>
            </Fade>
            <Fade direction = "up" triggerOnce={true} duration={2000}>
              <CustomButton/>
            </Fade>
        </div>
    </div>
  );
};

export default Hero;