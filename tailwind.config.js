/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 基础色板全部走 CSS 变量（:root 亮色 / .dark 暗色），与参考讲义一致
        paper: 'var(--paper)',
        panel: 'var(--panel)',
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--muted)',
          faint: 'var(--faint)',
        },
        line: 'var(--line)',
        gold: 'var(--gold)',
      },
      fontFamily: {
        // 宋体标题 + 苹方正文（与参考文件一致）
        serif: ['"Songti SC"', 'STSong', 'Georgia', '"Times New Roman"', 'serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Source Han Sans SC"',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
