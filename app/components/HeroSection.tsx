"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    // <section
    //   className="min-h-screen bg-cover bg-center relative"
    //   style={{ backgroundImage: 'url("/mirage.webp")' }}
    //   id="hero"
    // >
    //   <div className="absolute inset-0 bg-black opacity-50"></div>
    //   <div className="container mx-auto px-6 py-32 text-center relative z-10">
    //     <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-4">
    //       Welcome to My Website
    //     </h1>
    //     <p className="text-xl sm:text-2xl text-white mb-6">
    //       Crafting beautiful and functional digital experiences.
    //     </p>
    //     <a
    //       href="#about"
    //       className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
    //     >
    //       Learn More
    //     </a>
    //   </div>
    // </section>
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: 'url("/mirage.webp")' }}
      id="hero"
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["THANAWAT", 1000, "A Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#FFFFFF] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I'm Thanawat Burapatanin. A web developer based in Thailand.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-yellow-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            {/* <Link
              href="/THANAWAT_BURAPATANIN.pdf"
              download="THANAWAT_BURAPATANIN.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link> */}
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/test.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
