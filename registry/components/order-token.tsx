'use client'

import { Layers2 } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type OrderTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function OrderToken({ icon: Icon = Layers2, ...props }: OrderTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { OrderToken, type OrderTokenProps }
