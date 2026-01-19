'use client'

import posthog from 'posthog-js'
import { CopyButton } from '@/components/copy-button'

export function Installer({ packageName }: { packageName: string }) {
  const command = `npx shadcn add @tokenui/${packageName}`

  const handleInstallCommandCopied = () => {
    // PostHog: Track when users copy the install command
    posthog.capture('installer_command_copied', {
      package_name: packageName,
      command: command,
    })
  }

  return (
    <div className="border-border relative rounded-md border p-4">
      <pre className="bg-background truncate pr-12 font-mono text-sm">{command}</pre>
      <CopyButton
        aria-label="Copy install command"
        className="absolute right-2 top-2"
        size="icon"
        value={command}
        variant="ghost"
        onCopy={handleInstallCommandCopied}
      />
    </div>
  )
}
