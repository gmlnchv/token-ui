import Link from 'next/link'
import { Button } from '@/registry/ui/button'

export default function Home() {
  return (
    <div className="bg-background relative z-10 flex min-h-svh flex-col">
      <main className="flex flex-1 flex-col">
        <div className="container flex flex-col items-center gap-4 py-8 text-center md:py-16 lg:py-20 xl:gap-6 mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-7xl font-semibold tracking-tighter text-balance max-w-4xl text-primary">
            Component library for Design System Documentation
          </h1>

          <p className="text-muted-foreground text-base tracking-tight text-balance text-center md:text-lg max-w-lg mx-auto">
            Token UI is a custom registry of composable primitives for documenting your design
            system.
          </p>

          <Button asChild>
            <Link href="/docs/get-started/introduction">Get Started</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
