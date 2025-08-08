import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function TimelineSkeleton() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <div className="text-center">
          <Skeleton className="h-10 w-80 mx-auto mb-4" />
          <Skeleton className="h-1 w-12 mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white bg-gray-200 shadow-sm z-10"></div>

                {/* Content Card */}
                <div className="ml-16">
                  <Card className="border-0 shadow-sm bg-white">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="space-y-2">
                            <Skeleton className="h-6 w-64" />
                            <Skeleton className="h-4 w-48" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <Skeleton className="h-6 w-20" />
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex gap-4">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-4 w-28" />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-3/4" />
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-32" />
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} className="h-3 w-full" />
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-40" />
                          <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                              <Skeleton key={i} className="h-6 w-16 rounded-full" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <Skeleton className="h-8 w-12 mx-auto mb-2" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
