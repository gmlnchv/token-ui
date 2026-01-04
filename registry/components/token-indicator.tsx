'use client'

import type * as React from 'react'

import { cn } from '@/lib/utils'
import { useTokenContext } from './token'

type TokenIndicatorProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode
}

function TokenIndicator({ className, style, children, ...props }: TokenIndicatorProps) {
  const { value } = useTokenContext()

  return (
    <span
      aria-hidden
      className={cn(
        'inline-flex size-4 items-center justify-center rounded-full align-middle',
        className,
      )}
      style={{ backgroundColor: value, ...style }}
      {...props}
    >
      {children}
    </span>
  )
}

export { TokenIndicator, type TokenIndicatorProps }
