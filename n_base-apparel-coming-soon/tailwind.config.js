const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				customPink: '#ce9797',
				customTomato: '#f96262',
				customGrayishRed: '#413a3a',
			},
			backgroundImage: {
				'custom-linear-white': 'linear-gradient(to right bottom, rgba(255,255,255,1) 0%, rgba(255,245,245,1) 100%);',
				'custom-linear-tomato': 'linear-gradient(to right bottom, rgba(248,191,191,1) 0%, rgba(238,140,140,1) 100%);',
				'pattern-desktop': 'url("../images/bg-pattern-desktop.svg")',
				'hero-mobile': 'url("../images/hero-mobile.jpg")',
				'hero-desktop': 'url("../images/hero-desktop.jpg")',
			},
			fontFamily: {
				josefin: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				...defaultTheme.screens,
			},
			screens: {
				xs: '475px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
