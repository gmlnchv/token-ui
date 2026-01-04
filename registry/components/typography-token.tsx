'use client'

import { ALargeSmall } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type TypographyTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function TypographyToken({ icon: Icon = ALargeSmall, ...props }: TypographyTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { TypographyToken, type TypographyTokenProps }
