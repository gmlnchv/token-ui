'use client'

import { useEffect, useState } from 'react'
import { Marquee } from '@/components/ui/marquee'
import { ColorToken } from '@/registry/components/color-token'
import { DurationToken } from '@/registry/components/duration-token'
import { ElevationToken } from '@/registry/components/elevation-token'
import { OrderToken } from '@/registry/components/order-token'
import { RadiusToken } from '@/registry/components/radius-token'
import { SpacingToken } from '@/registry/components/spacing-token'
import { TypographyToken } from '@/registry/components/typography-token'

const tokenTypes = {
  color: [
    'color-slate-50',
    'color-slate-200',
    'color-slate-400',
    'color-slate-600',
    'color-slate-800',
    'color-slate-950',
    'color-red-50',
    'color-red-200',
    'color-red-400',
    'color-red-600',
    'color-red-800',
    'color-red-950',
    'color-orange-50',
    'color-orange-300',
    'color-orange-500',
    'color-orange-700',
    'color-orange-900',
    'color-amber-50',
    'color-amber-300',
    'color-amber-500',
    'color-amber-700',
    'color-amber-900',
    'color-yellow-50',
    'color-yellow-300',
    'color-yellow-500',
    'color-yellow-700',
    'color-yellow-900',
    'color-lime-50',
    'color-lime-300',
    'color-lime-500',
    'color-lime-700',
    'color-lime-900',
    'color-green-50',
    'color-green-300',
    'color-green-500',
    'color-green-700',
    'color-green-900',
    'color-emerald-50',
    'color-emerald-300',
    'color-emerald-500',
    'color-emerald-700',
    'color-emerald-900',
    'color-teal-50',
    'color-teal-300',
    'color-teal-500',
    'color-teal-700',
    'color-teal-900',
    'color-cyan-50',
    'color-cyan-300',
    'color-cyan-500',
    'color-cyan-700',
    'color-cyan-900',
    'color-sky-50',
    'color-sky-300',
    'color-sky-500',
    'color-sky-700',
    'color-sky-900',
    'color-blue-50',
    'color-blue-300',
    'color-blue-500',
    'color-blue-700',
    'color-blue-900',
    'color-violet-50',
    'color-violet-300',
    'color-violet-500',
    'color-violet-700',
    'color-violet-900',
    'color-purple-50',
    'color-purple-300',
    'color-purple-500',
    'color-purple-700',
    'color-purple-900',
    'color-fuchsia-50',
    'color-fuchsia-300',
    'color-fuchsia-500',
    'color-fuchsia-700',
    'color-fuchsia-900',
    'color-pink-50',
    'color-pink-300',
    'color-pink-500',
    'color-pink-700',
    'color-pink-900',
    'color-rose-50',
    'color-rose-300',
    'color-rose-500',
    'color-rose-700',
    'color-rose-900',

    'background-hover',
    'background-active',
    'text-primary',
    'text-secondary',
    'text-inverse',
    'text-disabled',
  ],
  typography: [
    'font-size-xs',
    'font-size-sm',
    'font-size-md',
    'font-size-lg',
    'font-size-50',
    'font-size-100',
    'font-size-200',
    'font-size-500',
    'fontSizeTextSmall',
    'fontSizeTextNormal',
    'fontSizeTextLarge',
    'font-weight-normal',
    'font-weight-medium',
    'font-weight-bold',
    'line-height-tight',
    'line-height-normal',
    'letter-spacing-tight',
    'headingDisplayFontSize',
  ],
  spacing: ['space-xs', 'space-sm', 'space-md', 'space-lg', 'space-xl', 'space-2xl'],
  radius: ['radius-xs', 'radius-sm', 'radius-md', 'radius-lg', 'radius-xl', 'radius-full'],
  duration: [
    'duration-100',
    'duration-200',
    'duration-300',
    'duration-400',
    'duration-500',
    'duration-instant',
    'duration-fast',
    'duration-base',
    'duration-slow',
    'duration-slower',
    'duration-slowest',
  ],
  elevation: [
    'elevation-low',
    'elevation-medium',
    'elevation-high',
    'shadow-sm',
    'shadow-md',
    'shadow-lg',
  ],
  order: ['z-base', 'z-raised', 'z-dropdown', 'z-sticky', 'z-overlay', 'z-modal', 'z-tooltip'],
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
      // Tailwind color palette values
      // Slate
      if (name.includes('slate-50')) return '#f8fafc'
      if (name.includes('slate-200')) return '#e2e8f0'
      if (name.includes('slate-400')) return '#94a3b8'
      if (name.includes('slate-600')) return '#475569'
      if (name.includes('slate-800')) return '#1e293b'
      if (name.includes('slate-950')) return '#020617'
      // Red
      if (name.includes('red-50')) return '#fef2f2'
      if (name.includes('red-200')) return '#fecaca'
      if (name.includes('red-400')) return '#f87171'
      if (name.includes('red-600')) return '#dc2626'
      if (name.includes('red-800')) return '#991b1b'
      if (name.includes('red-950')) return '#450a0a'
      // Orange
      if (name.includes('orange-50')) return '#fff7ed'
      if (name.includes('orange-300')) return '#fdba74'
      if (name.includes('orange-500')) return '#f97316'
      if (name.includes('orange-700')) return '#c2410c'
      if (name.includes('orange-900')) return '#7c2d12'
      // Amber
      if (name.includes('amber-50')) return '#fffbeb'
      if (name.includes('amber-300')) return '#fcd34d'
      if (name.includes('amber-500')) return '#f59e0b'
      if (name.includes('amber-700')) return '#b45309'
      if (name.includes('amber-900')) return '#78350f'
      // Yellow
      if (name.includes('yellow-50')) return '#fefce8'
      if (name.includes('yellow-300')) return '#fde047'
      if (name.includes('yellow-500')) return '#eab308'
      if (name.includes('yellow-700')) return '#a16207'
      if (name.includes('yellow-900')) return '#713f12'
      // Lime
      if (name.includes('lime-50')) return '#f7fee7'
      if (name.includes('lime-300')) return '#bef264'
      if (name.includes('lime-500')) return '#84cc16'
      if (name.includes('lime-700')) return '#4d7c0f'
      if (name.includes('lime-900')) return '#365314'
      // Green
      if (name.includes('green-50')) return '#f0fdf4'
      if (name.includes('green-300')) return '#86efac'
      if (name.includes('green-500')) return '#22c55e'
      if (name.includes('green-700')) return '#15803d'
      if (name.includes('green-900')) return '#14532d'
      // Emerald
      if (name.includes('emerald-50')) return '#ecfdf5'
      if (name.includes('emerald-300')) return '#6ee7b7'
      if (name.includes('emerald-500')) return '#10b981'
      if (name.includes('emerald-700')) return '#047857'
      if (name.includes('emerald-900')) return '#064e3b'
      // Teal
      if (name.includes('teal-50')) return '#f0fdfa'
      if (name.includes('teal-300')) return '#5eead4'
      if (name.includes('teal-500')) return '#14b8a6'
      if (name.includes('teal-700')) return '#0f766e'
      if (name.includes('teal-900')) return '#134e4a'
      // Cyan
      if (name.includes('cyan-50')) return '#ecfeff'
      if (name.includes('cyan-300')) return '#67e8f9'
      if (name.includes('cyan-500')) return '#06b6d4'
      if (name.includes('cyan-700')) return '#0e7490'
      if (name.includes('cyan-900')) return '#164e63'
      // Sky
      if (name.includes('sky-50')) return '#f0f9ff'
      if (name.includes('sky-300')) return '#7dd3fc'
      if (name.includes('sky-500')) return '#0ea5e9'
      if (name.includes('sky-700')) return '#0369a1'
      if (name.includes('sky-900')) return '#0c4a6e'
      // Blue
      if (name.includes('blue-50')) return '#eff6ff'
      if (name.includes('blue-300')) return '#93c5fd'
      if (name.includes('blue-500')) return '#3b82f6'
      if (name.includes('blue-700')) return '#1d4ed8'
      if (name.includes('blue-900')) return '#1e3a8a'
      // Violet
      if (name.includes('violet-50')) return '#f5f3ff'
      if (name.includes('violet-300')) return '#c4b5fd'
      if (name.includes('violet-500')) return '#8b5cf6'
      if (name.includes('violet-700')) return '#6d28d9'
      if (name.includes('violet-900')) return '#4c1d95'
      // Purple
      if (name.includes('purple-50')) return '#faf5ff'
      if (name.includes('purple-300')) return '#d8b4fe'
      if (name.includes('purple-500')) return '#a855f7'
      if (name.includes('purple-700')) return '#7e22ce'
      if (name.includes('purple-900')) return '#581c87'
      // Fuchsia
      if (name.includes('fuchsia-50')) return '#fdf4ff'
      if (name.includes('fuchsia-300')) return '#f0abfc'
      if (name.includes('fuchsia-500')) return '#d946ef'
      if (name.includes('fuchsia-700')) return '#a21caf'
      if (name.includes('fuchsia-900')) return '#701a75'
      // Pink
      if (name.includes('pink-50')) return '#fdf2f8'
      if (name.includes('pink-300')) return '#f9a8d4'
      if (name.includes('pink-500')) return '#ec4899'
      if (name.includes('pink-700')) return '#be185d'
      if (name.includes('pink-900')) return '#831843'
      // Rose
      if (name.includes('rose-50')) return '#fff1f2'
      if (name.includes('rose-300')) return '#fda4af'
      if (name.includes('rose-500')) return '#f43f5e'
      if (name.includes('rose-700')) return '#be123c'
      if (name.includes('rose-900')) return '#881337'
      // Carbon DS values
      if (name.includes('background-hover')) return '#e5e5e5'
      if (name.includes('background-active')) return '#c6c6c6'
      if (name.includes('text-primary')) return '#161616'
      if (name.includes('text-secondary')) return '#525252'
      if (name.includes('text-inverse')) return '#ffffff'
      if (name.includes('text-disabled')) return '#c6c6c6'
      // Fallback
      return '#3b82f6'
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

    case 'radius':
      if (name.includes('xs')) return '2px'
      if (name.includes('sm')) return '4px'
      if (name.includes('md')) return '8px'
      if (name.includes('lg')) return '12px'
      if (name.includes('xl')) return '16px'
      if (name.includes('full')) return '999px'
      return '8px'

    case 'duration':
      if (name.includes('instant')) return '100ms'
      if (name.includes('fast')) return '150ms'
      if (name.includes('base')) return '250ms'
      if (name.includes('slow') && !name.includes('slower')) return '350ms'
      if (name.includes('slower')) return '500ms'
      if (name.includes('slowest')) return '750ms'
      return '250ms'

    case 'elevation':
      if (name.includes('low') || name.includes('sm')) return '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      if (name.includes('medium') || name.includes('md')) return '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      if (name.includes('high') || name.includes('lg')) return '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      if (name.includes('inner')) return 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      return '0 4px 6px -1px rgba(0, 0, 0, 0.1)'

    case 'order':
      if (name.includes('base')) return '0'
      if (name.includes('raised')) return '10'
      if (name.includes('dropdown')) return '50'
      if (name.includes('sticky')) return '100'
      if (name.includes('overlay')) return '500'
      if (name.includes('modal')) return '1000'
      if (name.includes('tooltip')) return '1500'
      return '0'

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
}) => {
  const key = `${keyPrefix}${token.name}`

  switch (token.type) {
    case 'color':
      return <ColorToken key={key} name={token.name} value={token.value} />
    case 'typography':
      return <TypographyToken key={key} name={token.name} value={token.value} />
    case 'spacing':
      return <SpacingToken key={key} name={token.name} value={token.value} />
    case 'radius':
      return <RadiusToken key={key} name={token.name} value={token.value} />
    case 'duration':
      return <DurationToken key={key} name={token.name} value={token.value} />
    case 'elevation':
      return <ElevationToken key={key} name={token.name} value={token.value} />
    case 'order':
      return <OrderToken key={key} name={token.name} value={token.value} />
    default:
      return null
  }
}

export function AnimatedTokenHero() {
  const [tokens, setTokens] = useState<Array<{ name: string; value: string; type: string }>>([])

  useEffect(() => {
    // Shuffle only on client side to avoid hydration mismatch
    setTokens(shuffleArray(generateTokenNames()))
  }, [])

  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center gap-y-2 overflow-hidden border-border border-b bg-muted/40">
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
