import { ArrowUpRight } from 'lucide-react'
import type * as React from 'react'

type DocsLinkProps = React.ComponentProps<'a'>

export function DocsLink({ children, ...props }: DocsLinkProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-none not-prose inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 font-medium text-neutral-700 text-xs transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
    >
      {children}
      <ArrowUpRight className="size-3" />
    </a>
  )
}
