import React from 'react';
import { Play } from 'lucide-react';

const SocialProof = () => {
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
                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video bg-brand-dark rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                        {/* Thumbnail Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <Play className="w-6 h-6 text-brand-primary ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-8">
                            <p className="text-white/80 text-sm font-medium mb-1">Depoimento</p>
                            <h3 className="text-white text-xl md:text-2xl font-bold">
                                "A MakeDrive reduziu nosso tempo de compatibilização em 40%."
                            </h3>
                            <p className="text-slate-300 mt-2">Eng. Roberto Almeida • Diretor Técnico na MAC</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
