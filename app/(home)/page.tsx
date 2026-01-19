'use client'

import { ColorPalette, ColorSwatch, ColorSwatchLabel } from '@/registry/components/color-palette'
import { ColorToken } from '@/registry/components/color-token'
import { NumberToken } from '@/registry/components/number-token'
import { SpacingToken } from '@/registry/components/spacing-token'
import { TypographyToken } from '@/registry/components/typography-token'
import { CTAButton } from '@/components/cta-button'

export default function Home() {
  return (
    <div className="from-muted/20 to-background min-h-screen bg-gradient-to-br">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col items-center gap-4 text-center xl:gap-6">
            <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              Components for Design System documentation.
            </h1>

            <p className="text-muted-foreground mx-auto max-w-2xl text-balance text-lg">
              Beautiful, interactive documentation components for your design tokens following
              industry standards.
            </p>

            <CTAButton href="/docs/components/token">View Components</CTAButton>
          </div>

          {/* Browser Mockup */}
          <div className="mx-auto max-w-6xl">
            <div className="border-border bg-card overflow-hidden rounded-md border shadow-2xl">
              {/* Browser Header */}
              <div className="border-border bg-muted/50 flex items-center justify-between border-b px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex items-center">&nbsp;</div>
              </div>

              {/* Browser Content */}
              <div className="min-h-[600px] bg-white p-8 dark:bg-gray-950">
                <div className="mx-auto max-w-4xl">
                  <div className="mb-8">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                        Acme Design System
                      </span>
                    </div>
                    <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      Color Tokens
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Color tokens represent semantic color palette used throughout the design
                      system.
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="mb-8 flex gap-2 border-b border-gray-200 dark:border-gray-700">
                    <button
                      type="button"
                      className="border-b-2 border-blue-600 px-1 pb-2 text-sm font-medium text-blue-600 dark:border-blue-400 dark:text-blue-400"
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      className="border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-gray-600 hover:border-gray-200 dark:text-gray-400 dark:hover:border-gray-700"
                    >
                      Usage
                    </button>
                    <button
                      type="button"
                      className="border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-gray-600 hover:border-gray-200 dark:text-gray-400 dark:hover:border-gray-700"
                    >
                      Examples
                    </button>
                    <button
                      type="button"
                      className="border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-gray-600 hover:border-gray-200 dark:text-gray-400 dark:hover:border-gray-700"
                    >
                      API
                    </button>
                  </div>

                   {/* Content */}
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <ColorSwatch
                          value="#3b82f6"
                          className="h-20 w-full rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="rounded bg-white px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                              #3b82f6
                            </span>
                          </div>
                        </ColorSwatch>
                      </div>
                      <div className="space-y-2">
                        <ColorSwatch
                          value="#1e293b"
                          className="h-20 w-full rounded-lg border border-gray-200 bg-slate-50 dark:border-gray-700 dark:bg-gray-900"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="rounded bg-white px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                              #1e293b
                            </span>
                          </div>
                        </ColorSwatch>
                      </div>
                      <div className="space-y-2">
                        <ColorSwatch
                          value="#eff6ff"
                          className="h-20 w-full rounded-lg border border-gray-200 bg-blue-50 dark:border-gray-700 dark:bg-blue-950/20"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="rounded bg-white px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                              #eff6ff
                            </span>
                          </div>
                        </ColorSwatch>
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
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Name
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Value
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <SpacingToken value="4px" name="spaceXSmall" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    4px
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <SpacingToken value="8px" name="spaceSmall" />
                                </td>
                                <td className="px-4 py-2 font-mono text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    8px
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <SpacingToken value="16px" name="spaceMedium" />
                                </td>
                                <td className="px-4 py-2 font-mono text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    16px
                                  </code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm">
                                  <SpacingToken value="24px" name="spaceLarge" />
                                </td>
                                <td className="px-4 py-2 font-mono text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    24px
                                  </code>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Border Radius Table */}
                      <div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Name
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Value
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <NumberToken value="0" name="radiusNone" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    0
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <NumberToken value="4px" name="radiusSmall" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    4px
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <NumberToken value="8px" name="radiusMedium" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    8px
                                  </code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm">
                                  <NumberToken value="12px" name="radiusLarge" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    12px
                                  </code>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Typography Table */}
                      <div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Name
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Value
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <TypographyToken value="14px" name="fontSizeSmall" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    14px
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <TypographyToken value="16px" name="fontSizeMedium" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    16px
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <TypographyToken value="18px" name="fontSizeLarge" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    18px
                                  </code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm">
                                  <TypographyToken value="24px" name="fontSizeXLarge" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    24px
                                  </code>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Color Tokens Table */}
                      <div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Name
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-gray-100">
                                  Value
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <ColorToken value="#3b82f6" name="primaryBlue" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    #3b82f6
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <ColorToken value="#1e293b" name="primaryDark" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    #1e293b
                                  </code>
                                </td>
                              </tr>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2 text-sm">
                                  <ColorToken value="#10b981" name="successGreen" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    #10b981
                                  </code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm">
                                  <ColorToken value="#f59e0b" name="warningAmber" />
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                    #f59e0b
                                  </code>
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
