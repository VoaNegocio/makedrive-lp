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
    ];

    return (
        <header
            className="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200 py-2"
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <img src="/logos-empresas/logos-maker/makepro-logo-icon.png" alt="MAKEPRO" className="h-14 md:h-16 w-auto object-contain transform scale-[2.0] origin-left ml-4" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-brand-primary after:transition-all hover:after:w-full text-slate-600 hover:text-brand-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contato"
                            className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all backdrop-blur-sm bg-brand-primary text-white hover:bg-brand-dark shadow-md"
                        >
                            Agendar Demo
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-xl">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-brand-primary py-2 block border-b border-slate-100"
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
