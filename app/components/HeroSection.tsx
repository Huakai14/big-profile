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
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4 sm:px-8 pt-16 sm:pt-20"
      style={{ backgroundImage: 'url("/mirage.webp")' }}
      id="hero"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold break-words">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"> */}
              Hello, I&apos;m{" "}
            {/* </span> */}
            <br />
            <TypeAnimation
              sequence={["THANAWAT", 1000, "A Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#FFFFFF] text-base sm:text-lg mb-6 lg:text-xl max-w-md md:max-w-lg lg:max-w-xl">
            Hi, I'm Thanawat Burapatanin. A web developer based in Thailand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-200 text-white font-semibold text-base sm:text-lg transition w-full sm:w-fit"
            >
              Hire Me
            </Link>
            {/* <Link
              href="/THANAWAT_BURAPATANIN.pdf"
              download="THANAWAT_BURAPATANIN.pdf"
              className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3 w-full sm:w-fit"
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
          className="md:col-span-4 flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 relative">
            <Image
              src="/images/test.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover"
              width={400}
              height={400}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 400px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
