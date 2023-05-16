/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./parts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        reguler: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
        active: "4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff",

        reguler2: "0 10px 20px rgba(0, 0, 0, 0.2)",
        active2: "0 5px 10px rgba(0, 0, 0, 0.2)",
      },
      dropShadow: {
        reguler:
          "1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2",
        active: "-16px 6px 15px #ced0d3",
      },
      keyframes: {
        scaleUp4: {
          "20%": { background: "#ffff", transform: "scaleY(1.5)" },
          "40%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};
