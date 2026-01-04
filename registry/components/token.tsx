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

function TokenProvider({ name, value, children }: TokenProviderProps) {
  const contextValue = React.useMemo(() => ({ name, value }), [name, value])
  return <TokenContext.Provider value={contextValue}>{children}</TokenContext.Provider>
}

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
        {copyable && isCopied ? 'Copied!' : children}
      </Button>
    </TooltipTrigger>
  )
}

function TokenValue({ ...props }: React.ComponentProps<typeof TooltipContent>) {
  const { value } = useTokenContext()
  return <TooltipContent {...props}>{value}</TooltipContent>
}

type TokenProps = {
  name: string
  value: string
} & React.ComponentProps<typeof Tooltip>

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

function BasicToken({ name, value, ...props }: TokenProps) {
  return (
    <Token name={name} value={value} {...props}>
      <TokenName>{name}</TokenName>
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
