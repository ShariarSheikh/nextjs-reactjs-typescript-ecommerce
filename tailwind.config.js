module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    // eslint-disable-next-line global-require
    plugins: [require('@tailwindcss/line-clamp')],
}
