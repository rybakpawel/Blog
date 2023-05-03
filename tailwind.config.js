/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#105775',
                secondary: '#23B6F5',
                black: '#1A1D1E',
                error: '#C23508',
                success: '#11C235'
            },
            fontSize: {
                'xs': '10px',
                'sm': '13px',
                'base': '16px',
                'lg': '20px',
                'xl': '25px',
                '2xl': '31px',
                '3xl': '39px',
                '4xl': '49px',
            },
        },
    },
    plugins: [],
}
