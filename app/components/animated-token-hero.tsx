'use client'

import { useEffect, useState } from 'react'
import { Marquee } from '@/components/ui/marquee'
import {
  TokenIndicator,
  TokenName,
  TokenProvider,
  TokenRoot,
  TokenValue,
} from '@/registry/components/token'

const tokenTypes = {
  color: [
    'text-primary',
    'text-secondary',
    'bg-surface',
    'bg-elevated',
    'border-default',
    'border-subtle',
    'brand-primary',
    'brand-secondary',
    'semantic-success',
    'semantic-error',
    'semantic-warning',
    'semantic-info',
  ],
  typography: [
    'font-size-xs',
    'font-size-sm',
    'font-size-md',
    'font-size-lg',
    'font-weight-normal',
    'font-weight-medium',
    'font-weight-bold',
    'line-height-tight',
    'line-height-normal',
    'letter-spacing-tight',
  ],
  spacing: ['space-xs', 'space-sm', 'space-md', 'space-lg', 'space-xl', 'space-2xl'],
  shadow: [
    'elevation-low',
    'elevation-medium',
    'elevation-high',
    'shadow-sm',
    'shadow-md',
    'shadow-lg',
  ],
}

// Format converters
const formatToken = (_type: string, name: string, format: 'css' | 'js' | 'sass'): string => {
  const tokenName = `${name}`

  switch (format) {
    case 'css':
      return `--${tokenName}`
    case 'js':
      return tokenName
        .split('-')
        .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
        .join('')
    case 'sass':
      return `$${tokenName}`
    default:
      return tokenName
  }
}

const generateTokenValue = (type: string, name: string): string => {
  switch (type) {
    case 'color': {
      // Various color formats
      const colorFormats = [
        '#3b82f6',
        '#8b5cf6',
        '#ef4444',
        '#10b981',
        '#f59e0b',
        'rgb(59, 130, 246)',
        'rgba(139, 92, 246, 0.8)',
        'hsl(217, 91%, 60%)',
        'hsla(262, 83%, 58%, 0.9)',
      ]
      if (name.includes('success')) return '#10b981'
      if (name.includes('error')) return '#ef4444'
      if (name.includes('warning')) return '#f59e0b'
      if (name.includes('info')) return '#3b82f6'
      return colorFormats[Math.floor(Math.random() * colorFormats.length)]
    }

    case 'typography':
      if (name.includes('font-size')) {
        const sizes = ['0.75rem', '0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem']
        if (name.includes('xs')) return '0.75rem'
        if (name.includes('sm')) return '0.875rem'
        if (name.includes('md')) return '1rem'
        if (name.includes('lg')) return '1.125rem'
        return sizes[Math.floor(Math.random() * sizes.length)]
      }
      if (name.includes('font-weight')) {
        if (name.includes('normal')) return '400'
        if (name.includes('medium')) return '500'
        if (name.includes('bold')) return '700'
        return '400'
      }
      if (name.includes('line-height')) {
        if (name.includes('tight')) return '1.25'
        if (name.includes('normal')) return '1.5'
        return '1.5'
      }
      if (name.includes('letter-spacing')) {
        if (name.includes('tight')) return '-0.025em'
        return '0'
      }
      return '1rem'

    case 'spacing': {
      const spacingValues = ['0.25rem', '0.5rem', '1rem', '1.5rem', '2rem', '3rem']
      if (name.includes('xs')) return '0.25rem'
      if (name.includes('sm')) return '0.5rem'
      if (name.includes('md')) return '1rem'
      if (name.includes('lg')) return '1.5rem'
      if (name.includes('xl')) return '2rem'
      if (name.includes('2xl')) return '3rem'
      return spacingValues[Math.floor(Math.random() * spacingValues.length)]
    }

    case 'shadow':
      if (name.includes('low') || name.includes('sm')) return '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      if (name.includes('medium') || name.includes('md')) return '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      if (name.includes('high') || name.includes('lg')) return '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      if (name.includes('inner')) return 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      return '0 4px 6px -1px rgba(0, 0, 0, 0.1)'

    default:
      return ''
  }
}

const generateTokenNames = () => {
  const tokens: Array<{ name: string; value: string; type: string }> = []
  const formats: Array<'css' | 'js' | 'sass'> = ['css', 'js', 'sass']

  Object.entries(tokenTypes).forEach(([type, names]) => {
    names.forEach((name) => {
      formats.forEach((format) => {
        tokens.push({
          name: formatToken(type, name, format),
          value: generateTokenValue(type, name),
          type,
        })
      })
    })
  })

  return tokens
}

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const AnimatedToken = ({
  token,
  keyPrefix = '',
}: {
  token: { name: string; value: string; type: string }
  keyPrefix?: string
}) => (
  <TokenProvider key={`${keyPrefix}${token.name}`} name={token.name} value={token.value}>
    <TokenRoot>
      <TokenName className="border-blue-400 font-mono text-muted-foreground">
        {token.type === 'color' && <TokenIndicator />}
        {token.name}
      </TokenName>
      <TokenValue className="font-mono" />
    </TokenRoot>
  </TokenProvider>
)

export function AnimatedTokenHero() {
  const [tokens, setTokens] = useState<Array<{ name: string; value: string; type: string }>>([])

  useEffect(() => {
    // Shuffle only on client side to avoid hydration mismatch
    setTokens(shuffleArray(generateTokenNames()))
  }, [])

  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center gap-y-2 overflow-hidden border-border border-b bg-muted/20">
      {tokens.length > 0 && (
        <>
          <Marquee pauseOnHover className="p-0 [--duration:600s] [--gap:0.5rem]">
            {tokens.map((token) => (
              <AnimatedToken key={token.name} token={token} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="p-0 [--duration:800s] [--gap:0.5rem]">
            {tokens.map((token) => (
              <AnimatedToken key={`reverse-${token.name}`} token={token} keyPrefix="reverse-" />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </>
      )}
    </div>
  )
}
