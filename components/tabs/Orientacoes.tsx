import React from 'react';
import { Clock, MapPin, Coffee, Utensils, AlertCircle, Info } from 'lucide-react';
import { motion } from 'motion/react';

const Orientacoes: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-4 md:px-6 space-y-6 md:space-y-10 pb-12"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="text-center space-y-2 mb-6 md:mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
          <Info size={14} className="text-[#FF6F00]" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-purple-200">Informações Gerais</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-yellowtail text-[#FF6F00] drop-shadow-lg">
          Orientações do Evento
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-base font-light tracking-wide">
          Preparamos tudo com excelência para sua melhor experiência.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* 1. Culto - Compact Card */}
        <motion.div variants={itemVariants} className="order-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-5 md:p-6 flex flex-col hover:border-[#FF6F00]/40 transition-all duration-500 shadow-2xl">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6F00]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#FF6F00]/10 transition-colors" />
           <div className="flex justify-between items-start mb-6 relative z-10">
             <div className="p-3 rounded-2xl bg-gradient-to-br from-[#FF6F00] to-[#FF8F00] text-white shadow-lg shadow-[#FF6F00]/20">
               <Clock size={24} />
             </div>
             <div className="inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-black text-[#FF6F00] bg-black/60 px-3 py-1.5 rounded-full border border-[#FF6F00]/30 animate-pulse tracking-widest">
               <AlertCircle size={12} />
               <span>PONTUALIDADE</span>
             </div>
           </div>
           <div className="flex-1 relative z-10">
             <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Culto de Abertura</h3>
             <p className="text-xs md:text-sm text-gray-400 mb-4 leading-relaxed">
               A pontualidade é fundamental para o bom andamento de nossa programação.
             </p>
             <div className="flex items-center gap-2 text-gray-400 mb-6">
               <MapPin size={14} className="text-[#FF6F00]" />
               <span className="text-xs md:text-sm">Auditório Torre Forte</span>
             </div>
           </div>
           <div className="flex items-end justify-between pt-4 border-t border-white/10 relative z-10">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Horário</span>
              <span className="text-4xl md:text-5xl font-mono font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">07:40</span>
           </div>
        </motion.div>

        {/* 2. Café da Manhã - Detailed Card (Spans 2 cols on LG) */}
        <motion.div variants={itemVariants} className="order-2 lg:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-5 md:p-8 hover:border-[#FF6F00]/30 transition-all duration-700 shadow-2xl">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#FF6F00]/5 rounded-full blur-[100px]" />
          
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10 h-full">
            <div className="p-3 rounded-2xl bg-white/5 text-[#FF6F00] shrink-0 border border-white/10 shadow-xl">
              <Utensils size={24} />
            </div>
            <div className="flex-1 w-full flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Café da Manhã</h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light">Inicie o dia com energia e disposição.</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20 tracking-widest">OPCIONAL</span>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/5 space-y-4 shadow-2xl backdrop-blur-md flex-1">
                <div className="space-y-2">
                  <p className="text-xs md:text-base text-gray-200 leading-relaxed font-medium">
                    No primeiro dia, haverá <span className="text-[#FF6F00] font-bold">coffee-break</span> disponível na empresa.
                  </p>
                  <p className="text-[11px] md:text-sm text-gray-400 leading-relaxed italic border-l-2 border-[#FF6F00]/40 pl-3">
                    Os participantes podem optar por não consumir o café da manhã previamente.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-black/20 border border-transparent hover:border-[#FF6F00]/30 transition-all group/item">
                    <span className="text-[10px] md:text-xs font-black text-[#FF6F00] uppercase block mb-1 tracking-widest">Hospedados</span>
                    <p className="text-xs md:text-sm text-gray-300">Consumir no <span className="text-white font-bold">hotel</span> ou no coffee-break.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/20 border border-transparent hover:border-[#FF6F00]/30 transition-all group/item">
                    <span className="text-[10px] md:text-xs font-black text-[#FF6F00] uppercase block mb-1 tracking-widest">Locais</span>
                    <p className="text-xs md:text-sm text-gray-300">Refeitório <span className="text-white font-bold">Unidade ES</span> ou coffee-break.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Coffee Break - Compact Card */}
        <motion.div variants={itemVariants} className="order-3 group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-5 md:p-6 flex flex-col justify-between hover:border-[#FF6F00]/40 transition-all duration-500 shadow-xl">
           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
             <Coffee size={80} strokeWidth={1} />
           </div>
           
           <div className="space-y-5 relative z-10">
             <div className="p-3 rounded-2xl bg-white/5 text-[#FF6F00] w-fit border border-white/10 shadow-inner">
               <Coffee size={24} />
             </div>
             <div>
               <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Coffee Break</h3>
               <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                 Teremos pausas ao longo do evento para realizar trocas e recarregar energias.
               </p>
             </div>
           </div>
           
           <div className="mt-8 relative z-10">
             <div className="flex items-center gap-3 text-xs md:text-sm text-white bg-[#FF6F00]/15 p-3 rounded-2xl border border-[#FF6F00]/30 backdrop-blur-sm shadow-lg">
               <MapPin size={16} className="text-[#FF6F00]" />
               <span className="font-bold tracking-wide">Praça Azul</span>
             </div>
           </div>
        </motion.div>

        {/* 4. Almoço - Compact Card */}
        <motion.div variants={itemVariants} className="order-4 group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-5 md:p-6 flex flex-col justify-between hover:border-[#FF6F00]/40 transition-all duration-500 shadow-xl">
           <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
             <Utensils size={80} strokeWidth={1} />
           </div>

           <div className="space-y-5 relative z-10">
             <div className="p-3 rounded-2xl bg-white/5 text-[#FF6F00] w-fit border border-white/10 shadow-inner">
               <Utensils size={24} />
             </div>
             <div>
               <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Almoço</h3>
               <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                 Dirigir-se ao refeitório da Unidade.
               </p>
             </div>
           </div>
           
           <div className="mt-8 space-y-4 relative z-10">
             <div className="flex items-center gap-3 text-xs md:text-sm text-white bg-white/10 p-3 rounded-2xl border border-white/10 backdrop-blur-sm shadow-lg">
               <MapPin size={16} className="text-[#FF6F00]" />
               <span className="font-bold tracking-wide">Restaurante Unidade ES</span>
             </div>
             <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em]">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
               <span>Acesso Liberado</span>
             </div>
           </div>
        </motion.div>

        {/* 5. Checklist - Impact Card */}
        <motion.div variants={itemVariants} className="order-5 group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-5 md:p-6 flex flex-col justify-between hover:border-[#FF6F00]/40 transition-all duration-700 shadow-2xl">
           <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <AlertCircle size={24} className="text-[#FF6F00]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Checklist</h3>
                <p className="text-gray-400 text-xs md:text-sm font-light">Itens essenciais para o início.</p>
              </div>
           </div>

           <div className="relative z-10 grid grid-cols-2 gap-3 mt-6">
              {[
                { label: 'Crachá', icon: 'ID' },
                { label: 'Caderno', icon: '📝' },
                { label: 'Energia', icon: '⚡' },
                { label: 'Inovação', icon: '💡' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-[#FF6F00]/15 hover:border-[#FF6F00]/30 transition-all cursor-default group/item">
                  <span className="text-xl transform group-hover/item:scale-125 transition-transform">{item.icon}</span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
           </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#FF6F00]/25 via-black to-black p-6 md:p-10 text-center mt-8 md:mt-12 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#FF6F00]/15 rounded-full blur-[100px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6F00] to-[#FF8F00] flex items-center justify-center shadow-xl transform -rotate-6 shadow-[#FF6F00]/20">
              <Info size={28} className="text-white" />
            </div>
            <div className="text-left">
              <h4 className="text-xl md:text-2xl font-bold text-white">Suporte</h4>
              <p className="text-gray-400 text-xs md:text-sm max-w-xs font-light leading-relaxed">
                Equipe de recepção e <span className="text-[#FF6F00] font-bold">Gente & Gestão</span> à disposição.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300 backdrop-blur-md hover:bg-white/10 transition-colors">
              Recepção 24h
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300 backdrop-blur-md hover:bg-white/10 transition-colors">
              Suporte Técnico
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Orientacoes;
