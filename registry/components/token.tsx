'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/registry/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/ui/tooltip'

type TokenContextValue = {
  name: string
  value: string
}

const TokenContext = React.createContext<TokenContextValue | undefined>(undefined)

function useTokenContext() {
  const context = React.useContext(TokenContext)
  if (context === undefined) {
    throw new Error('useTokenContext must be used within a TokenProvider')
  }
  return context
}

/* -------------------------------------------------------------------------------------------------
 * TokenProvider
 * -----------------------------------------------------------------------------------------------*/

type TokenProviderProps = {
  /** The token name */
  name: string
  /** The token value */
  value: string
  children: React.ReactNode
}

/**
 * Context provider for token name and value.
 * Use this primitive when building custom token compositions.
 */
function TokenProvider({ name, value, children }: TokenProviderProps) {
  const contextValue = React.useMemo(() => ({ name, value }), [name, value])
  return <TokenContext.Provider value={contextValue}>{children}</TokenContext.Provider>
}

/* -------------------------------------------------------------------------------------------------
 * TokenRoot
 * -----------------------------------------------------------------------------------------------*/

type TokenRootProps = React.ComponentProps<typeof Tooltip>

/**
 * Tooltip wrapper with default delay.
 * Use this primitive when building custom token compositions.
 */
function TokenRoot({ delayDuration = 200, ...props }: TokenRootProps) {
  return <Tooltip delayDuration={delayDuration} {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * TokenName
 * -----------------------------------------------------------------------------------------------*/

type TokenNameProps = React.ComponentProps<typeof Button> & {
  /**
   * Whether clicking the token name should copy it to the clipboard.
   * @default true
   */
  copyable?: boolean
}

/**
 * Button trigger that displays the token name and copies it on click.
 * Defaults to displaying the name from context if no children provided.
 * Use this primitive when building custom token compositions.
 */
const TokenName = React.forwardRef<React.ElementRef<typeof Button>, TokenNameProps>(
  ({ children, onClick, copyable = true, ...props }, forwardedRef) => {
    const { name } = useTokenContext()
    const [isCopied, setIsCopied] = React.useState(false)
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    const handleClick = React.useCallback(
      async (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event)

        if (!copyable) {
          return
        }

        if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
          return
        }

        try {
          await navigator.clipboard.writeText(name)
          setIsCopied(true)

          timeoutRef.current = setTimeout(() => setIsCopied(false), 2000)
        } catch (_error) {
          // Silently fail
        }
      },
      [name, onClick, copyable],
    )

    return (
      <TooltipTrigger asChild>
        <Button
          ref={forwardedRef}
          variant="outline"
          onClick={handleClick}
          aria-label={copyable && isCopied ? `Copied ${name}` : `Copy ${name}`}
          {...props}
        >
          {copyable && isCopied ? 'Copied!' : (children ?? name)}
        </Button>
      </TooltipTrigger>
    )
  },
)

TokenName.displayName = 'TokenName'

/* -------------------------------------------------------------------------------------------------
 * TokenValue
 * -----------------------------------------------------------------------------------------------*/

type TokenValueProps = React.ComponentProps<typeof TooltipContent>

/**
 * Tooltip content that displays the token value from context.
 * Use this primitive when building custom token compositions.
 */
const TokenValue = React.forwardRef<React.ElementRef<typeof TooltipContent>, TokenValueProps>(
  ({ sideOffset = 4, ...props }, forwardedRef) => {
    return <TooltipContent ref={forwardedRef} sideOffset={sideOffset} {...props} />
  },
)

TokenValue.displayName = 'TokenValue'

/* -------------------------------------------------------------------------------------------------
 * TokenIndicator
 * -----------------------------------------------------------------------------------------------*/

type TokenIndicatorProps = React.ComponentProps<'span'>

/**
 * Context-aware indicator that displays the token value as a background color.
 * Use with TokenName to add visual indicators to tokens.
 */
const TokenIndicator = React.forwardRef<HTMLSpanElement, TokenIndicatorProps>(
  ({ className, style, children, ...props }, forwardedRef) => {
    const { value } = useTokenContext()

    return (
      <span
        ref={forwardedRef}
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
  },
)

TokenIndicator.displayName = 'TokenIndicator'

/* -------------------------------------------------------------------------------------------------
 * Token
 * -----------------------------------------------------------------------------------------------*/

type TokenProps = React.ComponentProps<typeof Tooltip> & {
  /** The token name */
  name: string
  /** The token value displayed in the tooltip */
  value: string
  /** Custom trigger content */
  children?: React.ReactNode
}

/**
 * Mid-level token composition.
 * Combines TokenProvider, TokenRoot, and TokenValue.
 * Accepts custom children as the tooltip trigger.
 */
function Token({ name, value, children, ...props }: TokenProps) {
  return (
    <TokenProvider name={name} value={value}>
      <TokenRoot {...props}>
        {children}
        <TokenValue>{value}</TokenValue>
      </TokenRoot>
    </TokenProvider>
  )
}

/* -------------------------------------------------------------------------------------------------
 * BasicToken
 * -----------------------------------------------------------------------------------------------*/

type BasicTokenProps = TokenProps & {
  /**
   * Whether clicking the token name should copy it to the clipboard.
   * @default true
   */
  copyable?: boolean
}

/**
 * Pre-composed token component for common use cases.
 * Composes Token with TokenName to provide a button with copy functionality and value tooltip.
 * This is the default export and recommended for most use cases.
 */
function BasicToken({ name, value, copyable, ...props }: BasicTokenProps) {
  return (
    <Token name={name} value={value} {...props}>
      <TokenName copyable={copyable} />
    </Token>
  )
}

/* -----------------------------------------------------------------------------------------------*/

export {
  Token,
  BasicToken,
  BasicToken as default,
  TokenProvider,
  TokenRoot,
  TokenName,
  TokenValue,
  TokenIndicator,
  useTokenContext,
  type TokenProps,
  type BasicTokenProps,
  type TokenNameProps,
  type TokenProviderProps,
  type TokenIndicatorProps,
  type TokenRootProps,
  type TokenValueProps,
}
