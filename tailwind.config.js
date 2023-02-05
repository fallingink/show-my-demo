module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  prefix:"tw-",
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["winter", "black"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "black",
    prefix:"dy-",
  },
}
