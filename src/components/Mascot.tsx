/**
 * 吉祥物调度组件：按学科/宝可梦 key 渲染对应致敬版 SVG。
 * 克制使用：空状态、加载、成就、记忆卡片激励等少数场景。
 */
import { POKEMON_BY_KEY, POKEMON_BY_SUBJECT } from './mascots'

interface MascotProps {
  /** 动画状态：idle (默认漂浮) | enter (入场) | happy (答对) | sad (答错) | switch (切换) | none (无动画) */
  state?: 'idle' | 'enter' | 'happy' | 'sad' | 'switch' | 'none'
  /** 学科 id 或宝可梦 key */
  subject?: string
  /** 宝可梦 key（优先于 subject） */
  pokemon?: string
  size?: number
  evolved?: boolean
  className?: string
}

export default function Mascot({
  state = 'idle',
  subject,
  pokemon,
  size = 48,
  evolved = false,
  className,
}: MascotProps) {
  const Comp =
    (pokemon && POKEMON_BY_KEY[pokemon]) ||
    (subject && POKEMON_BY_SUBJECT[subject]) ||
    POKEMON_BY_KEY.pikachu
  const animClass =
    state === 'idle' ? 'mascot-idle mascot-hover' :
    state === 'enter' ? 'mascot-enter' :
    state === 'switch' ? 'mascot-switch' :
    state === 'happy' ? 'mascot-happy' :
    state === 'sad' ? 'mascot-sad' : ''
  const finalClass = [animClass, className].filter(Boolean).join(' ')
  // 切换学科时加个 key 强制重置动画
  const key = subject || pokemon || 'pikachu'

  return <Comp key={key} size={size} evolved={evolved} className={finalClass} />
}
