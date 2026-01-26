import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({
    phoneNumber = '5511947167827',
    message = 'Olá! Gostaria de saber mais sobre o MAKEPRO.',
    label = 'Falar no WhatsApp',
    className = '',
    variant = 'primary'
}) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-lg";
    const variants = {
        primary: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40",
        outline: "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10",
        ghost: "text-[#25D366] hover:bg-[#25D366]/10"
    };

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <MessageCircle size={20} />
            {label}
        </a>
    );
};

export default WhatsAppButton;
