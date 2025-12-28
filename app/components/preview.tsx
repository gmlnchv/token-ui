'use client'

import type { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type PreviewProps = {
  children: ReactNode
  code: string
}

export function Preview({ children, code }: PreviewProps) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border bg-background">
      <Tabs defaultValue="preview" className="gap-0">
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="overflow-y-auto bg-background">
          <pre className="m-0 overflow-x-auto bg-muted/50 p-4">
            <code className="text-sm">{code}</code>
          </pre>
        </TabsContent>

        <TabsContent value="preview" className="overflow-y-auto bg-background p-6">
          {children}
        </TabsContent>
      </Tabs>
    </div>
  )
}
