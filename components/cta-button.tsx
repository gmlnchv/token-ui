'use client'

import { useRouter } from 'next/navigation'
import posthog from 'posthog-js'
import type { ReactNode } from 'react'
import { Button, type ButtonProps } from '@/registry/ui/button'

type CTAButtonProps = Omit<ButtonProps, 'onClick'> & {
  href: string
  children: ReactNode
}

export function CTAButton({ href, children, ...buttonProps }: CTAButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    // PostHog: Track when users click the main CTA button
    posthog.capture('cta_button_clicked', {
      button_text: typeof children === 'string' ? children : 'View Components',
      destination_url: href,
    })
    router.push(href)
  }

  return (
    <Button {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  )
}
