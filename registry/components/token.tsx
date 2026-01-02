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

function TokenName({ children, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <TooltipTrigger asChild>
      <Button variant="outline" {...props}>
        {children}
      </Button>
    </TooltipTrigger>
  )
}

function TokenValue({ ...props }: React.ComponentProps<typeof TooltipContent>) {
  const { value } = useTokenContext()
  return <TooltipContent {...props}>{value}</TooltipContent>
}

const TokenIndicator = () => {
  const { value } = useTokenContext()
  return (
    <div
      className="inline-block size-4 rounded-full align-middle"
      style={{
        backgroundColor: value,
      }}
    />
  )
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
  TokenIndicator,
  type TokenProps,
}
