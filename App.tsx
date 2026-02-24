import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Info, 
  Mic,
  Sun,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TabId } from './types';
import Hero from './components/Hero';
import Orientacoes from './components/tabs/Orientacoes';
import Dia02 from './components/tabs/Dia02';
import Dia03 from './components/tabs/Dia03';
import Dia04 from './components/tabs/Dia04';
import Sertao from './components/tabs/Sertao';
import Palestrantes from './components/tabs/Palestrantes';

import { FORTLEV_LOGO_URL } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.ORIENTACOES);

  const tabs = [
    { id: TabId.ORIENTACOES, label: 'Orientações', icon: Info },
    { id: TabId.DIA02, label: '02/03 Seg', icon: Calendar },
    { id: TabId.DIA03, label: '03/03 Ter', icon: Calendar },
    { id: TabId.DIA04, label: '04/03 Qua', icon: Users },
    { id: TabId.SERTAO, label: 'Sertão', icon: Sun },
    { id: TabId.PALESTRANTES, label: 'Palestrantes', icon: Mic },
  ];

  return (
    <div className="min-h-screen bg-gradient-fortlev text-white pb-20 overflow-x-hidden font-prompt">
      <Hero />

      {/* Main Content Area - Negative margin to overlap with Hero for seamless integration */}
      <main className="w-full max-w-[1400px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        
        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-purple p-1.5 rounded-2xl flex overflow-x-auto max-w-full no-scrollbar shadow-2xl">
            {tabs.map((tab, idx) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-500 whitespace-nowrap flex-shrink-0
                  ${activeTab === tab.id 
                    ? 'bg-gradient-to-r from-[#FF6F00] to-[#FF8F00] text-white shadow-lg scale-105 font-bold' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                <tab.icon size={18} className={activeTab === tab.id ? 'animate-pulse' : ''} />
                <span className="text-[11px] md:text-xs uppercase tracking-wider font-prompt">{tab.label}</span>
                
                {/* Active Indicator Dot */}
                {activeTab === tab.id && (
                  <motion.span 
                    layoutId="activeTabDot"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-50" 
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content Container */}
        <div className="min-h-[300px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === TabId.ORIENTACOES && <Orientacoes />}
              {activeTab === TabId.DIA02 && <Dia02 onNavigate={setActiveTab} />}
              {activeTab === TabId.DIA03 && <Dia03 onNavigate={setActiveTab} />}
              {activeTab === TabId.DIA04 && <Dia04 onNavigate={setActiveTab} />}
              {activeTab === TabId.SERTAO && <Sertao />}
              {activeTab === TabId.PALESTRANTES && <Palestrantes />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="mt-20 py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm text-center flex flex-col items-center justify-center relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0630] to-transparent opacity-80 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <img 
            src={FORTLEV_LOGO_URL} 
            alt="Fortlev" 
            className="h-10 md:h-14 object-contain mb-6 opacity-80 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 mx-auto"
          />
          <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium font-prompt">
            Gente & Gestão 2026 • <span className="font-yellowtail text-[#FF6F00] text-sm md:text-base normal-case tracking-normal ml-1">O Futuro é Agora</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
