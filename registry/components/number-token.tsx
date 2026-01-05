'use client'

import { Hash } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type NumberTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function NumberToken({ icon: Icon = Hash, ...props }: NumberTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { NumberToken, type NumberTokenProps }
