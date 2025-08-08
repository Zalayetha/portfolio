import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center space-y-8">
        {/* Profile Photo Skeleton */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Skeleton className="w-32 h-32 rounded-full" />
            <Skeleton className="absolute -top-2 -right-2 w-8 h-8 rounded-full" />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-16 w-3/4 mx-auto" />
          <Skeleton className="h-8 w-2/3 mx-auto" />
        </div>

        <div className="flex items-center justify-center space-x-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-10 rounded-md" />
          ))}
        </div>

        <div className="pt-8">
          <Skeleton className="h-10 w-10 rounded-md mx-auto" />
        </div>
      </div>
    </section>
  )
}
