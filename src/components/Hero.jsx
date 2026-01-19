import React from 'react';
import { ArrowRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-brand-dark z-0">
                <div className="absolute inset-0 bg-tech-grid opacity-20 animate-pulse-slow"></div>
                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[128px] animate-float delay-1000"></div>
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-xs font-semibold tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
                        Gestão de Projetos Técnicos
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                        Tecnologia pensada para quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">coordena projetos</span> e não pode perder prazos.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
                        Organize versões, compare plantas e centralize toda a comunicação do projeto — tudo em um único sistema.
                        Chega de planilhas e e-mails perdidos.
                    </p>

                    {/* Mobile Mockup */}
                    <div className="lg:hidden relative w-full flex items-center justify-center perspective-1000 pb-4 -mt-12">
                        <div className="relative w-full max-w-[380px] sm:max-w-lg transform rotate-y-[-6deg] rotate-x-[5deg] transition-all duration-700 animate-float">
                            <img
                                src="/mockup-macbook-software-makedrive-removebg-preview.png"
                                alt="Plataforma MAKEPRO"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                            <div className="absolute -inset-10 bg-brand-primary/20 blur-3xl rounded-full opacity-60 -z-10"></div>
                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <WhatsAppButton
                            className="btn-primary flex items-center justify-center gap-2 group text-white"
                            variant="primary"
                            label={
                                <>
                                    Agendar Demo via WhatsApp
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            }
                        />

                    </div>



                    <div className="pt-4 lg:pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-brand-dark flex items-center justify-center text-xs text-white font-bold">
                                    {['DK', 'JP', 'OA', 'MA'][i - 1]}
                                </div>
                            ))}
                        </div>
                        <p>Usado por equipes de engenharia de alta performance</p>
                    </div>
                </div>

                {/* Right Visual (Mockup) */}
                <div className="hidden lg:flex relative h-[600px] items-center justify-center perspective-1000">
                    <div className="relative w-full max-w-2xl transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-x-[2deg] transition-all duration-700 group animate-float">
                        <img
                            src="/mockup-macbook-software-makedrive-removebg-preview.png"
                            alt="Plataforma MAKEPRO"
                            className="w-full h-auto drop-shadow-2xl"
                        />

                        {/* Glow Effect */}
                        <div className="absolute -inset-10 bg-brand-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
