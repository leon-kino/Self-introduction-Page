module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'light-green': '#008c8d',
      'bgc-green': '#6bc2c3',
      'line-green': '#c5eaea',
      'white': '#ffffff',
      'sub-title': '#dcf4f6',
      'brack': '#384359',
      'bgc-skills': '#C6EAEA',
      'skills-bar': '#2BB9BB',
    },
    backgroundImage: {
      'about': 'url("/bg-about.png")',
      'skills': 'url("/bg-skills.png")',
    },
    extend: {},
  },
  plugins: [],
};
