
import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const Palestrantes: React.FC = () => {
  // Lista de palestrantes
  const speakers = [
    {
      name: 'Robson Gramacho',
      role: 'Diretor de Gente e Gestão',
      image: 'https://iili.io/fbsqMe2.md.jpg',
      bio: 'Diretor de Gente & Gestão com sólida experiência em desenvolvimento organizacional e liderança de equipes, conduzirá o encontro trazendo insights práticos sobre temas diversos de RH, cultura, engajamento e gestão de pessoas.',
      linkedinUrl: 'https://www.linkedin.com/in/robson-gramacho-07859427/'
    },
    {
      name: 'William Mazza',
      role: 'Especialista em Inteligência Artificial',
      image: 'https://i.ibb.co/tptY1zPR/William-Mazza.jpg',
      bio: 'Especialista em inovação e transformation organizacional, atua na aplicação prática da inteligência artificial no RH, apoiando decisões mais estratégicas, processos mais eficientes e uma gestão de pessoas orientada por dados.',
      linkedinUrl: 'https://www.linkedin.com/in/engenheiromazza/?locale=pt_BR'
    },
    {
      name: 'Cosme Péres',
      role: 'Especialista em Comunicação',
      image: 'https://i.ibb.co/Sw7ZppTw/Cosme-P-res.jpg',
      bio: 'Psicólogo e especialista em gestão de pessoas, atua no desenvolvimento de profissionais por meio de uma comunicação clara, empática e estratégica, fortalecendo relações, alinhamento e resultados no ambiente corporativo.',
      linkedinUrl: 'https://www.linkedin.com/in/cosmep%C3%A9res/'
    },
    {
      name: 'Dr. Renan Silva',
      role: 'Advogado',
      image: 'https://iili.io/fbsYhfR.md.webp',
      bio: 'Responsável por atuar como principal ponto focal para assuntos jurídicos junto ao time de Gente e Gestão, trará orientações e reflexões sobre aspectos legais relevantes na atuação da área, apoiando decisões mais seguras e alinhadas à legislação.',
      linkedinUrl: 'https://www.linkedin.com/in/renan-da-silva-pereira-64b664b3/'
    },
    
    {
      name: 'Renan de Paulo',
      role: 'Gestor Corporativo de SSMA',
      image: 'https://i.ibb.co/C5rn9h4G/Renan-de-Paulo.jpg',
      bio: 'Gestor de SSMA, fará a abertura do tema sobre a NR-01, trazendo o contexto e os principais pontos da norma',
      linkedinUrl: 'https://www.linkedin.com/in/renan-de-paulo-70bba3188/'
    },
    {
      name: 'Alessandra Fonseca',
      role: 'Analista de SSMA',
      image: 'https://i.ibb.co/SDDDGwq2/Alessandra-Fonseca.jpg',
      bio: 'Membro do time de SSMA, abordará os detalhes e aplicações práticas da NR-01, aprofundando os pontos essenciais da norma e suas implicações para a rotina de trabalho.',
      linkedinUrl: 'https://www.linkedin.com/in/alessandra-fonseca-soares-braga-2a8186123/'
    },
    {
      name: 'Lucas Haryson',
      role: 'Analista de Endomarketing',
      image: 'https://i.ibb.co/9mxtZS1Z/1740169131608.jpg',
      bio: 'Analista de endomarketing, falará sobre a nova identidade visual da Fortlev, compartilhando perspectivas sobre a evolução da marca e sua conexão com a experiência interna.',
      linkedinUrl: 'https://www.linkedin.com/in/lucas-haryson-schulz-7a82b9177/'
    },
    {
      name: 'Rogério Dória',
      role: 'Especialista em Marketing',
      image: 'https://i.ibb.co/G4LDf5Jg/Rog-rio-D-ria.jpg',
      bio: 'Profissional com experiência em branding e comunicação visual, falará ao lado do Lucas Haryson sobre a nova identidade visual da Fortlev, compartilhando o processo e os elementos essenciais da atualização da marca.',
      linkedinUrl: 'https://www.linkedin.com/in/rogeriodoria/'
    },
    {
      name: 'Luiz Goessler',
      role: 'Mestre em Engenharia de Produção',
      image: 'https://i.ibb.co/TBjRjJ5Q/Luiz-Gossler.jpg',
      bio: 'Especialista em inovação e transformação organizacional, abordará Inovação Estratégica, trazendo insights práticos para impulsionar a performance de equipes e processos por meio de abordagens ágeis e orientadas a resultados.',
      linkedinUrl: 'https://www.linkedin.com/in/luiz-goessler/'
    },
    {
      name: 'Frederico Steiner',
      role: 'Head de Soluções Corporativas',
      image: 'https://i.ibb.co/qM1nMK9F/Frederico-Steiner.jpg',
      bio: 'Profissional com experiência em gestão estratégica, falará sobre Balanced Scorecard (BSC), compartilhando abordagens que conectam objetivos organizacionais e desempenho para orientar resultados mais consistentes.',
      linkedinUrl: 'https://www.linkedin.com/in/frederico-steiner-392342/'
    },
    {
      name: 'Laís Mozer',
      role: 'Especialista em RH',
      image: 'https://i.ibb.co/RpbLbvwD/Lais-Mozer.jpg',
      bio: 'Especialista em recursos humanos e desenvolvimento organizacional, conduzirá um momento do treinamento articulando conceitos que fortalecem a atuação da equipe de Instalações e Serviços em seus desafios cotidianos.',
      linkedinUrl: 'https://www.linkedin.com/in/la%C3%ADs-mozer-santos-rafael-24753920/'
    },
    {
      name: 'A definir',
      role: 'Palestrante Convidado - SSMA',
      image: 'https://picsum.photos/seed/spk8/400/400',
      bio: 'Sustentabilidade e propósito nas organizações.',
      linkedinUrl: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pb-10"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl font-bold font-display text-[#FF6F00]">Time de Especialistas</h2>
        <p className="text-gray-400 mt-2 uppercase tracking-[0.2em] text-sm">Pessoas que estão moldando o futuro conosco</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {speakers.map((s, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="group relative glass p-6 rounded-[2rem] text-center hover:neon-border border-2 border-transparent transition-all duration-500 flex flex-col items-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#FF6F00]/30 p-1 group-hover:scale-110 transition-transform">
                <img 
                    src={s.image} 
                    alt={s.name} 
                    className={`w-full h-full object-cover rounded-full transition-all duration-700 ${s.name === 'A definir' ? 'grayscale opacity-50' : 'grayscale-0 group-hover:brightness-110'}`}
                />
            </div>
            
            <h3 className="text-xl font-bold text-white group-hover:text-[#FF6F00] transition-colors">{s.name}</h3>
            <p className="text-[#FF6F00] text-xs font-bold uppercase tracking-widest mb-4">{s.role}</p>
            <p className="text-gray-400 text-sm italic leading-relaxed mb-6">{s.bio}</p>

            <div className={`mt-auto w-full flex justify-center transition-all duration-500 ${s.name === 'A definir' || s.linkedinUrl === '#' ? 'opacity-20 grayscale pointer-events-none' : 'opacity-100'}`}>
                <a 
                  href={s.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#FF6F00] text-white shadow-[0_4px_15px_rgba(255,111,0,0.3)] hover:shadow-[0_8px_25px_rgba(255,111,0,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Linkedin size={18} className="text-white" />
                  <span className="text-[11px] font-black uppercase tracking-widest"> LinkedIn</span>
                </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Palestrantes;
