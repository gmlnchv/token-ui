'use client'

import { Token, TokenIndicator, TokenName, type TokenProps } from './token'

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
