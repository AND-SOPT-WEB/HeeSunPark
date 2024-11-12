/** @type {import('tailwindcss').Config} */

import colors from './src/styles/colors';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.softblue,
        secondary: colors.mediumblue,
        point: colors.darkblue,
        textPrimary: colors.black,
        textSecondary: colors.gray,
        textPoint: colors.blue,
        inactive: colors.gray,
        active: colors.mediumblue,
      },
      spacing: {
        '1': '0.25rem', // 4px
        '2': '0.5rem', // 8px
        '3': '0.75rem', // 12px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '8': '2rem', // 32px
        '10': '2.5rem', // 40px
        '12': '3rem', // 48px
      },
      fontSize: {
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
      },
    },
  },
  plugins: [],
};
