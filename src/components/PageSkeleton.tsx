export default function PageSkeleton() {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center space-y-4 opacity-60">
      <svg
        viewBox="0 0 64 64"
        className="h-16 w-16 animate-spin text-[var(--s,var(--gold))]"
        style={{ animationDuration: '2s' }}
        fill="currentColor"
        aria-hidden
      >
        <path d="M32 4C16.5 4 4 16.5 4 32C4 47.5 16.5 60 32 60C47.5 60 60 47.5 60 32C60 16.5 47.5 4 32 4ZM32 10C44.1 10 54 19.9 54 32H38C38 28.7 35.3 26 32 26C28.7 26 26 28.7 26 32H10C10 19.9 19.9 10 32 10ZM32 54C19.9 54 10 44.1 10 32H26C26 35.3 28.7 38 32 38C35.3 38 38 35.3 38 32H54C54 44.1 44.1 54 32 54ZM32 34C30.9 34 30 33.1 30 32C30 30.9 30.9 30 32 30C33.1 30 34 30.9 34 32C34 33.1 33.1 34 32 34Z" />
      </svg>
      <div className="text-sm font-medium text-ink-faint tracking-widest">
        读取中...
      </div>
    </div>
  )
}
