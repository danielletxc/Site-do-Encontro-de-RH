import React, { useState } from 'react';
import { MapPin, Monitor, HardHat, Building, UserCheck, ShieldCheck, Clock, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { TabId } from '../../types';

interface ScheduleEntry {
  time: string;
  label: string;
  isBreak?: boolean;
  description?: string;
}

interface Dia04Props {
  onNavigate?: (tab: TabId) => void;
}

const Dia04: React.FC<Dia04Props> = ({ onNavigate }) => {
  const [activeTrack, setActiveTrack] = useState<'bahia' | 'sc' | 'auditorio'>('bahia');
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const next = new Set(completedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCompletedIds(next);
  };

  const tracks = [
    { 
      id: 'bahia', 
      name: 'Performance', 
      theme: 'Sala Bahia', 
      icon: Monitor, 
      color: 'text-blue-400', 
      activeBg: 'bg-blue-500/20',
      borderColor: 'border-blue-500/50'
    },
    { 
      id: 'sc', 
      name: 'Instalações e Serviços', 
      theme: 'Sala Santa Catarina', 
      icon: Building, 
      color: 'text-green-400', 
      activeBg: 'bg-green-500/20',
      borderColor: 'border-green-500/50'
    },
    { 
      id: 'auditorio', 
      name: 'SSMA', 
      theme: 'Auditório Brasil', 
      icon: HardHat, 
      color: 'text-red-400', 
      activeBg: 'bg-red-500/20',
      borderColor: 'border-red-500/50'
    },
  ] as const;

  const schedules: Record<string, ScheduleEntry[]> = {
    bahia: [
      { time: '08:30', label: 'Treinamento de Inovação Estratégica', description: 'Com Luiz Goessler.' },
      { time: '10:00', label: 'Coffee Break', isBreak: true, description: 'Praça Azul' },
      { time: '10:30', label: 'Treinamento de Inovação Estratégica', description: 'Com Luiz Goessler.' },
      { time: '12:00', label: 'Almoço na UES', isBreak: true, description: 'Refeitório UES' },
      { time: '13:00', label: 'Treinamento de Inovação Estratégica', description: 'Com Luiz Goessler.' },
      { time: '15:30', label: 'Coffee Break', isBreak: true, description: 'Praça Azul' },
      { time: '16:00', label: 'Treinamento de Inovação Estratégica', description: 'Alinhamentos finais' },
      { time: '16:30', label: 'Encerramento' },
    ],
    sc: [
      { time: '08:30', label: 'Treinamento sobre Janelas Quebradas', description: 'Com Laís Mozer.' },
      { time: '10:00', label: 'Coffee Break', isBreak: true, description: 'Praça Azul' },
      { time: '10:30', label: 'Treinamento sobre Janelas Quebradas', description: 'Com Laís Mozer.' },
      { time: '12:00', label: 'Almoço na UES', isBreak: true, description: 'Refeitório UES' },
      { time: '13:00', label: 'Padronização de rotinas da área', description: 'Com Victoria Carolina.' },
      { time: '15:30', label: 'Coffee Break', isBreak: true, description: 'Praça Azul' },
      { time: '16:00', label: 'Padronização de rotinas da área', description: 'Com Victoria Carolina.' },
      { time: '16:30', label: 'Encerramento' },
    ],
    auditorio: [
      { time: '08:30', label: 'Segurança e meio ambiente', description: 'A definir' },
      { time: '10:00', label: 'Coffee Break', isBreak: true, description: 'Praça Azul' },
      { time: '10:30', label: 'Segurança e meio ambiente', description: 'A definir' },
      { time: '12:00', label: 'Almoço na UES', isBreak: true, description: 'Refeitório UES' },
      { time: '13:00', label: 'Segurança e meio ambiente', description: 'A definir' },
      { time: '15:30', label: 'Coffee Break', isBreak: true, description: 'Praça Azul' },
      { time: '16:00', label: 'Segurança e meio ambiente', description: 'Alinhamentos finais' },
      { time: '16:30', label: 'Encerramento' },
    ]
  };

  const currentSchedule = schedules[activeTrack];
  const activeTrackInfo = tracks.find(t => t.id === activeTrack)!;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full mx-auto space-y-8 pb-10"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center space-y-2 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] uppercase font-bold tracking-widest mb-4">
          <UserCheck size={12} className="text-[#FF6F00]" />
          <span>Público Específico</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-yellowtail text-[#FF6F00] drop-shadow-lg mb-2">
          Quarta-feira
        </h2>
        <p className="text-gray-400 text-sm font-light tracking-wide">Treinamentos Técnicos e Específicos</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Joint Session & Track Selection */}
        <div className="lg:col-span-5 space-y-6 sticky top-4">
          {/* Joint Session Card */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl border border-[#FF6F00]/30 bg-gradient-to-br from-[#FF6F00]/10 to-black/40 group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6F00]" />
            <div className="p-6 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center justify-center p-3 bg-[#FF6F00]/10 rounded-xl border border-[#FF6F00]/20 min-w-[80px]">
                  <ShieldCheck className="text-[#FF6F00] mb-1" size={24} />
                  <span className="text-lg font-bold text-white">08:00</span>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FF6F00] text-white">
                      Sessão Conjunta
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#FF6F00] transition-colors leading-tight break-words">
                    Treinamento sobre LGPD
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] md:text-sm text-gray-400">
                    <span className="flex items-center gap-1.5 break-words">
                      <UserCheck size={14} className="shrink-0" />
                      Felipe Gomes (T.I Infra)
                    </span>
                    <span className="flex items-center gap-1.5 break-words">
                      <MapPin size={14} className="shrink-0" />
                      Auditório Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Track Selection */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-[10px] md:text-sm font-medium text-gray-400 uppercase tracking-widest text-center lg:text-left">Selecione sua equipe</h3>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 p-1 bg-black/20 rounded-xl border border-white/5 w-full">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id as any)}
                  className={`
                    relative flex flex-col lg:flex-row items-center lg:justify-start gap-1.5 lg:gap-3 py-3 px-1.5 lg:px-4 rounded-lg transition-all duration-300
                    ${activeTrack === track.id ? `${track.activeBg} border ${track.borderColor}` : 'hover:bg-white/5 border border-transparent'}
                  `}
                >
                  <track.icon size={18} className={`shrink-0 ${activeTrack === track.id ? track.color : 'text-gray-500'}`} />
                  <div className="flex flex-col items-center lg:items-start min-w-0">
                    <span className={`text-[8px] sm:text-[10px] lg:text-sm font-bold uppercase tracking-wider text-center lg:text-left break-words leading-tight ${activeTrack === track.id ? 'text-white' : 'text-gray-500'}`}>
                      {track.name}
                    </span>
                    {activeTrack === track.id && (
                      <span className={`text-[8px] lg:text-xs opacity-80 hidden md:block truncate ${track.color}`}>{track.theme}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Schedule List */}
        <div className="lg:col-span-7">
          <motion.div variants={itemVariants} className="glass rounded-2xl border border-white/10 overflow-hidden min-h-[400px] relative">
            <div className={`p-4 border-b border-white/5 flex items-center justify-between ${activeTrackInfo.activeBg}`}>
              <div className="flex items-center gap-3 min-w-0">
                <activeTrackInfo.icon className={`shrink-0 ${activeTrackInfo.color}`} size={20} />
                <div className="min-w-0">
                  <h4 className="font-bold text-white truncate">{activeTrackInfo.theme}</h4>
                  <p className="text-xs text-gray-400 truncate">{activeTrackInfo.name}</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {currentSchedule.map((item, idx) => {
                const id = `${activeTrack}-${item.time}`;
                const isCompleted = completedIds.has(id);

                return (
                  <div 
                    key={idx} 
                    onClick={() => !item.isBreak && toggleItem(id)}
                    className={`
                      relative p-4 flex items-start gap-4 transition-all duration-300 pl-12
                      ${item.isBreak ? 'bg-white/[0.02]' : 'hover:bg-white/[0.04] cursor-pointer'}
                      ${isCompleted ? 'opacity-50' : 'opacity-100'}
                    `}
                  >
                    {/* Timeline Dot - No line behind it */}
                    <div className={`absolute left-[28px] top-6 w-2 h-2 rounded-full border border-black z-10 transition-all duration-300 ${isCompleted ? 'bg-emerald-500' : item.isBreak ? 'bg-[#FF6F00]' : 'bg-gray-600'}`} />

                    <div className={`
                      mt-0.5 flex flex-col items-center gap-1 min-w-[45px] shrink-0
                      ${item.isBreak ? 'text-[#FF6F00]' : isCompleted ? 'text-emerald-500' : 'text-white'}
                    `}>
                      <span className="font-mono font-bold text-sm">{item.time}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h5 className={`
                        font-medium text-sm md:text-base mb-1 leading-tight break-words
                        ${isCompleted ? 'text-gray-400 line-through' : 'text-white'}
                        ${item.isBreak ? 'text-[#FF6F00] font-bold' : ''}
                      `}>
                        {item.label}
                      </h5>
                      {item.description && (
                        <div className="flex items-start gap-1.5 text-[11px] md:text-xs text-gray-500 leading-relaxed break-words">
                          {item.isBreak ? <MapPin size={10} className="mt-0.5 shrink-0" /> : <Clock size={10} className="mt-0.5 shrink-0" />}
                          <span>{item.description}</span>
                        </div>
                      )}
                    </div>

                    {!item.isBreak && (
                      <button className={`
                        shrink-0 transition-colors duration-300
                        ${isCompleted ? 'text-emerald-500' : 'text-gray-600 group-hover:text-gray-400'}
                      `}>
                        {isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dia04;
