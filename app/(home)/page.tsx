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
            Beautiful, interactive documentation components for your design tokens following
            industry standards.
          </p>

          <CTAButton href="/docs/components/token">View Components</CTAButton>
        </div>

        {/* Features Section */}
        <section className="border-border border-t bg-muted/30 py-12 md:py-20">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center font-semibold text-2xl md:text-3xl">Why Token UI?</h2>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-3">
                <div className="text-3xl">✨</div>
                <h3 className="font-semibold text-lg">Beautiful Documentation</h3>
                <p className="text-muted-foreground text-sm">
                  Interactive components that make your design tokens engaging and easy to discover.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl">📋</div>
                <h3 className="font-semibold text-lg">Standards-Inspired</h3>
                <p className="text-muted-foreground text-sm">
                  Aligned with W3C Design Tokens specification for better interoperability.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl">🔧</div>
                <h3 className="font-semibold text-lg">Built on shadcn/ui</h3>
                <p className="text-muted-foreground text-sm">
                  Copy-paste components you own and control. Fully customizable for your brand.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="border-border border-t bg-muted/30 py-12 md:py-20">
          <div className="container mx-auto flex flex-col items-center gap-6 text-center">
            <div>
              <h2 className="mb-3 font-semibold text-2xl md:text-3xl">Ready to get started?</h2>
              <p className="max-w-xl text-muted-foreground">
                Explore our complete component library and learn how to document your design tokens
                beautifully.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton href="/docs/components/token">View Components</CTAButton>
              <CTAButton variant="outline" href="/docs/overview/spec-compliance">
                Learn About Standards
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
