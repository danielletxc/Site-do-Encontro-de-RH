import React from 'react';
import { motion } from 'motion/react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-fit flex flex-col items-center justify-start pt-10 pb-20 md:pt-12 md:pb-28 lg:pb-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base gradient is now handled by the parent container, but we add some overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0630] via-[#2E003E]/80 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center blur-[60px] brightness-100 mix-blend-overlay"
          style={{ 
            backgroundImage: `url('https://iili.io/fbsU9Ev.md.jpg')`,
          }}
        />
        {/* Aurora Effect - Orange Pulse */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] aurora-effect z-0 pointer-events-none mix-blend-screen opacity-60" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#FF6F00] blur-[100px] rounded-full will-change-transform" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-600 blur-[80px] rounded-full will-change-transform" 
        />
      </div>

      {/* 1. LOGOS SUPERIORES (Assinatura Corporativa) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex items-center justify-center mb-12 md:mb-16 px-4 transition-opacity duration-500"
      >
        <img 
          src="https://i.ibb.co/FLqQzs2q/LOGO-BOLSA.png"
          alt="Logos Fortlev, Enepol, Spezzia" 
          className="h-5 sm:h-6 md:h-7 w-auto object-contain drop-shadow-lg transition-transform hover:scale-105 duration-500"
        />
      </motion.div>

      {/* 2. CONTEÚDO PRINCIPAL (Selo + Texto/Contador) */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-14 lg:gap-16">
        
        {/* Lado Esquerdo: Selo do Evento */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <img 
            src="https://i.ibb.co/xkdTdry/6514-ENCONTRO-ANUAL-DE-GENTE-E-GEST-O-2026-SELO-CAMPANHA-pdf-1.png" 
            alt="Encontro Anual Gente e Gestão 2026" 
            className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[440px] lg:max-w-[540px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Lado Direito: Texto e Contador */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 md:mb-10 relative"
          >
            <div className="absolute -inset-10 bg-[#FF6F00] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />
            <span className="block text-purple-200 text-[10px] sm:text-xs md:text-sm font-light uppercase tracking-[0.5em] mb-2 opacity-80">O FUTURO</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic drop-shadow-2xl">
              É AGORA
            </h2>
          </motion.div>
          
          {/* Container do Contador */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full flex justify-center lg:justify-end scale-[0.85] sm:scale-90 md:scale-100 lg:scale-110 origin-center lg:origin-right"
          >
             <Countdown targetDate="2026-03-02T07:40:00" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
