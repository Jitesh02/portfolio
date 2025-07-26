'use client';

import React from 'react'
import { motion } from "framer-motion"


const About = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative " id="about">
      <div className="max-w-[1250px] mx-auto ">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            About Me
          </p>
        </div>

        <div className="mt-7 ">
          <p className="mt-6 text-gray-300 text-[20px] leadiing-10">
            I'm a dedicated Full Stack Developer with a real passion for coding. Since writing my first line of code in
            2018, I've been diving deeper every day. I thrive on solving complex problems and continuously learning new technologies. Dedicated to building innovative and efficient software solutions. I'm always eager to learn more and improve my skills.
          </p>
        </div>
      </div>

      <div className="mt-10 mx-16 border-b border-neutral-900 pb-12">
        <div className="w-full">
          <ul className="flex justify-between gap-10 flex-col md:flex-row">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">500+</h3>
                <span className="uppercase">Coding questions</span>
              </div>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">20+</h3>
                <span className="uppercase">Projects Completed</span>
              </div>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">2+</h3>
                <span className="uppercase">Years of Experience</span>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default About