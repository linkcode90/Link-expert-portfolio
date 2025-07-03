import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced warm color palette
				warm: {
					brown: 'hsl(var(--warm-brown))',
					gold: 'hsl(var(--warm-gold))',
					'gold-light': 'hsl(var(--warm-gold-light))',
					'gold-dark': 'hsl(var(--warm-gold-dark))',
					neutral: 'hsl(var(--warm-neutral))',
					gray: 'hsl(var(--warm-gray))',
					black: 'hsl(var(--warm-black))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1.5rem',
				'3xl': '2rem'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Poppins', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'2xs': '0.625rem',
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '8rem'
			},
			backdropBlur: {
				'xs': '2px',
				'4xl': '72px'
			},
			boxShadow: {
				'warm': '0 4px 14px 0 rgba(251, 191, 36, 0.15)',
				'warm-lg': '0 10px 40px rgba(251, 191, 36, 0.2)',
				'warm-xl': '0 20px 50px rgba(251, 191, 36, 0.25)',
				'inner-warm': 'inset 0 2px 4px 0 rgba(251, 191, 36, 0.06)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
				'neo': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
				'neo-inset': 'inset 8px 8px 16px #d1d1d1, inset -8px -8px 16px #ffffff'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Enhanced custom animations
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-40px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px) rotate(-2deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotate(0deg)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px) rotate(2deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotate(0deg)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.7) rotate(-5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.2) rotate(-10deg)'
					},
					'40%': {
						opacity: '1',
						transform: 'scale(1.1) rotate(2deg)'
					},
					'70%': {
						transform: 'scale(0.95) rotate(-1deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(-20px) rotate(-1deg)' }
				},
				'pulse-gentle': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.02)', opacity: '0.9' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'fade-in-down': 'fade-in-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'bounce-in': 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out infinite 2s',
				'pulse-gentle': 'pulse-gentle 4s ease-in-out infinite'
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'elastic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
