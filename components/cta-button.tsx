'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import type { ReactNode } from 'react'
import { Button } from '@/registry/ui/button'

type CTAButtonProps = {
  href: string
  children: ReactNode
}

export function CTAButton({ href, children }: CTAButtonProps) {
  const handleClick = () => {
    // PostHog: Track when users click the main CTA button
    posthog.capture('cta_button_clicked', {
      button_text: typeof children === 'string' ? children : 'View Components',
      destination_url: href,
    })
  }

  return (
    <Button size="lg" asChild onClick={handleClick}>
      <Link href={href}>{children}</Link>
    </Button>
  )
}
