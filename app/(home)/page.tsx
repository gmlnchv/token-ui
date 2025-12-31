import Link from 'next/link'
import { Button } from '@/registry/ui/button'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="container mx-auto flex flex-col items-center gap-4 py-8 text-center md:py-16 lg:py-20 xl:gap-6">
        <h1 className="max-w-4xl text-balance font-semibold text-5xl text-primary tracking-tighter sm:text-7xl md:text-7xl lg:text-7xl">
          Component library for Design System Documentation
        </h1>

        <p className="mx-auto max-w-lg text-balance text-center text-base text-muted-foreground tracking-tight md:text-lg">
          Token UI is a custom registry of composable primitives for documenting your design
          system.
        </p>

        <Button asChild>
          <Link href="/docs/overview/introduction">Get Started</Link>
        </Button>
      </div>
    </main>
  )
}
