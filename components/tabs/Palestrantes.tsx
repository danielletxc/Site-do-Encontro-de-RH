
import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const Palestrantes: React.FC = () => {
  // Lista de palestrantes
  const speakers = {
    '02/03': [
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
        image: 'https://i.ibb.co/TD4TDZxf/Dr-Renan-Silva.jpg',
        bio: 'Responsável por atuar como principal ponto focal para assuntos jurídicos junto ao time de Gente e Gestão, trará orientações e reflexões sobre aspectos legais relevantes na atuação da área, apoiando decisões mais seguras e alinhadas à legislação.',
        linkedinUrl: 'https://www.linkedin.com/in/renan-da-silva-pereira-64b664b3/'
      },
    ],
    '03/03': [
      {
        name: 'Frederico Steiner',
        role: 'Head de Soluções Corporativas',
        image: 'https://i.ibb.co/qM1nMK9F/Frederico-Steiner.jpg',
        bio: 'Profissional com experiência em gestão estratégica, falará sobre Balanced Scorecard (BSC), compartilhando abordagens que conectam objetivos organizacionais e desempenho para orientar resultados mais consistentes.',
        linkedinUrl: 'https://www.linkedin.com/in/frederico-steiner-392342/'
      },
      {
        name: 'Ingryd Rodrigues',
        role: 'Especialista em Ergonomia e gestão de saúde',
        image: 'https://i.ibb.co/0V6JZrtt/Ingrid.jpg',
        bio: 'Analista de saúde ocupacional focada na aplicação estratégica da NR 1 e metodologias ergonômicas. Atua no desdobramento de indicadores de Macroergonomia e ESG, integrando dados técnicos à gestão de pessoas para apoiar decisões que promovam o bem-estar e a eficiência operacional.',
        linkedinUrl: 'https://www.linkedin.com/in/ingryd-nascimento-rodrigues-b2617157/'
      },
      {
        name: 'Lucas Haryson',
        role: 'Analista de Endomarketing - CORP',
        image: 'https://i.ibb.co/9mxtZS1Z/1740169131608.jpg',
        bio: 'Analista de endomarketing, falará sobre a nova identidade visual da Fortlev, compartilhando perspectivas sobre a evolução da marca e sua conexão com a experiência interna.',
        linkedinUrl: 'https://www.linkedin.com/in/lucas-haryson-schulz-7a82b9177/'
      },
      {
        name: 'Rogério Dória',
        role: 'Especialista em Marketing - CORP',
        image: 'https://i.ibb.co/G4LDf5Jg/Rog-rio-D-ria.jpg',
        bio: 'Profissional com experiência em branding e comunicação visual, falará ao lado do Lucas Haryson sobre a nova identidade visual da Fortlev, compartilhando o processo e os elementos essenciais da atualização da marca.',
        linkedinUrl: 'https://www.linkedin.com/in/rogeriodoria/'
      },
    ],
    '04/03': {
      'Performance': [
        {
          name: 'Luiz Goessler',
          role: 'Mestre em Engenharia de Produção',
          image: 'https://i.ibb.co/TBjRjJ5Q/Luiz-Gossler.jpg',
          bio: 'Especialista em inovação e transformação organizacional, abordará Inovação Estratégica, trazendo insights práticos para impulsionar a performance de equipes e processos por meio de abordagens ágeis e orientadas a resultados.',
          linkedinUrl: 'https://www.linkedin.com/in/luiz-goessler/'
        },
      ],
      'Instalações e Serviços': [
        {
          name: 'Laís Mozer',
          role: 'Especialista em RH - CORP',
          image: 'https://i.ibb.co/RpbLbvwD/Lais-Mozer.jpg',
          bio: 'Especialista em recursos humanos e desenvolvimento organizacional, conduzirá um momento do treinamento articulando conceitos que fortalecem a atuação da equipe de Instalações e Serviços em seus desafios cotidianos.',
          linkedinUrl: 'https://www.linkedin.com/in/la%C3%ADs-mozer-santos-rafael-24753920/'
        },
        {
          name: 'Victoria Carolina',
          role: 'Analista Administrativo - IS',
          image: 'https://i.ibb.co/vxVk1ddn/Victoria-Carolina.jpg',
          bio: 'Colaboradora da área de Instalações e Serviços, falará ao lado de Laís sobre gestão de rotina, trazendo contribuições práticas para o fortalecimento das atividades e dos processos diários da equipe.',
          linkedinUrl: 'https://www.linkedin.com/in/victoria-carolina-amorim-310aba1b4/'
        },
      ],
      'SSMA': [
        {
          name: 'Heloísa Guimarães',
          role: 'Especialista em Gestão de Rotina',
          image: 'https://i.ibb.co/3yzXfG1x/Helo-sa-Guimar-es.png',
          bio: 'Profissional de SSMA com sólida atuação em gestão de rotina, falará sobre comportamento e protagonismo do profissional de SSMA, oferecendo perspectivas práticas para fortalecer a atuação da equipe no dia a dia. aplicações práticas da NR-01, aprofundando os pontos essenciais da norma e suas implicações para a rotina de trabalho.',
          linkedinUrl: 'https://www.linkedin.com/in/heloisa-guimar%C3%A3es/'
        },
        {
          name: 'Fernando Carlini',
          role: 'Consultor em SSMA',
          image: 'https://i.ibb.co/SwYv2HHk/Fernando-Carlini.jpg',
          bio: 'Técnico em Segurança do Trabalho e consultor em HSE, trará sua experiência em análises técnicas com foco em resultados, conectando práticas de higiene ocupacional e melhorias na performance das operações.',
          linkedinUrl: 'https://www.linkedin.com/in/fernando-carlini-961979143/'
        },
        {
          name: 'Mathiello Carlos',
          role: 'Analista de SSMA - CORP',
          image: 'https://i.ibb.co/XnDXrCh/Mathiello-Carlos.jpg',
          bio: 'Membro do time de SSMA, abordará investigação de acidentes, compartilhando sua experiência prática para fortalecer a compreensão e aplicação desse processo no ambiente de trabalho.',
          linkedinUrl: 'https://www.linkedin.com/in/mathiellocarlos/'
        },
      ],
    },
  };

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

      {Object.entries(speakers).map(([day, daySpeakers]) => (
        <div key={day} className="mb-12">
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Dia {day}
          </motion.h3>
          {Array.isArray(daySpeakers) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
              {daySpeakers.map((s, idx) => (
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
          ) : (
            <div className="space-y-8">
              {Object.entries(daySpeakers as Record<string, any[]>).map(([team, teamSpeakers]) => (
                <div key={team} className="mb-8">
                  <motion.h4 variants={itemVariants} className="text-xl md:text-2xl font-bold text-gray-300 text-center mb-6">
                    {team}
                  </motion.h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
                    {teamSpeakers.map((s, idx) => (
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
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      </div>
    </motion.div>
  );
};

export default Palestrantes;
