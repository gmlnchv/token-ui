import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

function VariantNote() {
  return (
    <Alert className="border-blue-200 bg-blue-50">
      <AlertTitle>Want your own variant?</AlertTitle>
      <AlertDescription>
        Check the source for this component and the bundled BaseIconToken to mirror the Token →
        TokenName → TokenIndicator pattern when you create your own icon-based token components.
      </AlertDescription>
    </Alert>
  )
}

export { VariantNote }
