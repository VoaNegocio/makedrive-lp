import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Footer = () => {
    return (
        <footer id="contato" className="bg-brand-dark border-t border-white/10 pt-20 pb-10">

            {/* Trust Badge Section - DRC Pro */}
            <div className="container-custom mb-20">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent border border-brand-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                            <img src="/logos-empresas/logos-maker/makepro-logo-icon.png" alt="MAKEPRO" className="w-20 h-auto object-contain" width="80" height="80" />
                        </div>
                        <div>
                            <p className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-1">Powered by DRC Pro</p>
                            <h3 className="text-2xl font-bold text-white mb-2">Engenharia real, software real.</h3>
                            <p className="text-slate-400 max-w-md">
                                A MAKEPRO nasceu dentro de uma empresa de engenharia com mais de 15 anos de experiência técnica.
                            </p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <div className="bg-brand-dark/50 px-6 py-3 rounded-lg border border-white/10 text-slate-300 text-sm">
                            🔒 Developed by Engineers for Engineers
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container-custom grid md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
                <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">

                    <p className="text-slate-400 mb-6 max-w-sm">
                        A plataforma definitiva para gestão e compatibilização de projetos técnicos.
                    </p>
                    <WhatsAppButton
                        label="Falar com consultor"
                        className="px-6 py-3 text-sm font-bold"
                    />

                </div>




            </div>

            <div className="container-custom text-center text-slate-600 text-sm">
                <p>&copy; {new Date().getFullYear()} MAKEPRO. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
