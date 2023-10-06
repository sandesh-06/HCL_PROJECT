/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     backgroundImage: {
//       'login-image': "url('../src/images/loginEmp.jpg')",
//       'gradient-sky-indigo': 'linear-gradient(to right, #87CEFA, #4B0082)',
//       // Add more custom backgrounds as needed
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',   "./node_modules/flowbite/**/*.js", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    backgroundImage: {
      'login-image': "url(https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGl0JTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60)",
      'hero-pattern':"url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      'gradient-sky-indigo': 'linear-gradient(to right, #87CEFA, #4B0082)',
      // Add more custom backgrounds as needed
    },
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      fontFamily:{
        Mooli: ['Mooli', 'sans'],
        Quicksand: ['Quicksand', 'sans'],
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
};