import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Benefícios', href: '#beneficios' },
        { name: 'Quem confia', href: '#prova-social' },
        { name: 'Sobre', href: '#sobre' },
    ];

    return (
        <header
            className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="container-custom py-0">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <img src="/makerpro-logo-para-fundo-escuro.png" alt="MakeDrive" className="h-8 md:h-32 w-auto object-contain transform scale-150 origin-left" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-brand-primary after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contato"
                            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm"
                        >
                            Agendar Demo
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-4 border-t border-white/5">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white py-2 block border-b border-white/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contato"
                            className="mt-2 w-full text-center btn-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Agendar Demo
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
