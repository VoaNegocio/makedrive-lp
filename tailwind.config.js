/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0B1221', // Deep tech blue/black
                    primary: '#1A56DB', // Professional Blue
                    secondary: '#0EA5E9', // Tech Cyan/Sky for accents
                    light: '#F8FAFC', // Slate 50 for content backgrounds
                    gray: '#94A3B8', // Slate 400 for secondary text
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'], // For tech/code elements
            },
            animation: {
                'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2.5s infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'scroll-left': 'scroll-left 20s linear infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'scroll-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            backgroundImage: {
                'tech-grid': "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            },
            boxShadow: {
                'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
                'glow-lg': '0 0 30px rgba(37, 99, 235, 0.6)',
            }
        },
    },
    plugins: [],
}
