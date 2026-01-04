"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import {
  type ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

import { Button } from "@/components/ui/button"

export type CopyButtonProps = Omit<ComponentProps<typeof Button>, "onClick"> & {
  value: string
  timeout?: number
  onCopy?: () => void
  onError?: (error: Error) => void
  copyLabel?: string
  copiedLabel?: string
}

export function CopyButton({
  value,
  timeout = 2000,
  onCopy,
  onError,
  copyLabel = "Copy",
  copiedLabel = "Copied",
  children,
  ...props
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleCopy = useCallback(async () => {
    if (!value) return

    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      onError?.(new Error("Clipboard is not available"))
      return
    }

    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)
      onCopy?.()

      timeoutRef.current = setTimeout(() => setIsCopied(false), timeout)
    } catch (error) {
      onError?.(error instanceof Error ? error : new Error("Copy failed"))
    }
  }, [onCopy, onError, timeout, value])

  const icon = isCopied ? <CheckIcon className="size-4" aria-hidden /> : <CopyIcon className="size-4" aria-hidden />

  return (
    <Button
      type="button"
      aria-live="polite"
      aria-label={isCopied ? copiedLabel : copyLabel}
      onClick={handleCopy}
      {...props}
    >
      {children ?? icon}
    </Button>
  )
}