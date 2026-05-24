import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Github from '../components/GitHub/Github'
import Contact from '../components/Contact/Contact'
import { useI18nHTMLAttributes } from '../hooks/useI18nHTMLAttributes'
import FloatingNavigation from '../components/animation/FloatingNavigation'


const Home = () => {
  useI18nHTMLAttributes();

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors'>
      <Helmet>
        <title>Mahmoud Hamdi | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Mahmoud Hamdi - Full-Stack Developer portfolio. Specializing in React, Next.js, Angular, Node.js, and MongoDB. View projects, skills, and get in touch." />
        <meta name="keywords" content="Mahmoud Hamdi, Full-Stack Developer, React, Node.js, Angular, Next.js, Portfolio, Web Developer, MERN Stack" />
        <meta property="og:title" content="Mahmoud Hamdi - Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer specializing in React, Next.js, Angular, Node.js, and MongoDB. Explore my projects and skills." />
        <meta property="og:url" content="https://mahmoudhamdi.dev" />
        <link rel="canonical" href="https://mahmoudhamdi.dev" />
      </Helmet>
      <Navbar />
      <main id="main-content">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="github">
          <Github />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <FloatingNavigation />
    </div>
  )
}

export default Home
