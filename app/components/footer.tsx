export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-border border-t bg-background">
      <div className="p-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-muted-foreground text-sm">
            <p>&copy; {currentYear} Token UI. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/gmlnchv/token-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
