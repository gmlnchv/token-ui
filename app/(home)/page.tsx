'use client'

import { ColorPalette } from '@/registry/components/color-palette'
import { ColorToken } from '@/registry/components/color-token'
import { NumberToken } from '@/registry/components/number-token'
import { SpacingToken } from '@/registry/components/spacing-token'
import { TypographyToken } from '@/registry/components/typography-token'
import { CTAButton } from '@/components/cta-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center flex flex-col items-center gap-4 xl:gap-6">
            <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              Components for Design System documentation.
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
              Beautiful, interactive documentation components for your design tokens following industry standards.
            </p>

            <CTAButton href="/docs/components/token">View Components</CTAButton>
          </div>

          {/* Browser Mockup */}
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-md border border-border bg-background shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex items-center">
                  &nbsp;
                </div>
              </div>

              {/* Browser Content */}
              <div className="min-h-[600px] bg-white p-8">
                <div className="mx-auto max-w-4xl">
                  <div className="mb-8">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Acme Design System
                      </span>
                    </div>
                    <h1 className="mb-2 font-bold text-3xl tracking-tight">Color Tokens</h1>
                    <p className="text-muted-foreground">
                      Color tokens represent semantic color palette used throughout the design system.
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="mb-8 flex gap-2 border-b border-border">
                    <button type="button" className="border-b-2 border-primary pb-2 px-1 text-sm font-medium text-primary">
                      Overview
                    </button>
                    <button type="button" className="border-b-2 border-transparent pb-2 px-1 text-sm font-medium text-muted-foreground hover:border-border">
                      Usage
                    </button>
                    <button type="button" className="border-b-2 border-transparent pb-2 px-1 text-sm font-medium text-muted-foreground hover:border-border">
                      Examples
                    </button>
                    <button type="button" className="border-b-2 border-transparent pb-2 px-1 text-sm font-medium text-muted-foreground hover:border-border">
                      API
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <div
                          className="flex h-20 w-full items-center justify-center rounded-lg border border-border"
                          style={{ backgroundColor: '#3b82f6' }}
                        >
                          <span className="bg-white px-2 py-1 rounded text-xs font-medium">
                            #3b82f6
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex h-20 w-full items-center justify-center rounded-lg border border-border bg-slate-50">
                          <span className="bg-white px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                            #1e293b
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex h-20 w-full items-center justify-center rounded-lg border border-border bg-blue-50">
                          <span className="bg-white px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                            #eff6ff
                          </span>
                        </div>
                      </div>
                    </div>

                    <ColorPalette
                      colors={['#dbeafe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb']}
                    />
                    
                    <ColorPalette
                      colors={[
                        { name: 'Success', value: '#10b981' },
                        { name: 'Warning', value: '#f59e0b' },
                        { name: 'Error', value: '#ef4444' },
                        { name: 'Info', value: '#3b82f6' },
                      ]}
                    />

                    {/* Token Tables */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Spacing Table */}
                      <div>
                        <div className="rounded-lg border border-border">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border bg-muted/30">
                                <th className="px-4 py-2 text-left text-xs font-medium">Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><SpacingToken value="4px" name="spaceXSmall" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">4px</code>
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><SpacingToken value="8px" name="spaceSmall" /></td>
                                <td className="px-4 py-2 text-sm font-mono"><code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">8px</code></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><SpacingToken value="16px" name="spaceMedium" /></td>
                                <td className="px-4 py-2 text-sm font-mono"><code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">16px</code></td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm"><SpacingToken value="24px" name="spaceLarge" /></td>
                                <td className="px-4 py-2 text-sm font-mono"><code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">24px</code></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Border Radius Table */}
                      <div>
                        <div className="rounded-lg border border-border">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border bg-muted/30">
                                <th className="px-4 py-2 text-left text-xs font-medium">Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><NumberToken value="0" name="radiusNone" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">0</code>
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><NumberToken value="4px" name="radiusSmall" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">4px</code>
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><NumberToken value="8px" name="radiusMedium" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">8px</code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm"><NumberToken value="12px" name="radiusLarge" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">12px</code>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Typography Table */}
                      <div>
                        <div className="rounded-lg border border-border">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border bg-muted/30">
                                <th className="px-4 py-2 text-left text-xs font-medium">Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><TypographyToken value="14px" name="fontSizeSmall" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">14px</code>
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><TypographyToken value="16px" name="fontSizeMedium" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">16px</code>
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><TypographyToken value="18px" name="fontSizeLarge" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">18px</code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm"><TypographyToken value="24px" name="fontSizeXLarge" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">24px</code>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Color Tokens Table */}
                      <div>
                        <div className="rounded-lg border border-border">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border bg-muted/30">
                                <th className="px-4 py-2 text-left text-xs font-medium">Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><ColorToken value="#3b82f6" name="primaryBlue" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">#3b82f6</code>
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><ColorToken value="#1e293b" name="primaryDark" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">#1e293b</code>
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="px-4 py-2 text-sm"><ColorToken value="#10b981" name="successGreen" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">#10b981</code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm"><ColorToken value="#f59e0b" name="warningAmber" /></td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="font-mono rounded bg-muted px-1 py-0.5 text-xs text-foreground/80">#f59e0b</code>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}