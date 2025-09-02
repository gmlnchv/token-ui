'use client'

import type * as React from 'react'
import { Button } from '@/registry/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/ui/tooltip'

type TokenProps = {
  name: string
  value: string
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
  return <TooltipContent {...props} />
}

function Token({ ...props }: TokenProps) {
  return (
    <TokenRoot>
      <TokenName>{props.name}</TokenName>
      <TokenValue>{props.value}</TokenValue>
    </TokenRoot>
  )
}

export { Token, type TokenProps }
