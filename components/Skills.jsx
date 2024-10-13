'use client';
import Image from 'next/image'
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
})

const Skills = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative " id="skills">
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            Skills
          </p>
        </div>

        <div className="grid md:grid-cols-8 gap-5 grid-cols-2 max-xs:grid-cols-2 mt-10 mx-4 border-b border-neutral-900 pb-10">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className="border-neutral-800 border-2 p-1 rounded-2xl text-center flex flex-col items-center shadow-sm justify-center ">
            <Image src="/assets/cpp2.png" width={50} height={50} alt="Cpp" className="mb-" />
            <span className='text-white'>C++</span>
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-1 rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/html.png" width={40} height={40} alt="html" className="mb-2" />
            <span className='text-white'>HTML</span>
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-1 rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/css.png" width={40} height={40} alt="CSS" className="mb-2" />
            <span className='text-white'>CSS</span>
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-1 rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/js.png" width={40} height={40} alt="javascript" className="mb-2" />
            <span className='text-white'>Javascript</span>
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-1  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/react.png" width={50} height={50} alt="react" className="mb-2" />
            <span className='text-white'>React</span>
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"

            className=" p-1  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/bootstrap.png" width={50} height={50} alt="bootstrap" className="mb-4" />
            <span className='text-white'>Bootstrap</span>
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"

            className=" p-1  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/tailwind2.png" width={50} height={50} alt="tailwind" className="mb-4" />
            <span className='text-white'>Tailwind CSS</span>
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" py-3.5   rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/next.png" width={50} height={50} alt="next" className="mb-2 bg-white rounded-3xl" />
            <span className='text-white'>Next.js</span>
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" py-3.5  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/node.png" width={50} height={50} alt="node" className="mb-2" />
            <span className='text-white'>node.js</span>
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-3  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/express2.png" width={50} height={50} alt="express" className="mb-2 text-white" />
            <span className='text-white'>Express.js</span>
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-3  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/mongo.png" width={50} height={50} alt="mongo" className="mb-2" />
            <span className='text-white'>MongoDB</span>
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-3  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/SQL.png" width={50} height={50} alt="postresql" className="mb-4" />
            <span className='text-white'>PostgreSQL</span>
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className=" p-3  rounded-3xl border-2 border-neutral-800 text-center flex flex-col items-center shadow-sm justify-center">
            <Image src="/assets/git.png" width={50} height={50} alt="git" className="mb-2" />
            <span className='text-white'>Git</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills