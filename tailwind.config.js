module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#2563EB',   // Blue
          secondary: '#10B981', // Green
          accent: '#FBBF24',    // Yellow
          neutral: '#374151',   // Dark gray
          background: '#F9FAFB' // Light gray
        },
        fontFamily: {
          sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
          heading: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }