'use client'

import { Token, TokenIndicator, type TokenProps } from './token'

function ColorToken({ name, value, ...props }: TokenProps) {
  return (
    <Token name={name} value={value} {...props}>
      <TokenIndicator />
      {name}
    </Token>
  )
}

export { ColorToken }
