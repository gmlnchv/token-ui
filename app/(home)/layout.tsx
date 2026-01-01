import { HomeLayout } from 'fumadocs-ui/layouts/home'
import Image from 'next/image'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Token UI Logo" width={20} height={20} className="size-5" />
            <span>Token UI</span>
          </div>
        ),
        url: '/',
      }}
      links={[
        {
          text: 'Documentation',
          url: '/docs',
        },
      ]}
    >
      {children}
    </HomeLayout>
  )
}
