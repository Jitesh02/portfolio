import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import TopButton from '@/components/TopButton'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />  
      <Projects />
      <Contact />
      {/* <Footer /> */}
      <TopButton />
    </>
  )
}

export default Home