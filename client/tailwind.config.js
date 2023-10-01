export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "demo-main-back": "#F8F9FB",
        "hover-on-navbar": "#FEF1F0",
      },
      backgroundImage: {
        "typetone-logo": "url('assets/img/logo.png')",
        "templates-icon": "url('assets/img/templates.png')",
      },
      screens: {
        min_sm: "640px",
        // => @media (min-width: 640px) { ... }

        min_md: "768px",
        // => @media (min-width: 768px) { ... }

        min_lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        min_xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        min_2xl: "1536px",
        // => @media (min-width: 1536px) { ... }
        max_2xl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        max_xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        max_lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        max_md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        max_sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
