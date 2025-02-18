/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        "border-tl": "border-tl 4s infinite",
        "border-tr": "border-tr 4s infinite",
        "border-bl": "border-bl 4s infinite",
        "border-br": "border-br 4s infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "slide-down": "slide-down 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "border-tl": {
          "0%, 100%": {
            top: "0%",
            left: "0%",
          },
          "25%": {
            top: "0%",
            left: "100%",
          },
          "50%": {
            top: "100%",
            left: "100%",
          },
          "75%": {
            top: "100%",
            left: "0%",
          },
        },
        "border-tr": {
          "0%, 100%": {
            top: "0%",
            right: "0%",
          },
          "25%": {
            top: "100%",
            right: "0%",
          },
          "50%": {
            top: "100%",
            right: "100%",
          },
          "75%": {
            top: "0%",
            right: "100%",
          },
        },
        "border-bl": {
          "0%, 100%": {
            bottom: "0%",
            left: "0%",
          },
          "25%": {
            bottom: "100%",
            left: "0%",
          },
          "50%": {
            bottom: "100%",
            left: "100%",
          },
          "75%": {
            bottom: "0%",
            left: "100%",
          },
        },
        "border-br": {
          "0%, 100%": {
            bottom: "0%",
            right: "0%",
          },
          "25%": {
            bottom: "0%",
            right: "100%",
          },
          "50%": {
            bottom: "100%",
            right: "100%",
          },
          "75%": {
            bottom: "100%",
            right: "0%",
          },
        },
        "border-glow": {
          "0%, 100%": {
            "box-shadow": "0 0 0 0 rgba(59, 130, 246, 0.5)",
            "border-color": "rgba(59, 130, 246, 0.1)",
          },
          "50%": {
            "box-shadow": "0 0 20px 4px rgba(59, 130, 246, 0.3)",
            "border-color": "rgba(59, 130, 246, 0.4)",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-10%)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
