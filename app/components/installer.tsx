import { CopyButton } from "@/components/ui/copy-button"

export function Installer({ packageName }: { packageName: string }) {
  const command = `npx shadcn add @tokenui/${packageName}`

  return (
    <div className="relative rounded-md border border-border p-4">
      <pre className="bg-background font-mono text-sm truncate pr-12">{command}</pre>
      <CopyButton
        aria-label="Copy install command"
        className="absolute right-2 top-2"
        size="icon"
        value={command}
        variant="ghost"
      />
    </div>
  )
}
    