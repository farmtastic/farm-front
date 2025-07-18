/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        card: '62px',
        contentsCard: '2.344vw',
        graphT: '2.2rem',
        graphB: '1.2rem',
      },
      padding: {
        contentsCard: '1px',
        '45px': '45px',
        latestT: '2.5rem',
        latestL: '15rem',
      },
      borderColor: {
        card: '#A1A1A1',
      },
      borderRadius: {
        contentsCard: '10px',
        card: '30px',
      },
      colors: {
        BackgroundColor: '#11111C',
        ContentsColor: '#1C1C2A',
        LightContentsColor: '#191A27',
        ModalSmText: '#7f7f7f',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        drawer: '#F9FAFB',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      minHeight: {
        main: '854px',
        article: '1480px',
      },
      width: {
        rightSection: '40%',
        leftSection: '60%',
        divider: '2px',
        210: '14.583vw',
        722: '722px',
        graph: '505px',
        drawer: '500px',
      },
      height: {
        header: '170px',
        sensor: '420px',
        210: '280px',
        140: '140px',
        graph: '250px',
        drawerList: '100px',
      },
      fontSize: {
        header: '64px',
        articleTitle: '2.344vw',
      },
      flex: {
        4: '4 4 0%',
        6: '6 6 0%',
      },
      keyframes: {
        'spin-once': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-once': 'spin-once 1s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
