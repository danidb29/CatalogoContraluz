/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#C41230",
        yellow: "#EEB211",
        green: {
          400: "#00A96F",
          500: "#00704A",
        },
        lightGreen: "#5CDB5C",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

