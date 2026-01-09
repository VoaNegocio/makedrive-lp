import React from 'react';
import { ArrowRight, FileText, Layers, Share2 } from 'lucide-react';
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
                        <a href="#demo" className="px-8 py-3 rounded-lg border border-white/10 hover:border-white/30 text-white font-medium transition-all hover:bg-white/5 flex items-center justify-center">
                            Ver demonstração
                        </a>
                    </div>



                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
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
                <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
                    <div className="relative w-full max-w-lg aspect-[4/3] bg-brand-dark/50 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-x-[2deg] transition-all duration-700 group">

                        {/* Window Controls */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 rounded-t-xl flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>

                        {/* Mockup Content - Abstract UI */}
                        <div className="p-6 pt-16 h-full flex flex-col gap-4">
                            {/* Header UI */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="h-4 w-32 bg-white/10 rounded"></div>
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 bg-brand-primary/20 rounded flex items-center justify-center">
                                        <Share2 size={16} className="text-brand-primary" />
                                    </div>
                                    <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center">
                                        <Layers size={16} className="text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Main Grid UI */}
                            <div className="flex-1 grid grid-cols-12 gap-4">
                                <div className="col-span-3 bg-white/5 rounded-lg p-3 space-y-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-2 w-full bg-white/10 rounded animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                                    ))}
                                </div>
                                <div className="col-span-9 bg-brand-dark/40 rounded-lg border border-white/5 relative overflow-hidden group-hover:border-brand-primary/30 transition-colors">
                                    {/* Blueprint Lines */}
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}></div>

                                    {/* Floating Elements */}
                                    <div className="absolute top-1/3 left-1/4 bg-brand-primary/90 text-white p-2 rounded shadow-lg text-xs transform translate-z-10 animate-float">
                                        <FileText size={12} className="inline mr-1" />
                                        Planta Térreo v2.pdf
                                    </div>

                                    <div className="absolute bottom-1/3 right-1/4 bg-brand-secondary/90 text-white p-2 rounded shadow-lg text-xs transform translate-z-20 animate-float delay-700">
                                        <Layers size={12} className="inline mr-1" />
                                        Compatibilização
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary/0 via-brand-primary/20 to-brand-secondary/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
