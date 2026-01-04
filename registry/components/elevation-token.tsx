'use client'

import { Layers } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type ElevationTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function ElevationToken({ icon: Icon = Layers, ...props }: ElevationTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { ElevationToken, type ElevationTokenProps }
