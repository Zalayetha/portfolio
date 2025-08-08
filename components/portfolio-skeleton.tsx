import { HeaderSkeleton } from "@/components/skeletons/header-skeleton"
import { HeroSkeleton } from "@/components/skeletons/hero-skeleton"
import { AboutSkeleton } from "@/components/skeletons/about-skeleton"
import { TimelineSkeleton } from "@/components/skeletons/timeline-skeleton"
import { ProjectsSkeleton } from "@/components/skeletons/projects-skeleton"
import { SkillsSkeleton } from "@/components/skeletons/skills-skeleton"
import { ContactSkeleton } from "@/components/skeletons/contact-skeleton"
import { FooterSkeleton } from "@/components/skeletons/footer-skeleton"

export function PortfolioSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSkeleton />
      <main>
        <HeroSkeleton />
        <AboutSkeleton />
        <TimelineSkeleton />
        <ProjectsSkeleton />
        <SkillsSkeleton />
        <ContactSkeleton />
      </main>
      <FooterSkeleton />
    </div>
  )
}
