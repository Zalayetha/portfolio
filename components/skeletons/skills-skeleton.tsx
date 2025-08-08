import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function SkillsSkeleton() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-gray-50">
      <div className="space-y-12">
        <div className="text-center">
          <Skeleton className="h-10 w-72 mx-auto mb-4" />
          <Skeleton className="h-1 w-12 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white">
              <CardHeader>
                <Skeleton className="h-6 w-24 mx-auto" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {Array.from({ length: 7 }).map((_, skillIndex) => (
                    <Skeleton key={skillIndex} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
