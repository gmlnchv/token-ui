'use client'

import * as React from 'react'
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

type TokenProviderProps = TokenContextValue & {
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

/**
 * Tooltip wrapper with default delay.
 * Use this primitive when building custom token compositions.
 */
function TokenRoot({ ...props }: React.ComponentProps<typeof Tooltip>) {
  return <Tooltip delayDuration={200} {...props} />
}

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
function TokenName({ children, onClick, copyable = true, ...props }: TokenNameProps) {
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
        variant="outline"
        onClick={handleClick}
        aria-label={copyable && isCopied ? `Copied ${name}` : `Copy ${name}`}
        {...props}
      >
        {copyable && isCopied ? 'Copied!' : (children ?? name)}
      </Button>
    </TooltipTrigger>
  )
}

/**
 * Tooltip content that displays the token value from context.
 * Use this primitive when building custom token compositions.
 */
function TokenValue({ ...props }: React.ComponentProps<typeof TooltipContent>) {
  const { value } = useTokenContext()
  return <TooltipContent {...props}>{value}</TooltipContent>
}

type TokenProps = {
  name: string
  value: string
} & React.ComponentProps<typeof Tooltip>

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
        <TokenValue />
      </TokenRoot>
    </TokenProvider>
  )
}

/**
 * Pre-composed token component for common use cases.
 * Displays token name as a button with copy functionality and value tooltip.
 * This is the default export and recommended for most use cases.
 */
function BasicToken({ name, value, copyable, ...props }: TokenProps & { copyable?: boolean }) {
  return (
    <Token name={name} value={value} {...props}>
      <TokenName copyable={copyable} />
    </Token>
  )
}

export {
  Token,
  BasicToken,
  BasicToken as default,
  TokenProvider,
  TokenRoot,
  TokenName,
  TokenValue,
  useTokenContext,
  type TokenProps,
}
