'use client'

import { Type } from 'lucide-react'

import { BaseIconToken, type BaseIconTokenProps } from './icon-token'

type FontFamilyTokenProps = Omit<BaseIconTokenProps, 'icon'> & {
  icon?: BaseIconTokenProps['icon']
}

function FontFamilyToken({ icon: Icon = Type, ...props }: FontFamilyTokenProps) {
  return <BaseIconToken icon={Icon} {...props} />
}

export { FontFamilyToken, type FontFamilyTokenProps }
