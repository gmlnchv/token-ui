'use client'

import { Spline } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type RadiusTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function RadiusToken({ icon: Icon = Spline, ...props }: RadiusTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { RadiusToken, type RadiusTokenProps }
