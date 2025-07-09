/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html', // ✅ Vite의 루트 HTML
        './src/**/*.{js,ts,jsx,tsx}', // ✅ src 내부의 모든 컴포넌트
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
