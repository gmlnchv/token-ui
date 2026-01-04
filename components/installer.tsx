import { CopyButton } from '@/components/copy-button'

export function Installer({ packageName }: { packageName: string }) {
  const command = `npx shadcn add @tokenui/${packageName}`

  return (
    <div className="relative rounded-md border border-border p-4">
      <pre className="truncate bg-background pr-12 font-mono text-sm">{command}</pre>
      <CopyButton
        aria-label="Copy install command"
        className="absolute top-2 right-2"
        size="icon"
        value={command}
        variant="ghost"
      />
    </div>
  )
}
