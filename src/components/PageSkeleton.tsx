export default function PageSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 w-1/3 rounded bg-line/50"></div>
      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-line/30"></div>
        <div className="h-4 w-5/6 rounded bg-line/30"></div>
        <div className="h-4 w-4/6 rounded bg-line/30"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-32 rounded-card bg-line/20"></div>
        <div className="h-32 rounded-card bg-line/20"></div>
        <div className="h-32 rounded-card bg-line/20"></div>
      </div>
    </div>
  )
}
