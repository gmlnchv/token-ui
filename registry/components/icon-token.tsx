'use client'

import type * as React from 'react'

import { Token, TokenName, type TokenProps } from './token'
import { TokenIndicator } from './token-indicator'

type IconComponent = React.ComponentType<React.ComponentProps<'svg'>>

type BaseIconTokenProps = TokenProps & {
  icon: IconComponent
  iconClassName?: string
  indicatorProps?: React.ComponentProps<typeof TokenIndicator>
  children?: React.ReactNode
}

function BaseIconToken({
  icon: Icon,
  iconClassName = 'size-4 text-muted-foreground',
  indicatorProps,
  children,
  name,
  value,
  ...props
}: BaseIconTokenProps) {
  const { className: indicatorClassName, ...restIndicatorProps } = indicatorProps ?? {}

  return (
    <Token name={name} value={value} {...props}>
      <TokenName className="gap-2">
        <TokenIndicator className={indicatorClassName} {...restIndicatorProps}>
          <Icon className={iconClassName} aria-hidden />
        </TokenIndicator>
        <span>{name}</span>
        {children}
      </TokenName>
    </Token>
  )
}

export { BaseIconToken, type BaseIconTokenProps }
