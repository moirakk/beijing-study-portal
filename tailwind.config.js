/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 讲义风格基础色板：暖色纸张 + 白卡片 + 金色点缀
        paper: '#FBFAF7',
        card: '#FFFFFF',
        gold: {
          DEFAULT: '#C08A3E',
          light: '#E8D5B5',
          dark: '#9A6E2E',
        },
        ink: {
          DEFAULT: '#2B2A26',
          soft: '#6B6659',
          faint: '#9C968A',
        },
        line: '#EAE6DD',
        // 掌握状态四色
        mastery: {
          unlearned: '#9ca3af',
          learning: '#3b82f6',
          mastered: '#22c55e',
          review: '#f97316',
        },
        // 学科主题色（每个学科独立色系）
        subject: {
          chinese: '#B03A2E',
          math: '#2E5A9A',
          english: '#5B3A9A',
          physics: '#1F6F8B',
          chemistry: '#7A9A2E',
          biology: '#2E9A5B',
          politics: '#9A2E5B',
          history: '#9A5B2A',
          geography: '#16697A',
          misc: '#6B6659',
        },
      },
      fontFamily: {
        // 宋体标题 + 苹方正文
        serif: ['"Songti SC"', 'STSong', '"Noto Serif SC"', 'serif'],
        sans: [
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(43, 42, 38, 0.06), 0 4px 14px rgba(43, 42, 38, 0.04)',
      },
    },
  },
  plugins: [],
}
