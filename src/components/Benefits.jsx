import React, { useState, useRef } from 'react';
import { BrainCircuit, FolderGit2, Users, CalendarClock, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

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

    // Comparator Section State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const comparatorImages = [
        '/imgs/comparator-1.png',
        '/imgs/comparator-2.png'
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % comparatorImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + comparatorImages.length) % comparatorImages.length);
    };

    // Swipe Logic
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextImage();
        } else if (isRightSwipe) {
            prevImage();
        }
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
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

                {/* New Feature Highlight Section: Comparador de Projetos */}
                <div className="mb-16 md:mb-20 bg-brand-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden relative text-white">
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">

                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                Comparador de Projetos
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Comparação de projetos com sobreposição de plantas. Compare plantas da mesma disciplina ou de diferentes disciplinas.
                                Ajuste cores, transparência, posição e escala. Crie apontamentos diretamente sobre as comparações feitas e salve suas
                                sobreposições para compartilhar ou usar depois.
                            </p>

                        </div>

                        <div className="relative">
                            {/* Carousel Container */}
                            <div
                                className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group touch-pan-y"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                <img
                                    src={comparatorImages[currentImageIndex]}
                                    alt={`Interface do Comparador de Projetos - Tela ${currentImageIndex + 1}`}
                                    className="w-full h-auto object-cover cursor-zoom-in transition-transform duration-500"
                                    onClick={() => setIsModalOpen(true)}
                                />

                                {/* Overlay / Zoom Hint */}
                                <div
                                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center cursor-zoom-in"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 bg-black/60 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        <ZoomIn size={18} />
                                        <span className="text-sm font-medium">Ampliar</span>
                                    </div>
                                </div>

                                {/* Navigation Controls */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-primary text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                                    aria-label="Imagem anterior"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-primary text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                                    aria-label="Próxima imagem"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {comparatorImages.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-brand-primary w-6' : 'bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>

                {/* Full Screen Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setIsModalOpen(false)}>
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X size={40} />
                        </button>

                        <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                            <img
                                src={comparatorImages[currentImageIndex]}
                                alt={`Interface do Comparador de Projetos - Tela ${currentImageIndex + 1}`}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />

                            {/* Modal Navigation */}
                            <button
                                onClick={prevImage}
                                className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
                            >
                                <ChevronLeft size={48} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
                            >
                                <ChevronRight size={48} />
                            </button>
                        </div>
                    </div>
                )}

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
