'use client'

import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * Primitives for composable color palette components
 */

type ColorSwatchProps = HTMLAttributes<HTMLDivElement> & {
  /** Color value (hex, rgb, hsl, etc.) */
  value: string
  /** Optional name/label for the color */
  name?: string
}

function ColorSwatch({ value, name, className, children, ...props }: ColorSwatchProps) {
  return (
    <div
      className={cn(
        'group relative flex-1 transition-all duration-200 ease-out hover:flex-[1.08] hover:opacity-95',
        className,
      )}
      style={{ backgroundColor: value }}
      title={name || value}
      {...props}
    >
      {children}
    </div>
  )
}

type ColorSwatchLabelProps = HTMLAttributes<HTMLDivElement>

function ColorSwatchLabel({ className, children, ...props }: ColorSwatchLabelProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-center',
        'opacity-0 transition-opacity group-hover:opacity-100',
        className,
      )}
      {...props}
    >
      <div className="rounded bg-black/70 px-2 py-1 font-mono text-white text-xs shadow-sm">
        {children}
      </div>
    </div>
  )
}

type ColorPaletteLabelProps = HTMLAttributes<HTMLDivElement>

function ColorPaletteLabel({ className, children, ...props }: ColorPaletteLabelProps) {
  return (
    <div className={cn('font-medium text-sm', className)} {...props}>
      {children}
    </div>
  )
}

// ColorPalette - Convenience wrapper

type ColorStop = {
  name?: string
  value: string
}

type ColorPaletteProps = {
  /** Array of colors to display */
  colors: string[] | ColorStop[]
  /** Orientation of the palette (default: horizontal) */
  orientation?: 'horizontal' | 'vertical'
  /** Optional label */
  label?: string
  /** Additional class name for the wrapper (label + palette stack) */
  className?: string
}

/**
 * Mid-level color palette with labels shown by default.
 * Accepts color strings or `{ name, value }` objects.
 * Uses flex layout; switch to vertical via `orientation="vertical"`.
 * Compose your own container plus `ColorSwatch`/`ColorSwatchLabel` for custom layouts.
 */
function ColorPalette({ colors, orientation = 'horizontal', label, className }: ColorPaletteProps) {
  const colorStops: ColorStop[] = colors.map((color) =>
    typeof color === 'string' ? { value: color } : color,
  )

  const orientationClass = orientation === 'vertical' ? 'flex-col h-64' : 'flex-row h-20'

  return (
    <div className={cn('space-y-2', className)}>
      {label && <ColorPaletteLabel>{label}</ColorPaletteLabel>}
      <div className={cn('flex overflow-hidden rounded-md border', orientationClass)}>
        {colorStops.map((stop, index) => (
          <ColorSwatch
            key={`${stop.name || stop.value}-${index}`}
            value={stop.value}
            name={stop.name}
          >
            <ColorSwatchLabel>{stop.value}</ColorSwatchLabel>
          </ColorSwatch>
        ))}
      </div>
    </div>
  )
}

export {
  ColorPalette,
  ColorSwatch,
  ColorSwatchLabel,
  ColorPaletteLabel,
  type ColorPaletteProps,
  type ColorSwatchProps,
  type ColorSwatchLabelProps,
  type ColorPaletteLabelProps,
  type ColorStop,
}
