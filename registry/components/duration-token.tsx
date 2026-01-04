'use client'

import { Timer } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type DurationTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function DurationToken({ icon: Icon = Timer, ...props }: DurationTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { DurationToken, type DurationTokenProps }
