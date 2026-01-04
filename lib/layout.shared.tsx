import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Token UI Logo" width={20} height={20} className="size-5" />
          <span>Token UI</span>
        </div>
      ),
    },
  }
}
