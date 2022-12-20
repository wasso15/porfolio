/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'LineTech': "url('https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671543251/My_Website/Line-tech_stfvdb.png')",
      },
    },
  },
  plugins: [],
}