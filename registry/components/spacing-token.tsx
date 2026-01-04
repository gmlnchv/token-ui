'use client'

import { Ruler } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type SpacingTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function SpacingToken({ icon: Icon = Ruler, ...props }: SpacingTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { SpacingToken, type SpacingTokenProps }
