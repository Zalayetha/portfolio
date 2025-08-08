import { Skeleton } from "@/components/ui/skeleton"

export function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-16" />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </header>
  )
}
