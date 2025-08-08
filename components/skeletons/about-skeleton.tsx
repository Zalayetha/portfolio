import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSkeleton() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <div className="text-center">
          <Skeleton className="h-10 w-48 mx-auto mb-4" />
          <Skeleton className="h-1 w-12 mx-auto" />
        </div>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-8">
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
              <div className="pt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </div>
              <div className="pt-4">
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
