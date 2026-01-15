import type { DocsLayoutProps } from 'fumadocs-ui/layouts/notebook'
import { Code, FileText } from 'lucide-react'
import Image from 'next/image'

export function baseOptions(): Omit<DocsLayoutProps, 'tree'> {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Token UI Logo" width={20} height={20} className="size-5" />
          <span className="font-semibold">Token UI</span>
        </div>
      ),
    },
    sidebar: {
      collapsible: true,
      defaultOpenLevel: 2,
      banner: (
        <div className="border-sidebar-border border-b p-3">
          <div className="flex items-center gap-2 font-medium text-sidebar-foreground/80 text-xs">
            <FileText className="size-4" />
            <span>Design System</span>
          </div>
          <p className="mt-1 text-sidebar-foreground/60 text-xs leading-relaxed">
            Component library for design tokens and system documentation
          </p>
        </div>
      ),
      footer: (
        <div className="border-sidebar-border border-t p-3">
          <div className="flex items-center gap-2 text-sidebar-foreground/60 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span>Status: Active</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Code className="size-3 text-sidebar-foreground/40" />
            <span className="text-sidebar-foreground/40 text-xs">v1.0.0</span>
          </div>
        </div>
      ),
    },
  }
}
