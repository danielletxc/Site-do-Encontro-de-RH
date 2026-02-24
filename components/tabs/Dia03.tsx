
import React, { useState } from 'react';
import { BookOpen, Coffee, Utensils, Shield, LogOut, Users, MapPin, Check, Component, Scale, Handshake, Sparkles, Play } from 'lucide-react';
import { motion } from 'motion/react';

import { TabId } from '../../types';

interface Dia03Props {
  onNavigate?: (tab: TabId) => void;
}

const Dia03: React.FC<Dia03Props> = ({ onNavigate }) => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  const toggleItem = (time: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(time)) {
      newCompleted.delete(time);
    } else {
      newCompleted.add(time);
    }
    setCompletedItems(newCompleted);
  };

  const schedule = [
    { time: '08:00', icon: <Component />, title: 'Treinamento Introdutório sobre BSC', desc: 'com Frederico Steiner.', location: 'Auditório Brasil - Sede Corporativa', badge: 'Processos' },
    { time: '10:00', icon: <Coffee />, title: 'Coffee Break', desc: 'Uma pausa para recarregar as energias.', location: 'Praça Azul', isBreak: true, badge: 'Pausa' },
    { time: '10:30', icon: <Component />, title: 'Treinamento sobre BSC - Parte 2', desc: 'com Frederico Steiner.', location: 'Auditório Brasil - Sede Corporativa', badge: 'Processos' },
    { time: '12:00', icon: <Utensils />, title: 'Almoço', desc: 'Dirigir-se ao refeitório.', location: 'Refeitório da Unidade ES', isBreak: true, badge: 'Pausa' },
    { time: '13:00', icon: <BookOpen />, title: 'Treinamento NR-01', desc: 'com time de SSMA.', location: 'Auditório Brasil - Sede Corporativa', badge: 'Processos' },
    { time: '15:30', icon: <Coffee />, title: 'Coffee Break', desc: 'Uma pausa para recarregar as energias.', location: 'Praça Azul', isBreak: true, badge: 'Pausa' },
    { time: '16:00', icon: <BookOpen />, title: 'Nova identidade Fortlev', desc: 'Nova marca com Lucas Haryson + Marketing.', location: 'Auditório Brasil - Sede Corporativa', badge: 'Marca' },
    { time: '17:00', icon: <Handshake />, title: 'Alinhamento Final', desc: 'Com Robson Gramacho.', location: 'Auditório Brasil - Sede Corporativa', badge: 'Encerramento' },
    { time: '18:00', icon: <LogOut />, title: 'Retorno', desc: 'Direcionamento hotel e retorno às unidades.', location: 'Auditório Brasil - Sede Corporativa', badge: 'Logística' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full mx-auto space-y-8 px-1 pb-10"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] md:text-[10px] uppercase font-bold tracking-widest mb-4">
          <Users size={12} />
          Público Geral (Todos os Participantes)
        </div>
        <h2 className="text-3xl md:text-5xl font-yellowtail text-[#FF6F00] drop-shadow-lg mb-2">Terça-feira</h2>
        <p className="text-gray-400 text-xs md:text-sm font-light tracking-wide">03 de Março - Processos e Identidade</p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="relative">
          <div className="space-y-6 relative z-10">
            {schedule.map((item, idx) => {
              const isLastItem = idx === schedule.length - 1;
              const isDone = completedItems.has(item.time);

              return (
                <React.Fragment key={idx}>
                  {/* Vertical Timeline Line - Now scoped to this relative container */}
                  {!isLastItem && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'calc(100% - 12px)' }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute left-[26px] md:left-[42px] top-6 w-0.5 bg-gradient-to-b from-[#FF6F00] via-[#FF6F00]/20 to-[#FF6F00] z-0 hidden sm:block" 
                    />
                  )}

                  <motion.div 
                    variants={itemVariants}
                    className="flex items-start gap-4 md:gap-8 group"
                  >
                    {/* Timeline Dot Column */}
                    <div className="relative flex flex-col items-center shrink-0 mt-6 md:mt-8 hidden sm:flex">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black z-20 transition-all duration-500 ${isDone ? 'bg-emerald-500 scale-110' : 'bg-[#FF6F00] shadow-[0_0_15px_rgba(255,111,0,0.6)]'}`} 
                      />
                    </div>

                    {/* Card Content */}
                    <div 
                      className={`flex-1 relative flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-4 md:p-5 rounded-[2rem] glass transition-all duration-500 ${isDone ? 'opacity-40 grayscale-[0.5]' : 'hover:translate-x-1 md:hover:translate-x-2 border-white/10 hover:border-[#FF6F00]/30'} ${item.isBreak ? 'bg-[#FF6F00]/5 border-[#FF6F00]/20' : 'bg-white/5 shadow-xl'}`}
                    >
                      <button 
                        onClick={() => toggleItem(item.time)}
                        className={`shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex flex-col items-center justify-center rounded-2xl transition-all duration-500 shadow-xl cursor-pointer group/btn active:scale-95 border ${isDone ? 'bg-emerald-500 shadow-emerald-500/40 border-emerald-400' : 'bg-gradient-to-br from-[#FF6F00] to-[#E65100] border-[#FF8F33]/30 shadow-[#FF6F00]/20'}`}
                      >
                        <span className="text-white text-sm md:text-xl font-bold tabular-nums leading-none mb-1">{item.time}</span>
                        <div className="text-white transform group-hover/btn:scale-110 transition-transform opacity-70 group-hover/btn:opacity-100">
                          {isDone ? <Check size={18} strokeWidth={4} /> : React.cloneElement(item.icon as React.ReactElement<any>, { size: 16, strokeWidth: 2.5 })}
                        </div>
                      </button>
                    
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                        <h3 className={`text-base md:text-xl font-bold leading-tight break-words ${isDone ? 'text-emerald-400' : item.isBreak ? 'text-[#FF6F00]' : 'text-white'}`}>{item.title}</h3>
                        {item.badge && <span className={`mx-auto sm:mx-0 flex-shrink-0 text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/10 bg-white/5 uppercase tracking-widest w-fit ${isDone ? 'text-emerald-500/50' : 'text-gray-400'}`}>{item.badge}</span>}
                      </div>
                      <p className={`text-[11px] md:text-sm mt-1 leading-relaxed break-words ${isDone ? 'text-gray-600' : 'text-gray-400 font-light'}`}>{item.desc}</p>
                      
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2 mt-3">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className={item.isBreak ? 'text-[#FF6F00]' : 'text-gray-500'} />
                          <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] break-words ${item.isBreak ? 'text-[#FF6F00]/80' : 'text-gray-500'}`}>
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Speakers Section - Integrated at bottom */}
        <motion.div variants={itemVariants} className="pt-12">
          <div 
            onClick={() => onNavigate?.(TabId.PALESTRANTES)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 cursor-pointer hover:border-[#FF6F00]/50 transition-all duration-500"
          >
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FF6F00]/10 rounded-full blur-3xl group-hover:bg-[#FF6F00]/20 transition-all duration-500" />
             
             <div className="flex items-center justify-between mb-6">
               <h4 className="text-[#FF6F00] font-bold text-xs uppercase tracking-widest">Especialistas do Dia</h4>
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#FF6F00] group-hover:text-white transition-all">
                 <Play size={14} fill="currentColor" />
               </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               {[
                 { name: 'Frederico Steiner', role: 'Estratégia BSC', img: 'https://i.ibb.co/qM1nMK9F/Frederico-Steiner.jpg' },
                 { name: 'Lucas Haryson', role: 'Endomarketing', img: 'https://i.ibb.co/9mxtZS1Z/1740169131608.jpg' },
                 { name: 'Renan de Paulo', role: 'SSMA', img: 'https://i.ibb.co/C5rn9h4G/Renan-de-Paulo.jpg' }
               ].map((speaker, i) => (
                 <div key={i} className="flex items-center gap-3 group/item">
                   <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover/item:border-[#FF6F00]/50 transition-colors">
                     <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <p className="text-white text-sm font-bold group-hover/item:text-[#FF6F00] transition-colors">{speaker.name}</p>
                     <p className="text-gray-500 text-[10px] uppercase tracking-wider">{speaker.role}</p>
                   </div>
                 </div>
               ))}
             </div>

             <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
               <span>Ver todos os perfis de palestrantes</span>
               <span className="text-[#FF6F00]">→</span>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dia03;
