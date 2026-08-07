/**
 * 环境光层：固定在视口底层的两个柔和光晕，缓慢漂移营造空间感。
 * 纯 CSS 动画（transform only），pointer-events: none 不影响交互。
 */
export default function AmbientBackground() {
  return (
    <div className="ambient-layer" aria-hidden="true">
      <div className="ambient-orb ambient-orb--a" />
      <div className="ambient-orb ambient-orb--b" />
    </div>
  )
}
