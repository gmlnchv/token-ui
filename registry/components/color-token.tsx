'use client'

import { Token, TokenName, type TokenProps } from './token'
import { TokenIndicator } from './token-indicator'

function ColorToken({ name, value, ...props }: TokenProps) {
  return (
    <Token name={name} value={value} {...props}>
      <TokenName>
        <TokenIndicator />
        <span>{name}</span>
      </TokenName>
    </Token>
  )
}

export { ColorToken }
