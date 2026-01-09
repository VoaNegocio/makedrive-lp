import React from 'react';
import { ArrowRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const CTAFinal = () => {
    return (
        <section id="cta" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Pronto para organizar seus projetos do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">início ao fim?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Agende uma demonstração gratuita e veja como a MakeDrive elimina o retrabalho na sua engenharia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contato" className="btn-primary text-lg px-10 py-4 flex items-center justify-center gap-2 group shadow-xl shadow-brand-primary/25">
                        Quero organizar meus projetos
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <WhatsAppButton
                        label="Falar com consultor"
                        className="px-10 py-4 text-lg font-bold"
                    />
                </div>

                <p className="mt-6 text-sm text-slate-500">
                    Sem compromisso. Teste gratuito de 14 dias disponível.
                </p>
            </div>
        </section>
    );
};

export default CTAFinal;
