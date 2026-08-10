/**
 * 吉祥物调度组件：按学科/宝可梦 key 渲染对应致敬版 SVG。
 * 克制使用：空状态、加载、成就、记忆卡片激励等少数场景。
 */
import { POKEMON_BY_KEY, POKEMON_BY_SUBJECT } from './mascots'

interface MascotProps {
  /** 学科 id 或宝可梦 key */
  subject?: string
  /** 宝可梦 key（优先于 subject） */
  pokemon?: string
  size?: number
  evolved?: boolean
  className?: string
}

export default function Mascot({
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
  return <Comp size={size} evolved={evolved} className={className} />
}
