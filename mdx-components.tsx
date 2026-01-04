import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

import { Installer } from '@/components/installer'
import { Preview } from '@/components/preview'
import { VariantNote } from '@/components/variant-note'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Installer,
    Preview,
    VariantNote,
    ...components,
  }
}
