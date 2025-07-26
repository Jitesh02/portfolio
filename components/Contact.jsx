"use client";

import { AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion"
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const subject = formData.get("subject")?.trim();
    const message = formData.get("message")?.trim();

    const hasError = {
      name: !name,
      email: !email,
      subject: !subject,
      message: !message,
    };

    setFormError(hasError);

    const isValid = Object.values(hasError).every((val) => !val);
    if (!isValid) return;

    emailjs
      .sendForm("service_fqjn6gj", "template_ei70ozc", form.current, "je9PW3_sZAW2PGrv-")
      .then(() => {
        form.current.reset();
        setFormError({
          name: false,
          email: false,
          subject: false,
          message: false,
        });
        console.log("Successfully sent");
        toast.success('Email Successfully sent!')
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const inputStyle = (error) =>
    `w-full text-black border rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red ${error ? "border-red-500" : "border-slate-200"
    }`;


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />


      <div className="w-full h-fit px-[40px]  py-10 md:py-20 max-xs:px-[20px] relative " id="contact">
        <div className="max-w-[1250px] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <div className="inline-block">
                <p className="section-title mb-10">
                  <span className="mb-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  Contact Me
                </p>
              </div>
              <p className="text-white">
                I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you
                want to run past me. I'm also avaliable for hire as well.
              </p>
              <p className="text-white mt-12">Email me at</p>
              <h4>
                <a href="mailto:jiteshtripathi16480@gmail.com" className="text-lg font-semibold text-white">
                  jiteshtripathi16480@gmail.com
                </a>
              </h4>
              <div className="mt-12">
                <div className="flex flex-col gap-2">
                  <h5 className="text-white">Socials</h5>
                  <div className="flex gap-5">
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://github.com/Jitesh02" target="_blank" className="text-3xl text-white">
                      <AiFillGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="http://linkedin.com/in/jitesh-tripathi/" target="_blank" className="text-3xl text-white">
                      <AiFillLinkedin />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.instagram.com/" target="_blank" className="text-3xl text-white">
                      <AiFillInstagram />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://twitter.com/" target="_blank" className="text-3xl text-white">
                      <AiFillTwitterSquare />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={sendEmail} ref={form} className="w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className={inputStyle(formError.name)}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  className={inputStyle(formError.email)}
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className={inputStyle(formError.subject)}
                />
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  style={{ resize: "none" }}
                  placeholder="Message"
                  className={inputStyle(formError.message)}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-3 px-6 font-semibold text-white bg-dark-red hover:shadow-lg hover:bg-dark-red/75 transition-all duration-500 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;