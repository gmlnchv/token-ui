import type { ReactNode } from 'react'
import { HomeLayout } from 'fumadocs-ui/layouts/home'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: 'Token UI',
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
