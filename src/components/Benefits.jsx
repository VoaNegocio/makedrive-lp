import React, { useState, useRef } from 'react';
import { BrainCircuit, FolderGit2, Users, CalendarClock } from 'lucide-react';

const benefits = [
    {
        icon: <BrainCircuit size={32} />,
        title: "Comparação Inteligente",
        description: "Visualize alterações entre disciplinas com clareza — sem precisar abrir vários arquivos ao mesmo tempo. Adeus ao \"o que mudou?\"."
    },
    {
        icon: <FolderGit2 size={32} />,
        title: "Central de Documentos",
        description: "Organizada por etapa, disciplina e projeto. Nunca mais perca tempo procurando \"a última versão\" em e-mails antigos."
    },
    {
        icon: <Users size={32} />,
        title: "Comunicação Rastreável",
        description: "Mensagens, decisões e arquivos concentrados em um único lugar. Histórico completo para projetistas, engenheiros e clientes."
    },
    {
        icon: <CalendarClock size={32} />,
        title: "Gestão de Prazos",
        description: "Cronograma estruturado com alertas de entrega técnica. Evite surpresas e mantenha o projeto no ritmo certo."
    }
];

const Benefits = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        // Calculate active index based on scroll position + half width offset for centering
        const index = Math.round(scrollPosition / width);
        setActiveIndex(Math.min(Math.max(0, index), benefits.length - 1));
    };

    return (
        <section id="beneficios" className="py-24 bg-brand-light text-brand-dark">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Transforme o <span className="text-brand-primary">caos técnico</span> em fluxo organizado
                    </h2>
                    <p className="text-slate-600 text-lg">
                        A MakeDrive elimina os gargalos que atrasam obras e geram prejuízos por falta de compatibilização.
                    </p>
                </div>

                {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 px-4 -mx-4 md:px-0 md:mx-0 hide-scrollbar"
                >
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="group min-w-[300px] md:min-w-0 snap-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-primary/20 relative overflow-hidden flex flex-col"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex-1">
                                <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-brand-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Dots Indicator */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    {benefits.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (scrollRef.current) {
                                    const width = scrollRef.current.offsetWidth;
                                    scrollRef.current.scrollTo({
                                        left: index * width, // Scroll to approximately the right place (simplified) or use element offset
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? 'w-8 bg-brand-primary'
                                    : 'w-2 bg-slate-300'
                                }`}
                            aria-label={`Ir para benefício ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
