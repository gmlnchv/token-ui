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

        {/* Features Section */}
        <section className="border-t border-border bg-muted/30 py-12 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-center font-semibold text-2xl md:text-3xl mb-12">Why Token UI?</h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="flex flex-col gap-3">
                <div className="text-3xl">✨</div>
                <h3 className="font-semibold text-lg">Beautiful Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive components that make your design tokens engaging and easy to discover.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl">📋</div>
                <h3 className="font-semibold text-lg">Standards-Inspired</h3>
                <p className="text-sm text-muted-foreground">
                  Aligned with W3C Design Tokens specification for better interoperability.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-3xl">🔧</div>
                <h3 className="font-semibold text-lg">Built on shadcn/ui</h3>
                <p className="text-sm text-muted-foreground">
                  Copy-paste components you own and control. Fully customizable for your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Token Types Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-center font-semibold text-2xl md:text-3xl mb-12">
              Comprehensive Token Support
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Core Types</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Color</li>
                    <li>✅ Dimension (spacing, radius)</li>
                    <li>✅ Font Family</li>
                    <li>✅ Font Weight</li>
                    <li>✅ Duration</li>
                    <li>✅ Number</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Composite Types</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Typography</li>
                    <li>✅ Shadow / Elevation</li>
                    <li>🔜 Easing (Cubic Bézier)</li>
                    <li>🔜 Border</li>
                    <li>🔜 Transition</li>
                    <li>🔜 Gradient</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/30 py-12 md:py-20">
          <div className="container mx-auto flex flex-col items-center gap-6 text-center">
            <div>
              <h2 className="font-semibold text-2xl md:text-3xl mb-3">Ready to get started?</h2>
              <p className="text-muted-foreground max-w-xl">
                Explore our complete component library and learn how to document your design tokens
                beautifully.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
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
