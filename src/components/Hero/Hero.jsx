import React from 'react'
import { Download, MailIcon } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import heroDict from '../../content/hero/hero.content';
import TechCloud from './orbit';
import Cv from '../../assets/mahmoud_hamdi_cv.pdf';


const Hero = () => {
  const content = useTranslation(heroDict);
  return (
    <section id="hero" aria-label="Introduction">
    <div className='relative flex flex-col lg:flex-row items-center justify-center min-h-screen lg:h-screen lg:max-h-[calc(110vh-4.5rem)] overflow-hidden px-4 md:px-8 pt-8 pb-16 lg:pt-0'>
      {/* Decorative shapes - Mobile (fewer shapes) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mt-20 block md:hidden">
        <div className="absolute top-[5%] left-[5%] w-20 h-20 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-full opacity-40 blur-sm dark:opacity-20 animate-float-slow" />
        <div className="absolute top-[30%] left-[60%] w-20 h-20 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-full opacity-40 blur-sm dark:opacity-20 animate-float-slow " />
        <div className="absolute top-[8%] right-[20%] w-16 h-16 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-xl opacity-40 blur-sm dark:opacity-20 animate-float-slow" style={{ transform: 'rotate(15deg)' }} />
        <div className="absolute top-[50%] left-[3%] w-14 h-14 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-lg opacity-35 blur-sm dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute top-[30%] left-[30%] w-14 h-14 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-lg opacity-35 blur-sm dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute top-[45%] right-[5%] w-18 h-18 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-full opacity-40 blur-sm dark:opacity-20 animate-float-slow" />
        <div className="absolute bottom-[15%] left-[10%] w-16 h-16 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-xl opacity-35 blur-sm dark:opacity-20 animate-float-slow" style={{ transform: 'rotate(-20deg)' }} />
        <div className="absolute bottom-[20%] right-[8%] w-14 h-14 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-600 dark:via-purple-500 dark:to-purple-800 rounded-lg opacity-40 blur-sm dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(30deg)' }} />
      </div>
      {/* Decorative shapes - Desktop (full set) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mt-20 hidden md:block">
        {/* Row 1 - Top */}
        <div className="absolute top-[8%] left-[10%] w-32 h-32 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-full opacity-50 blur-xs dark:opacity-20 animate-float-slow " />
        <div className="absolute top-[15%] left-[25%] w-32 h-32 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-full opacity-50 blur-xs dark:opacity-20 animate-float-slow " />
        <div className="absolute top-[10%] left-[55%] w-28 h-28 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-2xl opacity-45 blur-xs dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(15deg)' }} />
        <div className="absolute top-[5%] left-[40%] w-28 h-28 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-2xl opacity-45 blur-xs dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(15deg)' }} />
        <div className="absolute top-[12%] right-[8%] w-36 h-24 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-2xl opacity-50 blur-xs dark:opacity-20 animate-float-slow " style={{ transform: 'rotate(-20deg)' }} />
        <div className="absolute top-[28%] right-[23%] w-36 h-24 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-xl opacity-50 blur-xs dark:opacity-20 animate-float-slow " style={{ transform: 'rotate(-29deg)' }} />
        {/* Row 2 - Upper Middle */}
        <div className="absolute top-[35%] left-[44%] w-24 h-24 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-lg opacity-50 blur-xs dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute top-[30%] right-[12%] w-32 h-32 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-full opacity-45 blur-xs dark:opacity-20 " />
        <div className="absolute top-[45%] right-[2%] w-32 h-32 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-full opacity-45 blur-xs dark:opacity-20 animate-float-slow" />

        {/* Row 3 - Center */}
        <div className="absolute top-[72%] left-[40%] w-28 h-28 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-lg dark:shadow-purple-500 rounded-full opacity-50 blur-xs dark:opacity-20 animate-float-slow" />
        <div className="absolute top-[40%] left-[20%] w-28 h-28 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-lg dark:shadow-purple-500 rounded-full opacity-50 blur-xs dark:opacity-20 animate-float-slow" />
        <div className="absolute top-[75%] right-[30%] w-36 h-24 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-lg dark:shadow-purple-500 rounded-2xl opacity-45 blur-xs dark:opacity-20 animate-float-slow" style={{ transform: 'rotate(-15deg)' }} />
        <div className="absolute top-[55%] right-[25%] w-36 h-24 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-lg dark:shadow-purple-500 rounded-2xl opacity-45 blur-xs dark:opacity-20 animate-float-slow" style={{ transform: 'rotate(-15deg)' }} />

        {/* Row 4 - Lower */}
        <div className="absolute bottom-[10%] left-[20%] w-40 h-28 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-2xl opacity-50 blur-xs dark:opacity-20 animate-float-slow" style={{ transform: 'rotate(18deg)' }} />
        <div className="absolute bottom-[20%] left-[8%] w-28 h-28 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-lg opacity-50 blur-xs dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(18deg)' }} />
        <div className="absolute bottom-[22%] left-[50%] w-32 h-32 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-6 dark:ring-white shadow-md dark:shadow-purple-500 rounded-full opacity-45 blur-xs dark:opacity-20 animate-float-slow" />
        <div className="absolute bottom-[18%] right-[10%] w-28 h-28 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-blue-500 ring-4 dark:ring-white shadow-lg dark:shadow-purple-500 rounded-lg opacity-45 blur-xs dark:opacity-20 animate-[spin_10s_linear_infinite]" style={{ transform: 'rotate(-3０deg)' }} />
      </div>
      {/* TechCloud for mobile - above text */}
      <div 
        className='block lg:hidden scale-75 h-64 mb-10'
      >
        <TechCloud />
      </div>
      <div 
        className='container relative mx-auto lg:ml-44 text-center lg:text-left h-full flex flex-col justify-center items-center lg:items-start '
      >
        <h1 className='relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700'>{content.name}</h1>
        <h2 className='relative z-10 my-4 md:my-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-600 dark:text-purple-500 dark:drop-shadow-lg dark:drop-shadow-purple-700'>{content.title}</h2>
        <p className='relative z-10 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 my-4 md:my-8 font-medium text-gray-700 dark:text-purple-300 dark:drop-shadow-lg dark:drop-shadow-purple-700'>{content.description}</p>
        <div className='flex justify-center mt-8 lg:justify-start gap-4'>
        <a href={Cv} download="Mahmoud_Hamdi_CV.pdf" aria-label={content.downloadCV} className='relative z-10 w-36 md:w-40 h-11 md:h-12 flex justify-center items-center gap-1 text-base md:text-lg font-medium text-amber-800 ring-2 ring-amber-800 bg-amber-500 hover:bg- shadow-md shadow-amber-200/50 hover:shadow-lg hover:shadow-amber-300/60 dark:bg-purple-600 dark:ring-purple-500 dark:text-purple-100 dark:shadow-purple-900/30 dark:hover:bg-purple-700 dark:hover:shadow-purple-800/50 rounded-md transition-all duration=300'><Download aria-hidden="true" />{content.downloadCV}</a>
        <a href="#contact" aria-label={content.contactMe} className='relative z=1０ w=36 md:w=4０ h=11 md:h=12 flex justify-center items-center gap=1 text-base md:text-lg font-medium text=amber-6０  ring=2 ring=amber-5０ hover:bg=amber-5０ hover:text=amber-8０ hover:ring=amber-8０ shadow-md shadow=amber_2０₀/5０ hover:shadow-lg hover:shadow=amber_3０₀/6０ dark:bg-transparent dark:ring=2 dark:ring=purple_5０₀ dark:hover:ring=purple_3０₀ dark:text=purple_4０₀ dark:shadow=purple_9０₀/3０ dark:hover:bg=purple_7０₀ dark:hover:text=purple_2０₀ dark:hover:shadow=purple_8０₀/5０ rounded-md transition-all duration=3₀₀'><MailIcon aria-hidden="true" />{content.contactMe}</a>
        </div>
      </div>
      {/* TechCloud for desktop - beside text */}
      <div
        className='mt-10 lg:mr-40 hidden lg:block'
      >
        <TechCloud />
      </div>
    </div>
      </section>
  )
}
export default Hero
