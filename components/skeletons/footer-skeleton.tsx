import { Skeleton } from "@/components/ui/skeleton"

export function FooterSkeleton() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-40" />
          </div>

          <div className="flex items-center space-x-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-md" />
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </div>
    </footer>
  )
}
