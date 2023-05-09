/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    fonFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Open Sans'],
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#111827',
        secondary : '#64748b',
        dark : '#0f172a',
      }, 
      screens : {
        '2xl' : '1320px',
      } ,
    },
  },
  plugins: [],
}
