import { AnimatedTokenHero } from '@/components/animated-token-hero'
import { CTAButton } from '@/components/cta-button'

export default function Home() {
  return (
    <>
      <AnimatedTokenHero />

      <main className="flex flex-1 flex-col">
        <div className="container mx-auto flex flex-col items-center gap-4 py-8 text-center md:py-16 lg:py-20 xl:gap-6">
          <h1 className="max-w-4xl text-balance font-semibold text-4xl text-primary tracking-tighter sm:text-5xl">
            Token UI
          </h1>

          <p className="mx-auto max-w-lg text-balance text-center text-base text-muted-foreground tracking-tight md:text-lg">
            Beautiful, interactive documentation for your design tokens following industry
            standards.
          </p>

          <CTAButton href="/docs/components/token">View Components</CTAButton>
        </div>
      </main>
    </>
  )
}
