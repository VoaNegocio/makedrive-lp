import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const SocialProof = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projectImages = [
        '/imgs/flow-1.png',
        '/imgs/flow-2.png'
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    };
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
    const logos = [
        { name: 'Prolux', src: '/logos-empresas/logos-empresas/prolux-logo.png' },
        { name: 'MAC', src: '/logos-empresas/logos-empresas/logo-mac.jpg' },
        { name: 'Vuny', src: '/logos-empresas/logos-empresas/logo-vuny.png' },
        { name: 'VFO', src: '/logos-empresas/logos-empresas/vfo-logo.webp' },
        { name: 'Fort', src: '/logos-empresas/logos-empresas/fortrealestatemanagement_logo.jpeg' }
    ];

    return (
        <section id="prova-social" className="py-20 bg-white border-t border-slate-100">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                        MAIS DE 3.000.000 m² PROJETADOS
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
                        Empresas que confiam na nossa tecnologia
                    </h2>
                </div>

                {/* Logos Grid */}
                {/* Infinite Carousel Container */}
                <div className="relative w-full overflow-hidden mb-20 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
                        {/* Original Set */}
                        <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                            {logos.map((logo, index) => (
                                <div key={`orig-${index}`} className="flex items-center justify-center">
                                    <img
                                        src={logo.src}
                                        alt={`Logo ${logo.name}`}
                                        className="h-12 md:h-16 w-auto object-contain mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate Set for Seamless Loop */}
                        <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                            {logos.map((logo, index) => (
                                <div key={`dup-${index}`} className="flex items-center justify-center">
                                    <img
                                        src={logo.src}
                                        alt={`Logo ${logo.name}`}
                                        className="h-12 md:h-16 w-auto object-contain mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                {/* New Feature Highlight Section: Fluxo de Projetos */}
                <div className="max-w-7xl mx-auto bg-brand-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden relative text-white">
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Text Content */}
                        <div className="space-y-6 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold tracking-wide uppercase">
                                Gestão Inteligente
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                Fluxo de Projetos
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Programe seus projetos com todos os entregáveis e vinculando as dependências.
                                O cronograma é automaticamente montado a partir dos entregáveis vinculados.
                                Atribua a cada entregável prazo, escopo e responsável.
                            </p>
                        </div>

                        {/* Carousel & Modal Section */}
                        <div className="relative order-1 lg:order-2">
                            {/* Carousel Container */}
                            <div
                                className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group touch-pan-y"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                <img
                                    src={projectImages[currentImageIndex]}
                                    alt={`Interface de Fluxo de Projetos - Tela ${currentImageIndex + 1}`}
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
                                    {projectImages.map((_, idx) => (
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
                                src={projectImages[currentImageIndex]}
                                alt={`Interface de Fluxo de Projetos - Tela ${currentImageIndex + 1}`}
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
            </div>
        </section>
    );
};

export default SocialProof;
