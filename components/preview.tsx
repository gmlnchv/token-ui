'use client'

import { CodeIcon, EyeIcon } from 'lucide-react'
import posthog from 'posthog-js'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { highlightCode } from '@/lib/highlight-code'

type PreviewProps = {
  children: ReactNode
  code: string
}

export function Preview({ children, code }: PreviewProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('')

  useEffect(() => {
    highlightCode(code, 'tsx').then(setHighlightedCode)
  }, [code])

  const handleTabChange = (tab: string) => {
    // PostHog: Track when users switch between code and preview tabs
    posthog.capture('preview_tab_changed', {
      tab_selected: tab,
      code_length: code.length,
    })
  }

  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border bg-background">
      <Tabs defaultValue="preview" className="gap-0" onValueChange={handleTabChange}>
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="code">
            <CodeIcon className="text-muted-foreground" size={16} />
            Code
          </TabsTrigger>
          <TabsTrigger value="preview">
            <EyeIcon className="text-muted-foreground" size={16} />
            Preview
          </TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="overflow-y-auto bg-background">
          {highlightedCode ? (
            <figure data-rehype-pretty-code-figure="">
              {/** biome-ignore lint/security/noDangerouslySetInnerHtml: this is not user input */}
              <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </figure>
          ) : (
            <pre className="m-0 overflow-x-auto bg-muted/50 p-4">
              <code className="font-mono text-sm">{code}</code>
            </pre>
          )}
        </TabsContent>

        <TabsContent value="preview" className="overflow-y-auto bg-background p-6">
          {children}
        </TabsContent>
      </Tabs>
    </div>
  )
}
