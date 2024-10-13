'use client'
import React from 'react'
import { motion } from "framer-motion"

const Experience = () => {
    const EXPERIENCES = [
        {
            year: "Sep 2024 - Present",
            role: "Software Engineer",
            company: "BluEnt",
            description: `Developing....`,
            technologies: ["Javascript", "React.js", "Node.js", "APIs", "MySQL"],
        },
        {
            year: "Jan 2024 - Mar 2024",
            role: "Web Developement Intern",
            company: "StuIntern",
            description: `Developed the web applications using 
            JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated 
            with MongoDB databases. Collaborated with stakeholders to define project 
            requirements and timelines.`,
            technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
        },
        {
            year: "Mar 2023 - Jun 2023",
            role: "Frontend Developer",
            company: "Adore",
            description: `mplemented scalable web applications using React.js, Tailwind CSS, and Node.js with Express.js and Chart.js for data visualization. Worked closely with diverse teams to deliver solutions that met client needs and industry standards. .`,
            technologies: ["HTML", "CSS", "Javscipt", "React", "Chart.js",],
        },
        {
            year: "Aug 2023 - Sep 2023",
            role: "Web Development Intern",
            company: "CodSoft",
            description: `Completed a Web developer internship at CodSoft, Contributing to dynamic Projects and  
Enhancing proficiency in modern web technologies.`,
            technologies: ["HTML", "CSS", "Javascript"],
        },
        {
            year: "Aug 2022 - Sep 2022",
            role: "Full STack Summer Training",
            company: "IBM-AllSoft",
            description: `Completed 90 Hours of training with IBM as Business Partners at Allsoft Solutions and services Private Limited and made an Industry oriented Project.`,
            technologies: ["HTML", "CSS", "Javascript", "Node", "Mongodb", "Express.js"],
        },
    ];

    return (
        <section className="w-full h-fit px-[40px] py-1 max-xs:px-[20px] relative " id="skills">
            <div className="max-w-[1250px] mx-auto">
                <div className="inline-block mt-5 mb-10">
                    <p className="section-title">
                        <span className="mb-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
                            </svg>
                        </span>
                        Experience
                    </p>
                </div>

                <div className="border-b border-neutral-900 pb-4 ">
                    {/* <h1 className="my-20 text-center text-4xl text-white">Experience</h1> */}
                    <div>
                        {EXPERIENCES.map((experience, index) => (
                            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="w-full lg:w-1/4">
                                    <p className="mb-2 text-md text-neutral-400">{experience.year}</p>
                                </motion.div>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="w-full max-w-xl lg:w-3/4">
                                    <h6 className=" text-lg mb-2 font-semibold text-white">
                                        {experience.role} -{" "}
                                        <span className=" text-purple-100">{experience.company}</span>
                                    </h6>
                                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                                    <div>
                                        {experience.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Experience