import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  const [theme, setTheme] = useState('dark');

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real-World Solutions</h1>
              <h1>that Make an Impact</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none flex flex-col">
              <span>Hi, I'm Gopi Vardhan V,</span>
              <span>a developer based in Orlando</span>
              <span>with a passion for building intelligent,</span>
              <span>scalable systems across web, AI, and data platforms.</span>
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout relative">
            <img
              src="/images/hero-light.png" /* Placeholder for light theme image */
              alt="Hero Light Theme"
              className={`w-full h-full object-cover rounded-xl ${theme === 'light' ? 'block' : 'hidden'}`}
            />
            <img
              src="/images/hero-dark.png" /* Placeholder for dark theme image */
              alt="Hero Dark Theme"
              className={`w-full h-full object-cover rounded-xl ${theme === 'dark' ? 'block' : 'hidden'}`}
            />
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="absolute bottom-5 right-5 p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-sm focus:outline-none transition-colors duration-300"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
