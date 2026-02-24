
import React, { useState } from 'react';
import { Plane, MapPin, Home, Utensils, Users, Building, Truck, Sparkles, Sun, Check, Coffee } from 'lucide-react';
import { motion } from 'motion/react';

interface SertaoItem {
  time: string;
  label: string;
  icon: React.ReactNode;
  location?: string;
  highlight?: boolean;
}

const SertaoCard: React.FC<{ 
  day: string, 
  date: string, 
  items: SertaoItem[], 
  dayId: string, 
  completedIds: Set<string>, 
  onToggle: (id: string) => void,
  variants?: any
}> = ({ day, date, items, dayId, completedIds, onToggle, variants }) => (
  <motion.div variants={variants} className="glass rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/20 flex flex-col h-full shadow-2xl relative z-10 bg-white/10 backdrop-blur-md">
    <div className="p-4 md:p-6 bg-white/15 flex flex-col items-center text-center border-b border-white/10">
      <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#FF6F00] text-white text-[8px] md:text-[9px] uppercase font-black tracking-widest mb-2 shadow-lg">
        <Sparkles size={10} />
        Missão Social
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{day}</h3>
      <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">{date}</p>
    </div>
    
    <div className="p-4 md:p-6 space-y-4 md:space-y-5 flex-1">
      {items.map((item, idx) => {
        const uniqueId = `${dayId}-${item.time}`;
        const isDone = completedIds.has(uniqueId);
        return (
          <div key={idx} className={`flex gap-3 md:gap-4 group items-start transition-all duration-500 ${isDone ? 'opacity-30' : ''} ${item.highlight && !isDone ? 'bg-white/10 -mx-1 px-2 py-2 rounded-xl border border-white/10' : ''}`}>
            <div className="flex flex-col items-center h-full">
               <button 
                onClick={() => onToggle(uniqueId)}
                className={`p-1.5 md:p-2 rounded-lg transition-all duration-300 flex-shrink-0 cursor-pointer group active:scale-90 shadow-md ${isDone ? 'bg-emerald-500 text-white' : item.highlight ? 'bg-[#FF6F00] text-white' : 'bg-white/10 text-white'}`}
               >
                  {isDone ? <Check size={16} strokeWidth={3} /> : React.cloneElement(item.icon as React.ReactElement<any>, { size: 14 })}
               </button>
               {idx < items.length - 1 && <div className={`w-[1px] flex-grow my-1 min-h-[15px] md:min-h-[20px] transition-colors duration-500 ${isDone ? 'bg-emerald-500/30' : 'bg-white/10'}`} />}
            </div>
            <div className="flex flex-col pt-0.5 cursor-pointer" onClick={() => onToggle(uniqueId)}>
              <span className={`text-[10px] md:text-sm font-black tabular-nums tracking-wide ${isDone ? 'text-emerald-400' : item.highlight ? 'text-[#F59E47]' : 'text-[#F59E47]'}`}>
                {item.time}
              </span>
              <span className={`text-[13px] md:text-base font-bold transition-colors leading-tight drop-shadow-sm ${isDone ? 'text-emerald-400 line-through' : 'text-white'}`}>
                {item.label}
              </span>
              {item.location && (
                <span className={`text-[9px] md:text-[10px] font-bold flex items-center gap-1 mt-0.5 uppercase tracking-wider ${isDone ? 'text-emerald-500/40' : 'text-gray-400'}`}>
                  <MapPin size={10} className={isDone ? 'text-emerald-500/40' : 'text-[#FF6F00]/80'} />
                  {item.location}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </motion.div>
);

const Sertao: React.FC = () => {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const next = new Set(completedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCompletedIds(next);
  };

  const day04Items: SertaoItem[] = [
    { time: '07:00', label: 'Decolagem do hangar em Vitória-ES', icon: <Plane />, location: 'Vitória-ES' },
    { time: '09:40', label: 'Pouso na pista de pouso em Irecê-BA', icon: <Plane className="rotate-90" />, location: 'Irecê-BA' },
    { time: '10:20', label: 'Chegada na base de Lapão-BA e visita na fábrica de uniformes', icon: <Building />, location: 'Lapão-BA' },
    { time: '12:30', label: 'Almoço na base com toda equipe do IAV e Ames', icon: <Utensils />, location: 'Base Lapão' },
    { time: '13:30', label: 'Visita a base', icon: <Users />, location: 'Base Lapão' },
    { time: '14:30', label: 'Visita casa dos alunos para entrega dos kits', icon: <Home />, location: 'Comunidade Local', highlight: true },
    { time: '17:30', label: 'Saída da base para pista de Irece', icon: <Truck />, location: 'Irecê-BA' },
    { time: '18:00', label: 'Decolagem para Petrolina', icon: <Plane />, location: 'Irecê-BA' },
    { time: '18:30', label: 'Pouso aeroporto de Petrolina', icon: <Plane className="rotate-90" />, location: 'Petrolina-PE' },
    { time: '19:30', label: 'Hotel e jantar', icon: <Home />, location: 'Petrolina-PE' },
  ];

  const day05Items: SertaoItem[] = [
    { time: '08:30', label: 'Saída do hotel', icon: <Truck />, location: 'Petrolina-PE' },
    { time: '09:30', label: 'Chegada em Riacho de Sobrado', icon: <Building />, location: 'Riacho de Sobrado' },
    { time: '10:00', label: 'Visita na base', icon: <Users />, location: 'Riacho de Sobrado' },
    { time: '11:30', label: 'Saída de Riacho de Sobrado para Chapada do Avelar', icon: <Truck />, location: 'Chapada do Avelar' },
    { time: '12:30', label: 'Almoço na base Chapada do Avelar', icon: <Utensils />, location: 'Chapada do Avelar' },
    { time: '13:30', label: 'Visita na base', icon: <Users />, location: 'Chapada do Avelar' },
    { time: '15:00', label: 'Saída para Junco', icon: <Truck />, location: 'Junco' },
    { time: '15:40', label: 'Chegada em Junco', icon: <Building />, location: 'Junco' },
    { time: '17:00', label: 'Café da tarde na casa do sertanejo', icon: <Coffee />, location: 'Junco', highlight: true },
    { time: '18:30', label: 'Saída para aeroporto de Petrolina', icon: <Truck />, location: 'Petrolina-PE' },
    { time: '21:00', label: 'Chegada em Vitória-ES', icon: <Plane className="rotate-90" />, location: 'Vitória-ES', highlight: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-[120vh] flex flex-col gap-6 md:gap-8 pb-10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://i.ibb.co/B2zrbMrY/IMG-6253.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0630]/90 via-[#1a0630]/50 to-[#1a0630]/95" />
      </div>

      <motion.div variants={itemVariants} className="text-center relative z-10 pt-8 md:pt-12 px-6">
        <div className="inline-flex items-center justify-center p-2.5 md:p-3.5 mb-4 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 shadow-xl">
            <Sun size={24} className="text-[#FF6F00]" />
        </div>
        <h2 className="text-3xl md:text-7xl font-bold font-display text-white drop-shadow-xl tracking-tight text-center w-full">Expedição Sertão</h2>
        <p className="text-[#FF6F00] text-[10px] md:text-base uppercase tracking-[0.3em] font-black italic mt-2">Missão Social 2026</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-4 md:px-6 mx-auto relative z-10 w-full flex-1">
        <SertaoCard day="Quarta-feira" date="04 Março" items={day04Items} dayId="qua" completedIds={completedIds} onToggle={toggleItem} variants={itemVariants} />
        <SertaoCard day="Quinta-feira" date="05 Março" items={day05Items} dayId="qui" completedIds={completedIds} onToggle={toggleItem} variants={itemVariants} />
      </div>
    </motion.div>
  );
};

export default Sertao;
