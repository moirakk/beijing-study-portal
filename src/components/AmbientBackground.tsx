/**
 * 环境光层：固定在视口底层的两个柔和光晕，缓慢漂移营造空间感。
 * 纯 CSS 动画（transform only），pointer-events: none 不影响交互。
 */
export default function AmbientBackground() {
  return (
    <div className="ambient-layer" aria-hidden="true">
      <div className="ambient-orb ambient-orb--a" />
      <div className="ambient-orb ambient-orb--b" />
      <div 
        className="absolute inset-0 z-[-1] opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 10C41 10 50 19 50 30H38C38 25.6 34.4 22 30 22C25.6 22 22 25.6 22 30H10C10 19 19 10 30 10ZM30 50C19 50 10 41 10 30H22C22 34.4 25.6 38 30 38C34.4 38 38 34.4 38 30H50C50 41 41 50 30 50ZM30 34C27.8 34 26 32.2 26 30C26 27.8 27.8 26 30 26C32.2 26 34 27.8 34 30C34 32.2 32.2 34 30 34Z' fill='%23000'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundPosition: 'center',
        }}
      />
    </div>
  )
}
