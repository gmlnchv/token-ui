'use client'

import type { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type PreviewProps = {
  children: ReactNode
  code: string
}

export function Preview({ children, code }: PreviewProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background my-6 not-prose">
      <Tabs defaultValue="preview" className="gap-0">
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="overflow-y-auto bg-background">
          <pre className="p-4 bg-muted/50 overflow-x-auto m-0">
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
