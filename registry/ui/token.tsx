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
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: value,
        marginRight: 6,
        border: '1px solid #0000001A',
        display: 'inline-block',
        verticalAlign: 'middle',
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

function ColorToken({ name, value, ...props }: TokenProps) {
  return (
    <Token name={name} value={value} {...props}>
      <TokenName>
        <TokenIndicator />
        {name}
      </TokenName>
    </Token>
  )
}

export {
  BasicToken as Token,
  ColorToken,
  TokenProvider,
  TokenRoot,
  TokenName,
  TokenValue,
  TokenIndicator,
  type TokenProps,
}
