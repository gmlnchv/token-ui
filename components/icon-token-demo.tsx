'use client'

import { Sparkles } from 'lucide-react'

import { BaseIconToken } from '@/registry/components/icon-token'

function IconTokenDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <BaseIconToken name="special" value="123" icon={Sparkles} />
      <BaseIconToken
        name="custom"
        value="--my-token"
        icon={Sparkles}
        iconClassName="size-5 text-amber-500"
      />
    </div>
  )
}

export { IconTokenDemo }
