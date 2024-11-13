/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        'HankenGrotesk':['Hanken-Grotesk','sans-serif']
      },
      colors:{
        'Lightred': 'hsl(0, 100%, 67%)',
        'Lightred-alpha': 'hsla(0, 100%, 67%,0.2)',
        'Orangeyyellow': 'hsl(39, 100%, 56%)',
        'Orangeyyellow-alpha': 'hsla(39, 100%, 56%,0.2)',
        'Greenteal': 'hsl(166, 100%, 37%)',
        'Greenteal-alpha': 'hsla(166, 100%, 37%,0.2)',
        'Cobaltblue': 'hsl(234, 85%, 45%)',
        'Cobaltblue-alpha': 'hsla(234, 85%, 45%,0.2)',
        'Lightslateblue': 'hsl(252, 100%, 67%)',
        'Lightroyalblue': 'hsl(241, 81%, 54%)',
        'Violetblue': 'hsla(256, 72%, 46%, 1)',
        'Persianblue': 'hsla(241, 72%, 46%, 0)',
        'Paleblue': 'hsl(221, 100%, 96%)',
        'Lightlavender': 'hsl(241, 100%, 89%)',
        'Lightlavender-alpha': 'hsla(241, 100%, 89%,0.5)',
        'Darkgrayblue': 'hsl(224, 30%, 27%)',
        'Darkgrayblue-alpha': 'hsla(224, 30%, 27%,0.5)'
      }
    },
  },
  plugins: [],
}

