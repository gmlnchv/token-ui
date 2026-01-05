'use client'

import { Weight } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type FontWeightTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function FontWeightToken({ icon: Icon = Weight, ...props }: FontWeightTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { FontWeightToken, type FontWeightTokenProps }
